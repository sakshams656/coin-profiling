import AssetsImg from "@public/images";

export const dummyCoinData = {
  name: "Bitcoin",
  price: "₹1,696,313.26",
  change: "↑ 0.31%",
  rank: "# 01",
  stats: [
    { icon: AssetsImg.ic_star, label: "Coin Rating", value: "A+" },
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

export const dummyData24h = [
  { time: "2023-10-31", value: 32.51 },
  { time: "2023-11-01", value: 31.11 },
  { time: "2023-11-04", value: 27.02 },
  { time: "2023-11-05", value: 27.32 },
  { time: "2023-11-09", value: 28.89 },
];

export const dummyData1W = [
  { time: "2023-10-31", value: 32.51 },
  { time: "2023-11-02", value: 30.89 },
  { time: "2023-11-05", value: 28.45 },
  { time: "2023-11-07", value: 29.12 },
  { time: "2023-11-09", value: 28.89 },
];

export const dummyData1M = [
  { time: "2023-10-01", value: 35.21 },
  { time: "2023-10-15", value: 33.78 },
  { time: "2023-10-31", value: 32.51 },
  { time: "2023-11-05", value: 28.45 },
  { time: "2023-11-09", value: 28.89 },
];

export const dummyData1Y = [
  { time: "2022-11-09", value: 40.12 },
  { time: "2023-02-09", value: 38.56 },
  { time: "2023-05-09", value: 36.78 },
  { time: "2023-08-09", value: 34.23 },
  { time: "2023-11-09", value: 28.89 },
];