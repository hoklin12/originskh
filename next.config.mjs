/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If deploying to a custom subpath, set this; otherwise keep it ''
  basePath: '',

  // Asset prefix (leave blank unless you use a CDN or subpath)
  assetPrefix: '',

  // Ensures React catches more bugs
  reactStrictMode: true,

  // Ignore ESLint errors during build (not recommended for production)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Ignore TypeScript errors during build (useful for development only)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image optimization settings
  images: {
    // Enables using images from any remote URL (be cautious)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
    // Ensures Next.js doesn't apply built-in image optimizations
    // Useful if using <img> instead of <Image>, or hosting yourself
    unoptimized: true,
  },
};

export default nextConfig;
