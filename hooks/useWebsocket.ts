import { useEffect, useState } from "react";

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

const useWebSocket = (coinSymbol: string): WebSocketData => {
  const [wsData, setWsData] = useState<WebSocketData>({
    price: "₹0.00",
    change: "↑ 0.00%",
    isPositive: true,
  });

  useEffect(() => {
    if (!coinSymbol) return;

    const ws = new WebSocket("wss://socketdev.znewstage.co/api/v0/websocket/public");

    ws.onopen = () => {
      console.log("WebSocket connected");
      const request = JSON.stringify({ request: `qt/${coinSymbol.toUpperCase()}-INR` });
      ws.send(request);
    };

    ws.onmessage = (event: MessageEvent) => {
      const message: WebSocketMessage = JSON.parse(event.data);
      if (
        message.type === "qt-instant-trade-rate" &&
        message.data[`${coinSymbol.toUpperCase()}-INR`]
      ) {
        const { BuyRate, PercentChange } = message.data[`${coinSymbol.toUpperCase()}-INR`];
        const formattedPrice = `₹${Number(BuyRate).toLocaleString("en-IN", {
          maximumFractionDigits: 2,
        })}`;
        const percentNum = parseFloat(PercentChange);
        const isPositive = percentNum >= 0;
        const formattedChange = `${isPositive ? "↑" : "↓"} ${Math.abs(percentNum).toFixed(2)}%`;

        setWsData({
          price: formattedPrice,
          change: formattedChange,
          isPositive,
        });
      }
    };

    ws.onerror = (error: Event) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      ws.close();
    };
  }, [coinSymbol]);

  return wsData;
};

export default useWebSocket;