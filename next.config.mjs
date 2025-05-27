/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '', // Ensure this is empty unless intended
  assetPrefix: '', // Ensure this is empty unless using a CDN
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
        domains: [], // Add external domains here if using external images
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
