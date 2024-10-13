/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.graphassets.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback, // if you have existing fallbacks, spread them here
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
