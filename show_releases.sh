#!/usr/bin/env bash

RELEASES_JSON_FILE="./src/app.json"
RELEAE="$@"

function usage() {
  echo "Usage: $0 [RELEASE-MAJOR-MINOR]"
  exit 1
}

if [[ "$#" != 1 ]]; then
  usage
fi

RELEASE="$1"
PATCHES_PATH=".releases.\"${RELEASE}\""
PATCHES=$( jq -r "${PATCHES_PATH}[]" "${RELEASES_JSON_FILE}" 2>/dev/null)

if [[ -z "$PATCHES" ]]; then
  echo "No patch releases found for release: ${RELEASE}"
  exit 1
fi

for PATCH in $PATCHES; do
  echo $PATCH
done
