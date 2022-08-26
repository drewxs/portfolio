/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 86400,
  },
  eslint: {
    dirs: ['components', 'layout', 'pages', 'styles'],
  },
};

module.exports = nextConfig;
