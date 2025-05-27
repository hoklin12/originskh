/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  assetPrefix: '',
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
        hostname: '**', // Allows all domains (be cautious with this in production)
        port: '',
        pathname: '/**',
        domains: ["originskh-hoklin12s-projects.vercel.app"],
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
