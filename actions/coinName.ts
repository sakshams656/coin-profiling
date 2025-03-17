import axios from "@utils/axios";
import {COINMARKETCAP_LATEST,COINMARKETCAP_INFO} from "@constants/api"

const API_KEY = "298b13cf-edee-40a0-865f-7969c7a95526"

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
        Accept: "application/json",
      },
      params: {
        id: "1", 
      },
    });
    console.log("CoinMarketCap Info Response:", response.data); 
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
        Accept: "application/json",
      },
      params: {
        id: "1", 
      },
    });
    console.log("CoinMarketCap Latest Response:", response.data); 
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