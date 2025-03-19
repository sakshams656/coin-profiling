/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { AreaSeries, createChart, ColorType } from "lightweight-charts";
import { colors, Tabs } from "zebpay-ui";
import { chartContainer, header, innerChartContainer, performanceGraphContainer, performanceTag, title } from "./styles";
import { dummyData1M, dummyData1W, dummyData1Y, dummyData24h ,fetchData} from "../../../Data/DummyChartData";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { css } from "@emotion/react";
import { info } from "@actions/overviewApi";

const PerformanceGraph: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [timePeriod, setTimePeriod] = useState("24H");
  const [chartInstance, setChartInstance] = useState<any>(null);
  const [seriesInstance, setSeriesInstance] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [percentageChange24h, setPercentChange24h] = useState<string | null>(null);
  const [chartData, setChartData] = useState<Array<{ time: string; value: number }>>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await info();
        const change = response.data["BTC"][0].quote.USD.percent_change_24h;
        const formattedChange = `${change > 0 ? "↑" : "↓"} ${Math.abs(change).toFixed(2)}%`;
        setPercentChange24h(formattedChange);
      } catch (error) {
        console.error("Error fetching percentage change:", error);
      }
    };
    fetchDataAsync();
  }, []);

  useEffect(() => {
    const fetchChartData = async () => {
      setLoading(true);
      try {
        let duration = "1";
        switch (timePeriod) {
          case "3D":
            duration = "3";
            break;
          case "1W":
            duration = "7";
            break;
          case "1M":
            duration = "30";
            break;
        }
        const data = await fetchData(duration);
        const uniqueData = data.reduce((acc: { time: string; value: number }[], current) => {
          if (!acc.find((item) => item.time === current.time)) acc.push(current);
          return acc;
        }, []);
        setChartData(uniqueData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchChartData();
  }, [timePeriod]);

  useEffect(() => {
    if (!chartContainerRef.current || loading) return;

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
        visible: false,
        borderVisible: false, 
      },
    });

    const series = chart.addSeries(AreaSeries,{
      lineColor: colors.Zeb_Solid_Green,
      topColor: "rgba(46, 204, 113, 0.4)",
      bottomColor: "rgba(46, 204, 113, 0.1)",
    });

    setChartInstance(chart);
    setSeriesInstance(series);

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chart) {
        chart.remove();
        setChartInstance(null);
        setSeriesInstance(null);
      }
    };
  }, [loading]);

  useEffect(() => {
    if (!seriesInstance || !chartInstance) return; 
    seriesInstance.setData(chartData);
    chartInstance.timeScale().fitContent();
  }, [chartData, seriesInstance, chartInstance]);

  return (
    <div css={performanceGraphContainer}>
      <ShimmerWrapper height={40} width={200} isLoading={loading} style={css({ marginBottom: "1rem" })}>
        <div css={header}>
          <span css={title}>Performance</span>
          <span css={performanceTag}>{percentageChange24h} | 24H</span>
        </div>
      </ShimmerWrapper>
      <ShimmerWrapper height={263} width={1000} isLoading={loading}>
        <div css={innerChartContainer}>
          <div css={chartContainer} ref={chartContainerRef} />
          <Tabs
            onChange={(tab) => setTimePeriod(tab)}
            selectedTab={timePeriod}
            tabsList={[
              { tab: "24H", title: "24H" },
              { tab: "3D", title: "3D" },
              { tab: "1W", title: "1W" },
              { tab: "1M", title: "1M" },
            ]}
            type="secondary"
          />
        </div>
      </ShimmerWrapper>
    </div>
  );
};

export default PerformanceGraph;
