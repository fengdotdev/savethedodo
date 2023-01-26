/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {

  reactStrictMode: true,
  images: {
    unoptimized: true
    
  },
  basePath: "/savethedodo",
  //assetPrefix: isProd ? '.' : undefined,
};

module.exports = nextConfig;
