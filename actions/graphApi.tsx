import axios from "@utils/axios";
import {GRAPH_API} from "@constants/graph"
import {ChartResponse} from "@typings/api/shared/graph";



// const API_KEY = process.env.CMC_API_KEY; 
const API_KEY="001b370a-47bd-492e-8582-91e1e25128ae"

  export const chart=async(duration:string="1"):Promise<ChartResponse>=>{
    try {
      const response = await axios({
        url: GRAPH_API,
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY,
          "Accept": "application/json"
        },
        params: {
          t:"0",
          frc:"btc",
          tc:"inr",
          d:duration
        }
      });
  
      return response.data as ChartResponse;
    } catch (error) {
      console.error("Error fetching graph info:", error);
      throw error;
    }
  }

