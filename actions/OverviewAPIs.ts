import axios from "@utils/axios";
import { COINMARKETCAP_LATEST, COINMARKETCAP_INFO, ZEBSTAGE_CATEGORIES } from "@constants/api";
import { DataApiResponse, InfoApiResponse } from "@typings/api/shared/Overview";

const API_KEY = "298b13cf-edee-40a0-865f-7969c7a95526";

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
      },
    });
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