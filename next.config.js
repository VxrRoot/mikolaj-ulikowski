/** @type {import('next').NextConfig} */
const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  swcMinify: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  output: {
    globalObject: "this",
  },
  include: path.resolve(__dirname, "src/assets"),
  compiler: {
    styledComponents:
      true |
      {
        ssr: true,
        cssProp: true,
      },
  },
  images: {
    formats: ["image/png", "image/jpg"],
    domains: ["https:/www.datocms-assets.com/45505/**"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https:/www.datocms-assets.com",
        port: "",
        pathname: "/45505/**",
      },
    ],
  },
});
