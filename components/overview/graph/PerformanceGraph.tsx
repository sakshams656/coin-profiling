import React, { useEffect, useRef, useState } from "react";
import { AreaSeries, createChart, ColorType } from "lightweight-charts";
import { colors, Tabs, Tags } from "zebpay-ui";
import { css } from "@emotion/react";

import { fetchData } from "../../../Data/DummyChartData";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { chartContainer, header, innerChartContainer, performanceGraphContainer, title } from "./styles";

interface PerformanceGraphProps {
  percentageChange24h: string;
  coinSymbol:string
}


const PerformanceGraph: React.FC<PerformanceGraphProps> = ({ percentageChange24h ,coinSymbol}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [timePeriod, setTimePeriod] = useState("24H");
  const [chartInstance, setChartInstance] = useState<any>(null);
  const [seriesInstance, setSeriesInstance] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<Array<{ time: string; value: number }>>([]);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  
  const toCurrency = "inr";

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setLoading(true);

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

        const data = await fetchData(duration, coinSymbol, toCurrency);
        const uniqueData = data.reduce((acc: { time: string; value: number }[], current) => {
          if (!acc.find((item) => item.time === current.time)) acc.push(current);
          return acc;
        }, []);
        
        if (uniqueData.length > 0) {
          setCurrentPrice(uniqueData[uniqueData.length - 1].value);
        }
        
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
        textColor: "#C0C0EE",
      },
      width: chartContainerRef.current.clientWidth,
      height: 200,
      grid: {
        vertLines: { color: colors.Zeb_Solid_Dark_Blue },
        horzLines: { color: colors.Zeb_Transparent_4 },
      },
      crosshair: {
        vertLine: {
          visible: true,
          labelVisible: true,
          color: colors.Zeb_Solid_Green,
        },
        horzLine: {
          visible: true,
          labelVisible: true,
          color: colors.Zeb_Solid_Green,
        },
      },
      timeScale: {
        borderColor: colors.Zeb_Transparent_4,
        timeVisible: true,  
        secondsVisible: false,
      },
      rightPriceScale: {
        visible: false,
        borderVisible: false, 
      },
    });

    const series = chart.addSeries(AreaSeries, {
      lineColor: colors.Zeb_Solid_Green,
      topColor: "rgba(46, 204, 113, 0.4)",
      bottomColor: "rgba(46, 204, 113, 0.1)",
      lastValueVisible: false,
      priceLineVisible: false,
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
    

    const formattedData = chartData.map(item => ({
      time: new Date(item.time).getTime() / 1000, 
      value: item.value
    }));

    seriesInstance.setData(formattedData);
    chartInstance.timeScale().fitContent();
  }, [chartData, seriesInstance, chartInstance]);

  return (
    <div css={performanceGraphContainer}>
      <ShimmerWrapper height={40} width={200} isLoading={loading} style={css({ marginBottom: "1rem" })}>
        <div css={header}>
          <span css={title}>Performance</span>
          <Tags type="success">{percentageChange24h} | 24H</Tags>
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