#!/bin/sh

cd /var/www/html

if [ -f composer.json ] && [ ! -d vendor ]; then
    echo "Installing Composer dependencies..."
    composer install --no-interaction --prefer-dist
elif [ -f composer.json ] && [ -f composer.lock ]; then
    echo "Checking Composer dependencies..."
    composer install --no-interaction --prefer-dist
fi
