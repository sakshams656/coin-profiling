interface WebSocketData {
    price: string;
    change: string;
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