/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { AreaSeries, createChart, ColorType } from "lightweight-charts";
import { colors, utils, Tabs } from "zebpay-ui";
import { chartContainer, header, innerChartContainer, performanceGraphContainer, performanceTag, title } from "./styles";
import { dummyData1M, dummyData1W, dummyData1Y, dummyData24h } from "../../../Data/DummyCoinData"; 

const PerformanceGraph: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [timePeriod, setTimePeriod] = useState("24H");
  const [chartInstance, setChartInstance] = useState<any>(null);
  const [seriesInstance, setSeriesInstance] = useState<any>(null);

  const dataByPeriod = {
    "24H": dummyData24h,
    "1W": dummyData1W, 
    "1M": dummyData1M, 
    "1Y": dummyData1Y, 
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const handleResize = () => {
      if (chartInstance) {
        chartInstance.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: colors.Zeb_Solid_Dark_Blue },
        textColor: colors.Zeb_Solid_White,
      },
      width: chartContainerRef.current.clientWidth,
      height: 200,
      grid: {
        vertLines: { color: colors.Zeb_Solid_Dark_Blue },
        horzLines: { color: colors.Zeb_Transparent_4 },
      },
      timeScale: {
        borderColor: colors.Zeb_Transparent_4,
      },
      priceScale: {
        borderColor: colors.Zeb_Transparent_4,
      },
    });
    chart.timeScale().fitContent();

    const series = chart.addSeries(AreaSeries, {
      lineColor: "#2ECC71",
      topColor: "rgba(46, 204, 113, 0.4)",
      bottomColor: "rgba(46, 204, 113, 0.1)",
    });
    series.setData(dataByPeriod["24H"]);

    setChartInstance(chart);
    setSeriesInstance(series);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chart) chart.remove();
    };
  }, []);

  useEffect(() => {
    if (seriesInstance) {
      seriesInstance.setData(dataByPeriod[timePeriod]);
      if (chartInstance) {
        chartInstance.timeScale().fitContent();
      }
    }
  }, [timePeriod, seriesInstance, chartInstance]);

  return (
    <div css={performanceGraphContainer}>
      <div css={header}>
        <span css={title}>Performance</span>
        <span css={performanceTag}>
          ↑ 0.31% | 24H
        </span>
      </div>
      <div css={innerChartContainer}>
        <div css={chartContainer} ref={chartContainerRef} />
        <Tabs
          onChange={(tab) => setTimePeriod(tab)}
          selectedTab={timePeriod}
          tabsList={[
            { tab: "24H", title: <>24H</> },
            { tab: "1W", title: "1W" },
            { tab: "1M", title: "1M" },
            { tab: "1Y", title: "1Y" },
          ]}
          type="secondary"
        />
      </div>
    </div>
  );
};

export default PerformanceGraph;