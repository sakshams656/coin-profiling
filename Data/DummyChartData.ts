import { chart } from "@actions/overviewApi";


export const fetchData = async (duration:string="1") => {
  try {
    const chartData = await chart(duration);
    

    const realData24h = chartData.data.map((item: { t: number, y: number }) => {
      return {
        time: new Date(item.t).toISOString().split("T")[0],
        value: item.y
      };
    });
    
    return realData24h;
  } catch (error) {
    console.error("Error processing chart data:", error);
    throw error;
  }
};

export const dummyData24h = [
    { time: "2023-10-31", value: 32.51 },
    { time: "2023-11-01", value: 31.11 },
    { time: "2023-11-04", value: 27.02 },
    { time: "2023-11-05", value: 27.32 },
    { time: "2023-11-09", value: 28.89 },
  ];
  
  export const dummyData1W = [
    { time: "2023-10-31", value: 32.51 },
    { time: "2023-11-02", value: 30.89 },
    { time: "2023-11-05", value: 28.45 },
    { time: "2023-11-07", value: 29.12 },
    { time: "2023-11-09", value: 28.89 },
  ];
  
  export const dummyData1M = [
    { time: "2023-10-01", value: 35.21 },
    { time: "2023-10-15", value: 33.78 },
    { time: "2023-10-31", value: 32.51 },
    { time: "2023-11-05", value: 28.45 },
    { time: "2023-11-09", value: 28.89 },
  ];
  
  export const dummyData1Y = [
    { time: "2022-11-09", value: 40.12 },
    { time: "2023-02-09", value: 38.56 },
    { time: "2023-05-09", value: 36.78 },
    { time: "2023-08-09", value: 34.23 },
    { time: "2023-11-09", value: 28.89 },
  ];