/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
