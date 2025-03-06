import AssetsImg from "@public/images";

export const dummyCoinData = {
  name: "Bitcoin",
  price: "₹1,696,313.26",
  change: "↑ 0.31%",
  rank: "# 01",
  stats: [
    { icon: AssetsImg.ic_rank, label: "Coin Rating", value: "A+" },
    { icon: AssetsImg.ic_lineschart, label: "Mkt Dominance", value: "58.98%" },
    { icon: AssetsImg.ic_star, label: "Marked as Fav", value: "35.00%" },
  ],
  performance: {
    ltp: "₹51,18,683.57",
    low24h: "₹48,64,887.52",
    high24h: "₹51,18,683.57",
  },
  trading: {
    activeBuyers: "77%",
    activeSellers: "23%",
  },
  marketStats: {
    marketCap: "₹99,849,937,003,394.05",
    fullyDilutedCap: "₹106,349,404,921,298.88",
    volume24h: "₹3,081,127,262,578.43",
    maxSupply: "21,000,000 BTC",
    totalSupply: "19,716,600 BTC",
    circulatingSupply: "19,716,600 BTC",
  },
};


