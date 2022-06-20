/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['components', 'layout', 'pages', 'styles'],
  },
};

module.exports = nextConfig;
