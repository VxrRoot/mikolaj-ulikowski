/** @type {import('next').NextConfig} */
const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  swcMinify: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false
  },
  output: {
    globalObject: 'this'
  },
  include: path.resolve(__dirname, 'src/assets'),
  compiler: {
    styledComponents: true | {
      ssr: true,
      cssProp: true,
    }
  },
  images: {
    domains: ['www.datocms-assets.com']
  }
})
