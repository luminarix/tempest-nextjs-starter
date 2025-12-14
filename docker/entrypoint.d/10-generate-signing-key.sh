#!/bin/sh

if ! grep -q '^SIGNING_KEY=' /var/www/html/.env 2>/dev/null; then
    echo "SIGNING_KEY not found in .env, generating..."
    cd /var/www/html && ./tempest key:generate
fi
