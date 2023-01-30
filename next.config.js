/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: { TEST_SERVER_URI: process.env.TEST_SERVER_URI },
};

module.exports = nextConfig;
