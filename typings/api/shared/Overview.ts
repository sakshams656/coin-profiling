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

export interface DataApiResponse {
  data: {
    [key: string]: {
      name: string;
      symbol: string;
      logo: string;
      description: string;
      date_launched: string;
    };
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

export interface InfoApiResponse {
  data: {
    [key: string]: {
      id: number;
      name: string;
      symbol: string;
      cmc_rank: number;
      quote: {
        USD: QuoteData;
        INR: QuoteData; 
      };
      max_supply: number;
      total_supply: number;
      circulating_supply: number;
    };
  };
}