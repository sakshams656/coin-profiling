interface WebSocketData {
    price: string;
    change: string;
    isPositive: boolean;
  }
  
  interface WebSocketMessage {
    type: string;
    data: {
      [key: string]: {
        BuyRate: number;
        SellRate: number;
        LTP: number;
        PercentChange: string;
      };
    };
  }