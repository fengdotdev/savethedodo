/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {

  reactStrictMode: true,
  images: {

    unoptimized: true,

    
  },
  //basePath: isProd ? "" : undefined,
 // assetPrefix: isProd ? "/savethedodo" : undefined,
};

module.exports = nextConfig;
