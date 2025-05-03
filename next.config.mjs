/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        // Disable if not needed
        appDir: true,
      },
};

export default nextConfig;
