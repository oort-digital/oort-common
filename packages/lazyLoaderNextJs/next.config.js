/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
      pageExtensions:['tsx', '.js',".jsx"]
  }
  
  module.exports = nextConfig