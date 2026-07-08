/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/landing-1',
        destination: '/landing-1.html',
      },
    ]
  },
}
module.exports = nextConfig
