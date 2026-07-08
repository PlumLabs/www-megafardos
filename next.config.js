/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/landingA',
        destination: '/landingA.html',
      },
    ]
  },
}
module.exports = nextConfig
