const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  output: 'export',
  experimental: {
    appDir: true
  },
}

module.exports = withContentlayer(nextConfig);