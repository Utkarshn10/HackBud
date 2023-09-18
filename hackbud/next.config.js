/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  // Other Next.js configurations
  // ...

  // Serve files from the public folder
  // This should be the default behavior, but it's good to check
  webpack(config, { isServer }) {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};

