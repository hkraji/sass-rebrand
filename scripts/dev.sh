#!/bin/bash

# Find an available port starting from 3000
find_available_port() {
  local port=3000
  while [ $port -le 3100 ]; do
    if ! lsof -i :$port > /dev/null 2>&1; then
      echo $port
      return
    fi
    port=$((port + 1))
  done
  echo 3000  # fallback
}

PORT=$(find_available_port)
echo "Starting dev server on port $PORT"
exec npx next dev -p $PORT
