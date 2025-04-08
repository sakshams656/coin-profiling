import axios from "@utils/axios";
import { COINMARKETCAP_LATEST, COINMARKETCAP_INFO, ZEBSTAGE_CATEGORIES,GRAPH} from "@constants/api";
import { DataApiResponse, InfoApiResponse } from "@typings/api/shared/Overview";
import {ChartResponse} from "@typings/api/shared/coinMarket";

const API_KEY = process.env.NEXT_PUBLIC_CMC_API_KEY; 

export const data = async (p0: { symbol: string }): Promise<DataApiResponse> => {
  try {
    const response = await axios({
      url: COINMARKETCAP_INFO,
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
        Accept: "application/json",
      },
      params: {
        symbol: p0.symbol, 
      },
    });
    return response.data as DataApiResponse;
  } catch (error) {
    console.error("Error fetching cryptocurrency info:", error);
    throw error;
  }
};

export const info = async (p0: { symbol: string }): Promise<InfoApiResponse> => {
  try {
    const response = await axios({
      url: COINMARKETCAP_LATEST,
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
        Accept: "application/json",
      },
      params: {
        symbol: p0.symbol,
        convert: 'INR', 
      },
    });
    console.log("DATA :" ,response.data);
    return response.data as InfoApiResponse;
  } catch (error) {
    console.error("Error fetching cryptocurrency quotes:", error);
    throw error;
  }
};

export const fetchZebstageCategories = async (): Promise<any> => {
  try {
    const response = await axios({
      url: ZEBSTAGE_CATEGORIES,
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Zebstage categories:", error);
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
  