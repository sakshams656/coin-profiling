import axios from "@utils/axios";
import {COINMARKETCAP_LATEST,COINMARKETCAP_INFO,GRAPH} from "@constants/api"
import {DataApiResponse,InfoApiResponse,ChartResponse} from "@typings/api/shared/coinMarket";



const API_KEY = process.env.NEXT_PUBLIC_CMC_API_KEY; 
// const API_KEY="001b370a-47bd-492e-8582-91e1e25128ae"

export const data = async (coin_symbol:string="btc"): Promise<DataApiResponse> => {
  try {
    const response = await axios({
      url: COINMARKETCAP_INFO,
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
        "Accept": "application/json"
      },
      params: {
        symbol:coin_symbol,
      }
    });

    return response.data as DataApiResponse;
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
    throw error;
  }
};


export const info = async (coin_symbol:string): Promise<InfoApiResponse> => {
    try {
      const response = await axios({
        url: COINMARKETCAP_LATEST,
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY,
          "Accept": "application/json"
        },
        params: {
          symbol:coin_symbol

        }
      });
  
      return response.data as InfoApiResponse;
    } catch (error) {
      console.error("Error fetching cryptocurrency info:", error);
      throw error;
    }
  };

  export const chart=async(duration:string="1",fromCurrency:string="btc",toCurrency:string="inr"):Promise<ChartResponse>=>{
    try {
      const response = await axios({
        url: GRAPH,
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY,
          "Accept": "application/json"
        },
        params: {
          t:"0",
          frc:fromCurrency,
          tc:toCurrency,
          d:duration
        }
      });
  
      return response.data as ChartResponse;
    } catch (error) {
      console.error("Error fetching graph info:", error);
      throw error;
    }
  }

