/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'framer-motion': 'framer-motion/dist/framer-motion',
    };
    return config;
  },
}

module.exports = nextConfig