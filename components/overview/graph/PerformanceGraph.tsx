/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { AreaSeries, createChart, ColorType } from "lightweight-charts";
import { colors, Tabs, Tags, utils } from "zebpay-ui";
import * as styles from "./styles";
import { dummyData1M, dummyData1W, dummyData1Y, dummyData24h } from "../../../Data/DummyChartData";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { css } from "@emotion/react";

const PerformanceGraph: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [timePeriod, setTimePeriod] = useState("24H");
  const [chartInstance, setChartInstance] = useState<any>(null);
  const [seriesInstance, setSeriesInstance] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const dataByPeriod = {
    "24H": dummyData24h,
    "1W": dummyData1W,
    "1M": dummyData1M,
    "1Y": dummyData1Y,
  };

  // Initialize chart only when loading is false
  useEffect(() => {
    if (!chartContainerRef.current || loading) return;

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
    });
    chart.timeScale().fitContent();

    const series = chart.addSeries(AreaSeries, {
      lineColor: colors.Zeb_Solid_Green,
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
  }, [loading]); 

  useEffect(() => {
    if (seriesInstance) {
      seriesInstance.setData(dataByPeriod[timePeriod]);
      if (chartInstance) {
        chartInstance.timeScale().fitContent();
      }
    }
  }, [timePeriod, seriesInstance, chartInstance]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div css={styles.performanceGraphContainer}>
      <ShimmerWrapper height={40} width={200} isLoading={loading} style={css({marginBottom: "1rem"})}>
        <div css={styles.header}>
          <span css={styles.title}>Performance</span>
          <Tags
            size="medium"
            style={{
              name: '1pzk433',
              styles: 'width:100px'
            }}
            type="success"
            css={{borderRadius: utils.remConverter(4)}}
          >
            ↑ 0.31% | 24H
          </Tags>
        </div>
      </ShimmerWrapper>

      <ShimmerWrapper height={263} width={1000} isLoading={loading}>
        <div css={styles.innerChartContainer}>
          <div css={styles.chartContainer} ref={chartContainerRef} />
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
      </ShimmerWrapper>
    </div>
  );
};

export default PerformanceGraph;