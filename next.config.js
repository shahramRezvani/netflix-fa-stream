/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'image.tmdb.org',
      'm.media-amazon.com',
      'i.ytimg.com',
      'yt3.ggpht.com',
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;