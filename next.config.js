/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {}, // <-- This tells Next.js: use Webpack if needed

  webpack(config) {
    return config; // keep default webpack behaviour
  },
};

module.exports = nextConfig;
