/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/coin-profiling",
  images: {
    domains: ["s2.coinmarketcap.com", "static.zebpay.com", "images.cointelegraph.com", "imageio.forbes.com", "cdn.sanity.io"], 
  }
};

export default nextConfig;