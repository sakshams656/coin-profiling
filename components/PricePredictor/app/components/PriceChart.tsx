import React, { useEffect, useRef, useState } from "react";
import { AreaSeries, createChart, IChartApi } from "lightweight-charts";
import { Tags } from "zebpay-ui";

const TimeBasedChart: React.FC = ({ showFutureData }: { showFutureData }) => {
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
    dataY: number; // Add this to store the Y coordinate of the data point
  } | null>(null);
  const [chartDimensions, setChartDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Get initial dimensions
    setChartDimensions({
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight
    });

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 247,

      layout: {
        textColor: "#C0C0EE",
        background: { type: "solid", color: "#181837" },
      },
      grid: {
        vertLines: { color: "transparent" },
        horzLines: { color: "#338FFF0A" },
      },
      crosshair: { vertLine: false, horzLine: false },
      timeScale: {
        borderVisible: false,
        fixLeftEdge: true,
        fixRightEdge: true,
        
      },
      rightPriceScale: {
        autoScale: false,
        borderVisible: false,

        scaleMargins: {
          top: 0.6,
          // bottom: 0.005,
        },
      },
    });

    

    chartRef.current = chart;

    const pastSeries = chart.addSeries(AreaSeries, {
      lineColor: "#C0C0EE",
      topColor: "#9D9D9D22",
      bottomColor: "#181837",
      lastValueVisible: false,
      priceLineVisible: false,
    });

    let futureSeries: any = null;

    if (showFutureData) {
      futureSeries = chart.addSeries(AreaSeries, {
        lineColor: "#EA6161",
        topColor: "#44C26012",
        bottomColor: "#181837",
        lastValueVisible: false,
        priceLineVisible: false,
      });
    }

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
    if (showFutureData && futureSeries) {
      futureSeries.setData(futureData);
    }

    chart.timeScale().fitContent();

    chart.subscribeCrosshairMove((param) => {
      if (!chartContainerRef.current || !param.point || !param.time) {
        setTooltip(null);
        return;
      }

      // Convert hovered time to timestamp
      const hoveredTimestamp = param.time * 1000;

      // Find the closest data point in `pastData` and `futureData`
      let closestDataPoint = null;
      let minTimeDiff = Infinity;

      [...pastData, ...futureData].forEach((d) => {
        const dataTimestamp = d.time * 1000;
        const timeDiff = Math.abs(dataTimestamp - hoveredTimestamp);

        if (timeDiff < minTimeDiff) {
          minTimeDiff = timeDiff;
          closestDataPoint = d;
        }
      });

      // If the closest data point is still too far, hide tooltip
      if (!closestDataPoint || minTimeDiff > 50000) {
        setTooltip(null);
        return;
      }

      // Get Y coordinate of the data point on the chart
      const dataY = pastSeries.priceToCoordinate(closestDataPoint.value);

      if (!dataY || Math.abs(param.point.y - dataY) > 10) {
        // 10px threshold to check if cursor is near the line
        setTooltip(null);
        return;
      }

      // Format date & time
      const hoveredDate = new Date(closestDataPoint.time * 1000);
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

      // Set tooltip values
      setTooltip({
        price: closestDataPoint.value.toFixed(2),
        date: formattedDate,
        time: formattedTime,
      });

      const rect = chartContainerRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: rect.left + param.point.x,
        y: rect.top,
        height: rect.bottom - rect.top,
        hoveredY: param.point.y,
        dataY: dataY, // Store the Y coordinate of the data point
      });
    });

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        
        // Update chart dimensions state for tag positioning
        setChartDimensions({
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [showFutureData]);

  // Calculate tag positions based on chart dimensions
  const historicalTagStyle = {
    name: "1pzk433",
    styles: `position:absolute; left:${chartDimensions.width * 0.3}px; bottom:240px; z-index:1;`,
  };

  const predictionTagStyle = {
    name: "1pzk433",
    styles: `position:absolute; left:${chartDimensions.width * 0.7}px; bottom:240px; z-index:1;`,
  };

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

      <Tags
        size="medium"
        style={historicalTagStyle}
        type="default"
        
      >
        Historical
      </Tags>

      <Tags
        size="medium"
        style={predictionTagStyle}
        type="success"
      >
        Prediction
      </Tags>

      {tooltip && tooltipPosition && (
        <>
          <div
            style={{
              position: "absolute",
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              height: tooltipPosition.dataY, 
              width: "1px",
              backgroundColor: "#338FFF",
              zIndex: 998,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: tooltipPosition.x - 68,
              top: tooltipPosition.y,
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
            <div style={{ fontWeight: "600", fontSize: "12px" }}>
              {tooltip.price} INR
            </div>
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