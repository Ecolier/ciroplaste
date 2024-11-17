#!/bin/sh

secret=`cat $DNS_CLOUDFLARE_API_TOKEN_FILE`
echo "dns_cloudflare_api_token = $secret" > cloudflare.ini

tail -f /dev/null

certbot certonly --dns-cloudflare-credentials /app/cloudflare.ini -d *.ciroplaste.com

