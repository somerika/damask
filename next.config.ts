import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'damask.fi',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
