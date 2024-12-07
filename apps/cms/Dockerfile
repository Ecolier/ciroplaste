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
RUN turbo prune @crp/cms --docker

FROM node:22.6-alpine AS development

RUN corepack enable

WORKDIR /app

COPY --from=builder --link /app/out/json/ .
RUN pnpm install

COPY --from=builder /app/out/full/ .

EXPOSE 3000

ENTRYPOINT [ "pnpm" ]

CMD ["dev", "--filter=@crp/cms..."]
 
# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
 
# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN pnpm install
 
# Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm turbo run build --filter=@crp/cms...
 
FROM base AS production
WORKDIR /app
 
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
 
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/cms/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/cms/.next/static ./apps/cms/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/cms/public ./apps/cms/public
 
CMD node apps/cms/server.js
