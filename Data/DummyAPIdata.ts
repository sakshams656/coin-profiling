import { InfoResponse, OverviewResponse } from "@typings/api/shared/Overview";

export const dummyOverviewData = (symbol: string): OverviewResponse => ({
    CoinName: symbol === "BTC" ? "Bitcoin" : "Bitcoin",
    CoinRank: symbol === "BTC" ? 1 : 0,
    MktDominance: symbol === "BTC" ? 45.5 : 0.0,
    MarkedAsFav: symbol === "BTC" ? 75.0 : 0.0,
    Statistics: {
      ActiveBuyers: 1500,
      ActiveSellers: 1200,
      MarketCap: 1.2e12,
      FullyDilutedMarketCap: 2.1e12,
      Vol_24h: 5.5e10,
      MaxSupply: 21000000,
      TotalCoinSupply: 19000000,
      CirculatingSupply: 19000000,
    },
  });

  export const dummyInfoData = (symbol: string): InfoResponse => ({
    Launched: symbol === "BTC" ? "2009-01-03" : "N/A",
    Website: symbol === "BTC" ? "https://bitcoin.org" : "N/A",
    Info: [
      {
        Heading: "Overview",
        Description: symbol === "BTC" ? "A decentralized digital currency" : "No description",
        Source: "Official Website",
      },
    ],
  });