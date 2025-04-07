import axios from "@utils/axios";
import { ZEBSTAGE_CATEGORIES,GRAPH } from "@constants/api";
import { OverviewResponse, InfoResponse} from "@typings/api/shared/Overview";
import {ChartResponse} from "@typings/api/shared/coinMarket";
import { dummyInfoData, dummyOverviewData } from "../Data/DummyAPIdata";

const API_KEY = process.env.NEXT_PUBLIC_CMC_API_KEY; 

export const data = async (p0: { symbol: string }): Promise<OverviewResponse> => {
  try {
    // const response = await axios({
    //   url: `coinprofile/overview/${p0.symbol}`,
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //   },
    // });
    // return response.data as OverviewResponse;

    return dummyOverviewData(p0.symbol);
  } catch (error) {
    console.error("Error fetching cryptocurrency overview:", error);
    throw error;
  }
};

export const info = async (p0: { symbol: string }): Promise<InfoResponse> => {
  try {
    // const response = await axios({
    //   url: `coinprofile/info/${p0.symbol}`,
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //   },
    // });
    // return response.data as InfoResponse;

    return dummyInfoData(p0.symbol);
  } catch (error) {
    console.error("Error fetching cryptocurrency info:", error);
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
  