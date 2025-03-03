import React, { useEffect, useRef } from "react";
import { createChart, IChartApi ,AreaSeries} from "lightweight-charts";

const TimeBasedChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height:200,
      layout: {
        textColor: "#C0C0EE",
        background: { type: "solid", color: "#181837" },
      },
      timeScale: {
        timeVisible: true, 
        borderColor: "rgba(197, 203, 206, 0.8)",
      },
    });

    chartRef.current = chart;

    const areaSeries = chart.addSeries(AreaSeries,{
      lineColor: "#2962FF",
      topColor: "rgba(41, 98, 255, 0.56)",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });

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

    areaSeries.setData(data);

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

  return <div ref={chartContainerRef} style={{ width: "100%",height:"100%"}} />;
};

export default TimeBasedChart;