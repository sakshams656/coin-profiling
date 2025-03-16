import axios from "@utils/axios";
import {COINMARKETCAP_LATEST,COINMARKETCAP_INFO} from "@constants/api"
import { CoinData ,DataApiResponse,InfoApiResponse,CoinInfo,QuoteUSD} from "@typings/api/shared/coinMarket";

// const API_KEY = process.env.CMC_API_KEY; 
const API_KEY="001b370a-47bd-492e-8582-91e1e25128ae"

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

