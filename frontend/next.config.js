/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  /*env: {
    SITE_KEY: process.env.SITE_KEY,
  },*/
  /**
   * //Below is the config used to change routes. Interchange src and dest to rest. Change dest to change main route 
   *   async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: true,
      },
    ];
  },
   */
}

module.exports = nextConfig
