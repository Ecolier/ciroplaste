import createNextIntlPlugin from "next-intl/plugin";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,

      },
      eslint: {
        ignoreDuringBuilds: true,
      },

      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.ciroplaste.com',
          },
        ],
      },

};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default withNextIntl(nextConfig);
