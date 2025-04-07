export interface CoinData {
  id: number;
  name: string;
  symbol: string;
  category: string;
  description: string;
  date_launched: string;
  logo?: string;
}

export interface CoinInfo {
  id: number;
  name: string;
  symbol: string;
  category: string;
  description: string;
  cmc_rank: number;
  max_supply: number;
  total_supply: number;
  circulating_supply: number;
  quote: {
    USD: QuoteData;
  };
}

export interface QuoteData {
  price: number;
  percent_change_24h: number;
  market_cap: number;
  market_cap_dominance?: number; 
  fully_diluted_market_cap: number;
  volume_24h: number;
}

// Zeb API

export interface OverviewResponse {
  CoinName: string;
  CoinRank: number;
  MktDominance: number;
  MarkedAsFav: number;
  Statistics: StatisticsStruct;
}

interface StatisticsStruct {
  ActiveBuyers: number;
  ActiveSellers: number;
  MarketCap: number;
  FullyDilutedMarketCap: number;
  Vol_24h: number;
  MaxSupply: number;
  TotalCoinSupply: number;
  CirculatingSupply: number;
}

export interface InfoResponse {
  Launched: string;
  Website: string;
  Info: InfoStruct[];
}

interface InfoStruct {
  Heading: string;
  Description: string;
  Source: string;
}