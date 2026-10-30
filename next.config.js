/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Imágenes subidas a Storyblok (a.storyblok.com, a-us.storyblok.com, ...).
    remotePatterns: [{ protocol: 'https', hostname: '*.storyblok.com' }],
  },
}
module.exports = nextConfig
