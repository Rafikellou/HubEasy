/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
      },
      {
        protocol: 'https',
        hostname: 'woocommerce.com',
      },
      {
        protocol: 'https',
        hostname: 'd1eipm3vz40hy0.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
      },
      {
        protocol: 'https',
        hostname: 'a.slack-edge.com',
      },
      {
        protocol: 'https',
        hostname: 'ssl.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'st1.zoom.us',
      },
      {
        protocol: 'https',
        hostname: 'images.typeform.com',
      },
      {
        protocol: 'https',
        hostname: 'd2eebagvwr542c.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'plugin.intuitcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'www.cegid.com',
      },
    ],
  },
}

module.exports = nextConfig
