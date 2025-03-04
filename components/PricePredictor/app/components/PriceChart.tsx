import React, { useEffect, useRef, useState } from "react";
import { AreaSeries, createChart, IChartApi } from "lightweight-charts";

const TimeBasedChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const [tooltip, setTooltip] = useState<{
    price: number;
    date: string;
    time: string;
  } | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
    height: number;
    hoveredY: number;
  } | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 185,
      layout: {
        textColor: "#C0C0EE",
        background: { type: "solid", color: "#181837" },
      },
      grid: {
        vertLines: { color: "transparent" },
        horzLines: { color: "#338FFF0A" },
      },
      crosshair: {
        vertLine: false,
        horzLine: false,
      },
    });

    chartRef.current = chart;

    // **PAST SERIES**
    const pastSeries = chart.addSeries(AreaSeries, {
      lineColor: "#C0C0EE",
      topColor: "#9D9D9D22",
      bottomColor: "#181837",
      lastValueVisible: false,
      priceLineVisible: false,
    });

    // **FUTURE SERIES**
    const futureSeries = chart.addSeries(AreaSeries, {
      lineColor: "#EA6161",
      topColor: "#44C26012",
      bottomColor: "#181837",
      lastValueVisible: false,
      priceLineVisible: false,
    });

    const data = [
      {
        time: Math.floor(new Date("2024-07-01T01:00:00").getTime() / 1000),
        value: 0,
      },
      {
        time: Math.floor(new Date("2024-07-02T02:15:00").getTime() / 1000),
        value: 8,
      },
      {
        time: Math.floor(new Date("2024-07-03T03:30:00").getTime() / 1000),
        value: 10,
      },
      {
        time: Math.floor(new Date("2024-07-04T04:45:00").getTime() / 1000),
        value: 20,
      },
      {
        time: Math.floor(new Date("2024-07-05T05:00:00").getTime() / 1000),
        value: 3,
      },
      {
        time: Math.floor(new Date("2024-07-06T06:10:00").getTime() / 1000),
        value: 43,
      },
      {
        time: Math.floor(new Date("2024-07-07T07:20:00").getTime() / 1000),
        value: 41,
      },
      {
        time: Math.floor(new Date("2024-07-08T08:30:00").getTime() / 1000),
        value: 43,
      },
      {
        time: Math.floor(new Date("2024-07-09T09:40:00").getTime() / 1000),
        value: 56,
      },
      {
        time: Math.floor(new Date("2024-07-10T10:50:00").getTime() / 1000),
        value: 46,
      },
    ];

    const midpoint = Math.floor(data.length / 2);
    const pastData = data.slice(0, midpoint + 1);
    const futureData = data.slice(midpoint);

    pastSeries.setData(pastData);
    futureSeries.setData(futureData);

    chart.timeScale().fitContent();

    // **Handle crosshair movement to show tooltip and vertical line**
    chart.subscribeCrosshairMove((param) => {
      if (!chartContainerRef.current || !param.point) {
        setTooltip(null);
        return;
      }

      const price = pastSeries.coordinateToPrice(param.point.y);
      const time = chart.timeScale().coordinateToTime(param.point.x);

      if (price === null || time === null) {
        setTooltip(null);
        return;
      }

      // Convert timestamp to readable format
      const hoveredDate = new Date(time * 1000);
      const formattedDate = hoveredDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      const formattedTime = hoveredDate.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // Update tooltip state
      setTooltip({
        price: parseFloat(price.toFixed(2)),
        date: formattedDate,
        time: formattedTime,
      });

      // Update tooltip position
      // Update tooltip position
      const rect = chartContainerRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: rect.left + param.point.x,
        y: rect.top, // Start from above the chart
        height: rect.bottom - rect.top, // Extend to bottom
        hoveredY: param.point.y, // Store hovered Y position
      });
    });

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  return (
    <>
      <div
        ref={chartContainerRef}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "visible",
        }}
      />
      {tooltip && tooltipPosition && (
  <>
    {/* Vertical Line */}
    <div
      style={{
        position: "absolute",
        left: tooltipPosition.x,
        top: tooltipPosition.y, // ✅ Start from the top of the chart
        height: tooltipPosition.hoveredY, // ✅ Extend down to hovered point
        width: "1px",
        backgroundColor: "#338FFF",
        zIndex: 998,
      }}
    />

    {/* Tooltip Box at the Top */}
    <div
      style={{
        position: "absolute",
        left: tooltipPosition.x - 40,
        top: tooltipPosition.y - 30, // ✅ Position at the top of the chart
        background: "#181837",
        color: "#ffffff",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        border: "1px solid #338FFF",
        pointerEvents: "none",
        zIndex: 999,
        textAlign: "center",
        minWidth: "80px",
      }}
    >
      <div style={{ fontWeight: "600", fontSize: "12px" }}>{tooltip.price} INR</div>
      <div style={{ fontSize: "12px", marginTop: "2px" }}>
        {tooltip.date} | {tooltip.time}
      </div>
    </div>
  </>
)}

    </>
  );
};

export default TimeBasedChart;
