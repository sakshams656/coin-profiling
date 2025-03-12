import axios from "axios";

export const data =async()=>{
    const API_URL="https://pro-api.coinmarketcap.com/v2/cryptocurrency/info";
    try {
        const response =await axios({
            url:API_URL,
            method:"GET",
            headers:{
                "X-CMC_PRO_API_KEY":"001b370a-47bd-492e-8582-91e1e25128ae",
            },
            params:{
                id:"1",
            }
        });
    }catch(error){
        console.log(error);
    }
};