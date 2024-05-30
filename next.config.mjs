/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects () {
    return [
      {
        source: '/',
        destination: '/party/create',
        permanent: true
      }
    ]
  }
}

export default nextConfig
