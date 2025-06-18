/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/atlas-website' : '',
  trailingSlash: true,
  experimental: {
    optimizeCss: false,
  },
}

module.exports = nextConfig 