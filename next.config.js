/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "yinyangyogaacademy.com",
      "cdn-icons-png.flaticon.com",
      "www.yogkulam.org",
      "img.icons8.com",
    ],
  },
};

module.exports = nextConfig;
