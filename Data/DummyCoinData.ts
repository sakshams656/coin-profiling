import AssetsImg from "@public/images";

import {info} from "../actions/overviewApi"

export const real_data=async()=>{
  try{
    const response =await info();
    const data=response.data[1];

    return{
      name:data.name,
      price:`₹${(data.quote.USD.price*86).toLocaleString()}`,
      change:`${data.quote.USD.percent_change_24h>0? "↑" : "↓"} ${Math.abs(data.quote.USD.percent_change_24h).toFixed(2)}`,
      rank:`# ${String(data.cmc_rank).padStart(2,'0')}`,
      stats:[
        { icon: AssetsImg.ic_rank, label: "Coin Rating", value: "A+" },
        { icon: AssetsImg.ic_lineschart, label: "Mkt Dominance", value: `${data.quote.USD.market_cap_dominance.toFixed(2)}` },
        { icon: AssetsImg.ic_star, label: "Marked as Fav", value: "35.00%" },
      ],
      performance: {
        ltp: "₹51,18,683.57",
        low24h: "₹48,64,887.52",
        high24h: "₹51,18,683.57",
      },
      trading: {
        activeBuyers: "77%",
        activeSellers: "23%",
      },
      marketStats:{
        marketCap:`₹${(data.quote.USD.market_cap*86).toLocaleString()}`,
        fullyDilutedCap:`₹${(data.quote.USD.fully_diluted_market_cap*86).toLocaleString()}`,
        volume24h: `₹${(data.quote.USD.volume_24h * 20.43).toLocaleString()}`,
        maxSupply: `${data.max_supply.toLocaleString()} ${data.symbol}`,
        totalSupply: `${data.total_supply.toLocaleString()} ${data.symbol}`,
        circulatingSupply: `${data.circulating_supply.toLocaleString()} ${data.symbol}`,
      }
    }
  }catch{
    console.log("Error in fetching data");
  }
};

export const dummyCoinData = {
  name: "Bitcoin",
  price: "₹1,696,313.26",
  change: "↑ 0.31%",
  rank: "# 01",
  stats: [
    { icon: AssetsImg.ic_rank, label: "Coin Rating", value: "A+" },
    { icon: AssetsImg.ic_lineschart, label: "Mkt Dominance", value: "58.98%" },
    { icon: AssetsImg.ic_star, label: "Marked as Fav", value: "35.00%" },
  ],
  performance: {
    ltp: "₹51,18,683.57",
    low24h: "₹48,64,887.52",
    high24h: "₹51,18,683.57",
  },
  trading: {
    activeBuyers: "77%",
    activeSellers: "23%",
  },
  marketStats: {
    marketCap: "₹99,849,937,003,394.05",
    fullyDilutedCap: "₹106,349,404,921,298.88",
    volume24h: "₹3,081,127,262,578.43",
    maxSupply: "21,000,000 BTC",
    totalSupply: "19,716,600 BTC",
    circulatingSupply: "19,716,600 BTC",
  },
};


