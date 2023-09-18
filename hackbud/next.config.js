/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js

module.exports = {
  serverRuntimeConfig: {
    // Define your project root directory
    PROJECT_ROOT: __dirname,
  },
};

