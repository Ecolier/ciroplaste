FROM certbot/dns-cloudflare:latest AS base

WORKDIR /app

COPY --chmod=755 ./certbot/install.sh .

ENTRYPOINT [ "./install.sh" ]