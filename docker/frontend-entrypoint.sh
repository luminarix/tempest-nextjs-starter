#!/bin/sh

cd /app

if [ -f package.json ]; then
    echo "Installing pnpm dependencies..."
    pnpm install
fi

exec "$@"
