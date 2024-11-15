import createNextIntlPlugin from "next-intl/plugin";

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

export default withNextIntl(nextConfig);
