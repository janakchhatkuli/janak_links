/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dqwfk2ivg/image/upload/v1742809614/**',
      }
    ]
  }
}

export default nextConfig
