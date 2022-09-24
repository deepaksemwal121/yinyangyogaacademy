/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["yinyangyogaacademy.com", "cdn-icons-png.flaticon.com"],
  },
};

module.exports = nextConfig;
