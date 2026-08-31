#!/usr/bin/env bash
# Stage deploy: fast-forward git on the server, rebuild, and force-recreate compose services.
#
# Usage (from project root on the server):
#   GIT_REF=dev ./scripts/deploy-stage-git-pull.sh
#
# Config (shell env overrides .env):
#   DOCKER_COMPOSE_FILE  (default: docker-compose.yml)
#   GIT_REMOTE           (default: origin)
#   GIT_REF              (default: dev)

set -euo pipefail

COMPOSE_FILE="${DOCKER_COMPOSE_FILE:-docker-compose.yml}"
GIT_REMOTE="${GIT_REMOTE:-origin}"
GIT_REF="${GIT_REF:-dev}"

if [[ "${COMPOSE_FILE}" == *prod* ]]; then
  echo "Stage deploy must use docker-compose.yml (git pull + local build), not ${COMPOSE_FILE}." >&2
  exit 1
fi

if [[ ! -f "${COMPOSE_FILE}" ]]; then
  echo "Compose file not found: ${COMPOSE_FILE}" >&2
  exit 1
fi

echo "Fetching ${GIT_REMOTE}/${GIT_REF}..."
git fetch "${GIT_REMOTE}" "${GIT_REF}"
git checkout "${GIT_REF}"
git pull --ff-only "${GIT_REMOTE}" "${GIT_REF}"

echo "Rebuilding and force-recreating services..."
docker compose -f "${COMPOSE_FILE}" up -d --build --force-recreate

echo "Stage deploy finished at $(git rev-parse --short HEAD)."
