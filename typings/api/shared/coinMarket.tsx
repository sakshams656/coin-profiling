export interface CoinData {
    id: number;
    name: string;
    symbol: string;
    category: string;
    description: string;
    date_launched: string;

  }
  
  export interface DataApiResponse {
    status: {
      timestamp: string;
      error_code: number;
      error_message: string | null;
      elapsed: number;
      credit_count: number;
      notice: string | null;
    };
    data: {
      [key: string]: CoinData;
    };
  }


  export interface QuoteUSD {
    price: number;
    percent_change_24h: number;
    market_cap: number;
    fully_diluted_market_cap: number;
    volume_24h: number;
    market_cap_dominance: number;
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
      USD: QuoteUSD;
    };
  }
  
  export interface InfoApiResponse {
    status: {
      timestamp: string;
      error_code: number;
      error_message: string | null;
      elapsed: number;
      credit_count: number;
      notice: string | null;
    };
    data: {
      [key: string]: CoinInfo;
    };
  }