/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["htmlena.dev"],
  },
};

module.exports = nextConfig;
