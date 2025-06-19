/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ai-news-hub',
  assetPrefix: '/atlas/',
}

module.exports = nextConfig 