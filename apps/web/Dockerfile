FROM node:22.6-alpine AS base

RUN apk add --no-cache git jq && corepack enable

WORKDIR /app

COPY --link package.json turbo.json ./
RUN TURBO_VERSION=$(cat package.json | jq '.devDependencies["turbo"]' -r) npm i -g turbo@${TURBO_VERSION}

COPY --link . .

RUN turbo prune --scope=@crp/web --docker --out-dir=./out/web

FROM node:22.6-alpine AS development

RUN corepack enable

WORKDIR /app

COPY --from=base --link /app/out/web/json/ .
COPY --from=base --link /app/out/web/yarn.lock ./yarn.lock

RUN yarn install --inline-builds

COPY --from=base /app/out/web/full/ .
COPY --link .gitignore turbo.json ./

EXPOSE 5173

ENTRYPOINT [ "yarn" ]

CMD ["turbo", "run", "dev", "--filter=@crp/web...", "--", "--host", "0.0.0.0"]
