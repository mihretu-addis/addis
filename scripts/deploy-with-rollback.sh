#!/usr/bin/env bash
# Deploy website (Next standalone) via docker compose; validate health (compose
# healthcheck or HTTP on published APP_PORT); on failure rollback .env APP_IMAGE.
#
# On the server (after `docker login` to GHCR):
#   ./scripts/deploy-with-rollback.sh ghcr.io/org/addis-tach-prod:abc1234
#   IMAGE_REPO must match the package when pruning old layers.
#
# Environment (optional):
#   PROJECT_DIR              Directory holding .env and compose file(s). Default: $PWD
#   DEPLOY_CONTAINER_NAME    Default: addis-tach-web
#   DEPLOY_COMPOSE_SERVICE   Compose service name. Default: web
#   DEPLOY_HEALTH_TIMEOUT    Seconds (default 180)
#   DOCKER_COMPOSE_FILE      Default docker-compose.prod.yml if present else docker-compose.yml
#   IMAGE_REPO               If set, runs scripts/docker-retain-images.sh after success
#   PRUNE_DANGLING           Passed to docker-retain-images.sh (e.g. 1)
#
set -euo pipefail

NEW_IMAGE="${1:?Usage: $0 <new-app-image>}"
PROJECT_DIR="${PROJECT_DIR:-${PWD}}"
CONTAINER_NAME="${DEPLOY_CONTAINER_NAME:-addis-tach-web}"
SERVICE="${DEPLOY_COMPOSE_SERVICE:-web}"
HEALTH_TIMEOUT_SEC="${DEPLOY_HEALTH_TIMEOUT:-180}"

cd "${PROJECT_DIR}"

docker_compose() {
  if [[ -n "${DOCKER_COMPOSE_FILE:-}" ]]; then
    docker compose -f "${DOCKER_COMPOSE_FILE}" "$@"
  elif [[ -f docker-compose.prod.yml ]]; then
    docker compose -f docker-compose.prod.yml "$@"
  elif [[ -f docker-compose.yml ]]; then
    docker compose -f docker-compose.yml "$@"
  else
    docker compose "$@"
  fi
}

app_port_from_env() {
  local line
  line="$(grep -E '^APP_PORT=' .env 2>/dev/null | tail -n1 || true)"
  if [[ -n "${line}" ]]; then
    echo "${line#APP_PORT=}"
    return
  fi
  echo "3030"
}

image_from_running_container() {
  docker inspect --format='{{.Config.Image}}' "${CONTAINER_NAME}" 2>/dev/null || true
}

image_from_dotenv() {
  local line
  line="$(grep -E '^APP_IMAGE=' .env 2>/dev/null | tail -n1 || true)"
  if [[ -n "${line}" ]]; then
    echo "${line#APP_IMAGE=}"
    return
  fi
  echo ""
}

set_app_image_in_env() {
  local img="$1"
  if [[ -f .env ]] && grep -q '^APP_IMAGE=' .env; then
    sed -i.bak "s|^APP_IMAGE=.*|APP_IMAGE=${img}|" .env
  else
    echo "APP_IMAGE=${img}" >> .env
  fi
}

wait_for_healthy() {
  local port deadline status

  port="$(app_port_from_env)"
  deadline=$((SECONDS + HEALTH_TIMEOUT_SEC))

  while (( SECONDS < deadline )); do
    status="$(docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{end}}' "${CONTAINER_NAME}" 2>/dev/null || true)"
    if [[ "${status}" == "healthy" ]]; then
      return 0
    fi

    # Compose without health probe: fallback to host port ↔ container 3000.
    if command -v curl >/dev/null 2>&1; then
      if curl -sf "http://127.0.0.1:${port}/" >/dev/null 2>&1; then
        return 0
      fi
    elif command -v wget >/dev/null 2>&1; then
      if wget -q --spider "http://127.0.0.1:${port}/" >/dev/null 2>&1; then
        return 0
      fi
    fi

    sleep 2
  done

  echo "Timed out waiting for ${CONTAINER_NAME} to become healthy (or HTTP OK on host port ${port}). Recent logs:"
  docker logs "${CONTAINER_NAME}" --tail 120 2>&1 || true
  return 1
}

rollback() {
  local prev="$1"

  if [[ -z "${prev}" ]]; then
    echo "No previous image recorded; manual recovery required."
    return 1
  fi

  echo "Rolling back to APP_IMAGE=${prev}"
  set_app_image_in_env "${prev}"
  docker_compose pull "${SERVICE}" || true
  docker_compose up -d --no-deps "${SERVICE}"

  if ! wait_for_healthy; then
    echo "Rollback recreated the container but health check still failed. Investigate immediately."
    return 1
  fi

  echo "Rollback complete; previous image is serving."
  return 0
}

PREVIOUS=""
if docker inspect "${CONTAINER_NAME}" >/dev/null 2>&1; then
  PREVIOUS="$(image_from_running_container)"
fi
if [[ -z "${PREVIOUS}" ]]; then
  PREVIOUS="$(image_from_dotenv)"
fi

echo "Deploying APP_IMAGE=${NEW_IMAGE} (recorded previous: ${PREVIOUS:-<none>})"
set_app_image_in_env "${NEW_IMAGE}"

docker_compose pull "${SERVICE}"
docker_compose up -d --no-deps "${SERVICE}"

if ! wait_for_healthy; then
  echo "Health check failed after deploy."
  if [[ -n "${PREVIOUS}" ]]; then
    rollback "${PREVIOUS}" || true
  fi
  exit 1
fi

if [[ -n "${IMAGE_REPO:-}" ]] && [[ -x scripts/docker-retain-images.sh ]]; then
  PRUNE_DANGLING="${PRUNE_DANGLING:-0}" ./scripts/docker-retain-images.sh "${IMAGE_REPO}" \
    || echo "Warning: docker-retain-images.sh failed (disk / docker rmi)."
fi

echo "Deploy finished successfully."