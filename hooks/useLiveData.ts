import { useEffect, useState } from "react";

import {Livedata,SocketMessage }from "../typings/api/shared/webSocket"

const useLiveUpdates = (token: string): LiveData => {
  const [data, setData] = useState<LiveData>({
    price: "₹0.00",
    change: "↑ 0.00%",
    ltp: "₹0.00",
  });

  useEffect(() => {
    if (!token) return;

    const connection = new WebSocket("wss://socketdev.znewstage.co/api/v0/websocket/public");

    connection.onopen = () => {
      console.log("Socket opened");
      const sub = JSON.stringify({
        request: `qt/${token.toUpperCase()}-INR`,
      });
      connection.send(sub);
    };

    connection.onmessage = (e: MessageEvent) => {
      const incoming: SocketMessage = JSON.parse(e.data);
      const marketKey = `${token.toUpperCase()}-INR`;

      if (incoming.type === "qt-instant-trade-rate" && incoming.data[marketKey]) {
        const { BuyRate, PercentChange, LTP } = incoming.data[marketKey];

        const updated = {
          price: `₹${BuyRate.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`,
          change: `${parseFloat(PercentChange) >= 0 ? "↑" : "↓"} ${Math.abs(
            parseFloat(PercentChange)
          ).toFixed(2)}%`,
          ltp: `₹${LTP.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`,
        };

        setData(updated);
      }
    };

    connection.onerror = (err: Event) => {
      console.error("Socket error:", err);
    };

    connection.onclose = () => {
      console.log("Socket closed");
    };

    return () => {
      connection.close();
    };
  }, [token]);

  return data;
};

export default useLiveUpdates;
