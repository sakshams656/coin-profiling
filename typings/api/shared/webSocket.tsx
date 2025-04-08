interface LiveData {
    price: string;
    change: string;
    ltp: string;
  }
  
  interface SocketMessage {
    type: string;
    data: {
      [symbol: string]: {
        BuyRate: number;
        SellRate: number;
        LTP: number;
        PercentChange: string;
      };
    };
  }