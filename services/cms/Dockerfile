FROM node:22.6-alpine AS app-builder

RUN apk add --no-cache git jq && corepack enable

WORKDIR /app

COPY --link package.json turbo.json ./
RUN TURBO_VERSION=$(cat package.json | jq '.devDependencies["turbo"]' -r) npm i -g turbo@${TURBO_VERSION}

COPY --link . .

RUN turbo prune --scope=@crp/cms --docker --out-dir=./out/cms

FROM app-builder AS app-installer

ENV YARN_ENABLE_GLOBAL_CACHE=false
ENV YARN_ENABLE_MIRROR=false
ENV YARN_NODE_LINKER=node-modules
ENV YARN_NM_MODE=hardlinks-local
ENV YARN_ENABLE_HARDENED_MODE=0
ENV YARN_CHECKSUM_BEHAVIOR=reset

WORKDIR /app

COPY --link .gitignore ./
COPY --from=app-builder --link /app/out/cms/json/ .
COPY --from=app-builder --link /app/out/cms/yarn.lock ./yarn.lock

RUN yarn install --inline-builds

COPY --from=app-builder /app/out/cms/full/ .
COPY --link .gitignore turbo.json ./

RUN yarn turbo run build --filter=@crp/cms...
RUN yarn workspaces focus @crp/cms --production

FROM node:23-alpine AS app-runner

ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
ENV NODE_ENV=production

RUN apk add --no-cache tzdata bash && corepack enable

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 payloadcms

RUN mkdir media
RUN chown payloadcms media

USER payloadcms

COPY --from=app-installer --chown=payloadcms:nodejs /app/node_modules ./node_modules
COPY --from=app-installer --chown=payloadcms:nodejs /app/services/cms/package.json ./
COPY --from=app-installer --chown=payloadcms:nodejs /app/services/cms/build ./build
COPY --from=app-installer --chown=payloadcms:nodejs /app/services/cms/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.js"]
