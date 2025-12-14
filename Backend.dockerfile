FROM serversideup/php:8.4-frankenphp

USER root

RUN install-php-extensions intl ftp

COPY --chmod=755 docker/entrypoint.d/ /etc/entrypoint.d/
