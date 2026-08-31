#!/usr/bin/env bash
# After a deploy, delete old local copies of an app image so only the N newest
# unique image IDs remain (default N=3: current + two previous).
#
# Usage:
#   ./scripts/docker-retain-images.sh ghcr.io/org/eagate-dashboard
#   KEEP=5 ./scripts/docker-retain-images.sh my-registry/app
#   ./scripts/docker-retain-images.sh --dry-run ghcr.io/org/eagate-dashboard
#
# Optional:
#   PRUNE_DANGLING=1 ./scripts/docker-retain-images.sh ...   # prune untagged layers afterward
#
set -euo pipefail

KEEP="${KEEP:-3}"
DRY_RUN=0
FORCE=0
IMAGE=""

usage() {
    echo "Usage: $0 [--keep N] [--dry-run] [--force] <repository>"
    echo ""
    echo "  <repository>   Docker image name without tag, e.g. ghcr.io/acme/eagate-dashboard"
    echo "  --keep N       Retain N newest unique image IDs (default: ${KEEP})"
    echo "  --dry-run      Print IDs that would be removed; do not delete"
    echo "  --force        Pass -f to docker rmi (when old containers still reference layers)"
    echo ""
    echo "Environment:"
    echo "  KEEP                 Same as --keep"
    echo "  PRUNE_DANGLING=1     Run 'docker image prune -f' after removals"
    exit "${1:-0}"
}

while [[ $# -gt 0 ]]; do
    case "$1" in
        -h | --help)
            usage 0
            ;;
        --keep)
            KEEP="${2:?--keep requires a number}"
            shift 2
            ;;
        --dry-run)
            DRY_RUN=1
            shift
            ;;
        --force)
            FORCE=1
            shift
            ;;
        -*)
            echo "Unknown option: $1" >&2
            usage 1
            ;;
        *)
            IMAGE="$1"
            shift
            ;;
    esac
done

if [[ -z "${IMAGE}" ]]; then
    echo "Error: repository argument is required." >&2
    usage 1
fi

if [[ "${IMAGE}" == *:* ]]; then
    echo "Error: pass the repository only, without a tag (got: ${IMAGE})." >&2
    exit 1
fi

if ! [[ "${KEEP}" =~ ^[1-9][0-9]*$ ]]; then
    echo "Error: KEEP must be a positive integer (got: ${KEEP})." >&2
    exit 1
fi

unique_file="$(mktemp)"
trap 'rm -f "${unique_file}"' EXIT

docker images "${IMAGE}" --format '{{.ID}}' | awk '!seen[$0]++' >"${unique_file}"

count="$(wc -l <"${unique_file}" | tr -d ' ')"
if [[ "${count}" -eq 0 ]]; then
    echo "No images matched: ${IMAGE}"
    exit 0
fi

if [[ "${count}" -le "${KEEP}" ]]; then
    echo "Only ${count} unique image(s) for ${IMAGE}; nothing to remove (keep=${KEEP})."
    exit 0
fi

remove_count=$((count - KEEP))
echo "Keeping newest ${KEEP} unique image(s) for ${IMAGE}; removing ${remove_count} older ID(s)."

if [[ "${DRY_RUN}" -eq 1 ]]; then
    echo "Would remove:"
    tail -n +$((KEEP + 1)) "${unique_file}"
    exit 0
fi

rmi_flags=()
if [[ "${FORCE}" -eq 1 ]]; then
    rmi_flags+=(-f)
fi

while IFS= read -r id; do
    [[ -z "${id}" ]] && continue
    docker rmi "${rmi_flags[@]}" "${id}"
done < <(tail -n +$((KEEP + 1)) "${unique_file}")

if [[ "${PRUNE_DANGLING:-0}" == "1" ]]; then
    docker image prune -f
fi