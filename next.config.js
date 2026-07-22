/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/landing-1',
        destination: '/landing-1.html',
      },
      {
        source: '/landing-6',
        destination: '/landing-6.html',
      },
    ]
  },
}
module.exports = nextConfig
