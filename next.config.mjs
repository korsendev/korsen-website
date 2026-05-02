/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/cotizar/:topic", destination: "/?cotizar=:topic", permanent: false },
      { source: "/cotizar", destination: "/", permanent: false },
    ]
  },
}

export default nextConfig