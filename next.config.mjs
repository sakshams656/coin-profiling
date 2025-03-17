/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/coin-profiling",
  images: {
    domains: ["s2.coinmarketcap.com"], 
  }
};

export default nextConfig;
