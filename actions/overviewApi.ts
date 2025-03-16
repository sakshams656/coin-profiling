import axios from "@utils/axios";
import {COINMARKETCAP_LATEST,COINMARKETCAP_INFO} from "@constants/api"


// const COINMARKETCAP_API_URL1 = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/info";
// const COINMARKETCAP_API_URL2 = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest";
// const COINMARKETCAP_API_URL3 = "https://pro-api.coinmarketcap.com/v1/partners/flipside-crypto/fcas/listings/latest";

// const API_KEY = process.env.CMC_API_KEY; 
const API_KEY="001b370a-47bd-492e-8582-91e1e25128ae"



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

export const data = async (): Promise<DataApiResponse> => {
  try {
    const response = await axios({
      url: COINMARKETCAP_INFO,
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
        "Accept": "application/json"
      },
      params: {
        id: "2"
      }
    });

    return response.data as DataApiResponse;
  } catch (error) {
    console.error("Error fetching cryptocurrency info:", error);
    throw error;
  }
};

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

export const info = async (): Promise<InfoApiResponse> => {
    try {
      const response = await axios({
        url: COINMARKETCAP_LATEST,
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY,
          "Accept": "application/json"
        },
        params: {
          id: "1"
        }
      });
  
      return response.data as InfoApiResponse;
    } catch (error) {
      console.error("Error fetching cryptocurrency info:", error);
      throw error;
    }
  };

  // export const rating = async (): Promise<any> => {
  //   try {
  //     const response = await axios({
  //       url: COINMARKETCAP_API_URL3,
  //       method: "GET",
  //       headers: {
  //         "X-CMC_PRO_API_KEY": API_KEY,
  //         "Accept": "application/json"
  //       },
  //       params: {
  //         id: "1"
  //       }
  //     });
  
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching cryptocurrency info:", error);
  //     throw error;
  //   }
  // };
