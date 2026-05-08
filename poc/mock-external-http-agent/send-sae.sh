#!/usr/bin/env bash
set -euo pipefail

TARGET_URL="${TARGET_URL:-http://127.0.0.1:4044/sae}"
PAYLOAD_PATH="${1:-/Users/ry/sae/examples/research-brief.json}"

curl -sS -X POST "$TARGET_URL" \
  -H "Content-Type: application/json" \
  --data-binary "@$PAYLOAD_PATH"

echo
