/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'v0.blob.com'
    ],
    unoptimized: true,
  },
  // Other Next.js config options can go here
};

export default nextConfig;
