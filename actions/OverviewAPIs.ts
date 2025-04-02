import axios from "@utils/axios";
import { COINMARKETCAP_LATEST, COINMARKETCAP_INFO, ZEBSTAGE_CATEGORIES,GRAPH,NEWS_LATEST } from "@constants/api";
import { DataApiResponse, InfoApiResponse } from "@typings/api/shared/Overview";
import {ChartResponse} from "@typings/api/shared/coinMarket";
import {NewsArticle} from "@typings/api/shared/news";

const API_KEY = process.env.NEXT_PUBLIC_CMC_API_KEY; 
const BASE_URL = 'https://newsapi.org/v2/everything';
const NEWS_API_KEY = '1047c9daebe448f6bffbff139e9c9017'; 
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000;

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

  // export const getCryptoNews = async (searchTerm: string = ''): Promise<NewsArticle[]> => {
  //   try {
  //     const response = await axios({
  //       url: NEWS_LATEST,
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //       },
  //       params: {
  //         q: searchTerm || '(cryptocurrency OR crypto OR blockchain OR bitcoin OR ethereum)',
  //         sortBy: "publishedAt",
  //         language: "en",
  //         domains: "wsj.com,forbes.com,bloomberg.com,coindesk.com,cointelegraph.com,zebpay.com",
  //         pageSize: 100,
  //         apiKey: NEWS_API_KEY,
  //       },
  //     });
  
  //     return response.data.articles as NewsArticle[];
  //   } catch (error) {
  //     console.error("Error fetching cryptocurrency news:", error);
  //     throw error;
  //   }
  // };
  