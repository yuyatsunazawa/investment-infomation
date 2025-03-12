
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // 必要なら画像のドメイン許可
  },
};

module.exports = nextConfig;
