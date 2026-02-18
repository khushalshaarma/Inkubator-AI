/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in newer Next.js releases; remove deprecated experimental flags.
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
