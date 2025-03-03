import React, { useEffect, useRef } from "react";
import { AreaSeries, createChart, IChartApi, LineSeries } from "lightweight-charts";

const TimeBasedChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);

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
      timeScale: {
        timeVisible: true,
      },
    });

    chartRef.current = chart;

    // **PAST SERIES** (Original colors)
    const pastSeries = chart.addSeries(AreaSeries,{
      lineColor: "#C0C0EE",
      topColor: "#9D9D9D22",
      bottomColor: "#181837",
      crosshairMarkerBackgroundColor: "transparent",
      baseLineVisible: false,
    });

    // **FUTURE SERIES** (Black border line)
    const futureSeries = chart.addSeries(AreaSeries,{
      lineColor: "#4BC95400",
      topColor: "#44C26012",
      bottomColor: "#181837",
      crosshairMarkerBackgroundColor: "transparent",
      baseLineVisible: false,
    });

    // Data for both past and future
    const data = [
      { time: "2024-02-01", value: 0 },
      { time: "2024-02-02", value: 8 },
      { time: "2024-02-03", value: 10 },
      { time: "2024-02-04", value: 20 },
      { time: "2024-02-05", value: 3 },
      { time: "2024-02-06", value: 43 },
      { time: "2024-02-07", value: 41 },
      { time: "2024-02-08", value: 43 },
      { time: "2024-02-09", value: 56 },
      { time: "2024-02-10", value: 46 },
    ];

    // Split data into past and future
    const midpoint = Math.floor(data.length / 2);
    const pastData = data.slice(0, midpoint + 1); 
    const futureData = data.slice(midpoint); 

    // const transitionTime = data[midpoint].time; // Time where future starts

    // const verticalLineSeries = chart.addSeries(LineSeries,{
    //   color: "#FFFFFF",
    //   lineWidth: 2,
    //   lineStyle: 3, // 1 = Solid, 2 = Dashed, 3 = Dotted
    // });
    // }
    

    pastSeries.setData(pastData);
    futureSeries.setData(futureData);
    

    chart.timeScale().fitContent();

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

  return <div ref={chartContainerRef} style={{ width: "100%", height: "100%" }} />;
};

export default TimeBasedChart;
