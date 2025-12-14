FROM node:24

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --chmod=755 docker/frontend-entrypoint.sh /entrypoint.sh
COPY docker/bashrc /root/.bashrc

ENTRYPOINT ["/entrypoint.sh"]
CMD ["pnpm", "dev"]

EXPOSE 3000
