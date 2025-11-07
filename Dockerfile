# syntax = docker/dockerfile:1

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim AS base
WORKDIR /app
RUN corepack enable

FROM base AS build
ENV NODE_ENV=development
# Install git for pnpm dependencies that use git repositories
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*
# Configure git to use HTTPS instead of SSH (no SSH keys available in build)
RUN git config --global url."https://github.com/".insteadOf "git@github.com:" && \
    git config --global url."https://github.com/".insteadOf "ssh://git@github.com/" && \
    git config --global url."https://github.com/".insteadOf "git+ssh://git@github.com/"
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false
COPY . .
RUN pnpm build
RUN pnpm prune --prod

FROM node:${NODE_VERSION}-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
EXPOSE 8080
CMD ["node", "./dist/server/entry.mjs"]
