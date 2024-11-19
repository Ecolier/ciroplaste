FROM node:18-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
 
FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
# Replace <your-major-version> with the major version installed in your repository. For example:
# RUN yarn global add turbo@^2
RUN pnpm add --global turbo@^2
COPY . .
 
# Generate a partial monorepo with a pruned lockfile for a target workspace.
# Assuming "web" is the name entered in the project's package.json: { name: "web" }
RUN turbo prune @crp/web --docker

FROM node:22.6-alpine AS development

RUN corepack enable

WORKDIR /app

COPY --from=builder --link /app/out/json/ .
RUN pnpm install

COPY --from=builder /app/out/full/ .

EXPOSE 3000

ENTRYPOINT [ "pnpm" ]

CMD ["dev", "--filter=@crp/web..."]