import React, { useEffect, useRef, useState } from "react";
import {
  AreaSeries,
  createChart,
  ColorType,
  PriceScaleMode,
  IChartApi,
  ISeriesApi,
} from "lightweight-charts";

import { colors, Tabs, Tags, utils } from "zebpay-ui";
import { css } from "@emotion/react";

import { fetchData } from "../../../Data/DummyChartData";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import {
  chartContainer,
  dynamicStyles,
  header,
  innerChartContainer,
  performanceGraphContainer,
  title,
  container,
} from "./styles";

interface PerformanceGraphProps {
  percentageChange24h: string;
  percentageChange3d: string;
  percentageChange7d: string;
  percentageChange30d: string;
  coinSymbol: string;
}

interface PricePoint {
  time: string;
  value: number;
}

const PerformanceGraph: React.FC<PerformanceGraphProps> = ({
  percentageChange24h,
  percentageChange3d,
  percentageChange7d,
  percentageChange30d,
  coinSymbol,
}) => {
  const [isCrosshairActive, setIsCrosshairActive] = useState(false);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const minValueBoxRef = useRef<HTMLDivElement | null>(null);
  const maxValueBoxRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Area"> | null>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const redOverlayRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const originalOptionsRef = useRef({
    lineColor: colors.Zeb_Solid_Green,
    topColor: "rgba(46, 204, 113, 0.4)",
    bottomColor: "rgba(46, 204, 113, 0.1)",
  });

  const [timePeriod, setTimePeriod] = useState("24H");
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<PricePoint[]>([]);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [minPrice, setMinPrice] = useState<PricePoint | null>(null);
  const [maxPrice, setMaxPrice] = useState<PricePoint | null>(null);
  const [currentPercentageChange, setCurrentPercentageChange] =
    useState(percentageChange24h);

  const toCurrency = "inr";

  useEffect(() => {
    switch (timePeriod) {
      case "24H":
        setCurrentPercentageChange(percentageChange24h);
        break;
      case "3D":
        setCurrentPercentageChange(percentageChange3d);
        break;
      case "1W":
        setCurrentPercentageChange(percentageChange7d);
        break;
      case "1M":
        setCurrentPercentageChange(percentageChange30d);
        break;
      default:
        setCurrentPercentageChange(percentageChange24h);
    }
  }, [
    timePeriod,
    percentageChange24h,
    percentageChange3d,
    percentageChange7d,
    percentageChange30d,
  ]);

  const cleanupElements = () => {
    dotsRef.current.forEach((dot) => {
      if (dot.parentNode) {
        dot.parentNode.removeChild(dot);
      }
    });
    dotsRef.current = [];

    if (tooltipRef.current && tooltipRef.current.parentNode) {
      tooltipRef.current.parentNode.removeChild(tooltipRef.current);
      tooltipRef.current = null;
    }

    if (minValueBoxRef.current && minValueBoxRef.current.parentNode) {
      minValueBoxRef.current.parentNode.removeChild(minValueBoxRef.current);
      minValueBoxRef.current = null;
    }

    if (maxValueBoxRef.current && maxValueBoxRef.current.parentNode) {
      maxValueBoxRef.current.parentNode.removeChild(maxValueBoxRef.current);
      maxValueBoxRef.current = null;
    }

    if (redOverlayRef.current && redOverlayRef.current.parentNode) {
      redOverlayRef.current.parentNode.removeChild(redOverlayRef.current);
      redOverlayRef.current = null;
    }

    if (canvasRef.current && canvasRef.current.parentNode) {
      canvasRef.current.parentNode.removeChild(canvasRef.current);
      canvasRef.current = null;
    }

    if (chartRef.current) {
      chartRef.current.remove();
      chartRef.current = null;
      seriesRef.current = null;
    }
  };

  useEffect(() => {
    return cleanupElements;
  }, []);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setLoading(true);

        if (minValueBoxRef.current)
          minValueBoxRef.current.style.display = "none";
        if (maxValueBoxRef.current)
          maxValueBoxRef.current.style.display = "none";
        dotsRef.current.forEach((dot) => {
          dot.style.display = "none";
        });

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
        const uniqueData = data.reduce((acc: PricePoint[], current) => {
          if (!acc.find((item) => item.time === current.time))
            acc.push(current);
          return acc;
        }, []);

        if (uniqueData.length > 0) {
          setCurrentPrice(uniqueData[uniqueData.length - 1].value);

          let min = { value: Number.MAX_VALUE, time: "" };
          let max = { value: Number.MIN_VALUE, time: "" };

          uniqueData.forEach((item) => {
            if (item.value < min.value) {
              min = { value: item.value, time: item.time };
            }
            if (item.value > max.value) {
              max = { value: item.value, time: item.time };
            }
          });

          setMinPrice(min);
          setMaxPrice(max);
        }

        setChartData(uniqueData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [timePeriod, coinSymbol, toCurrency]);

  useEffect(() => {
    if (!chartContainerRef.current || loading) return;

    cleanupElements();

    const tooltip = document.createElement("div");

    Object.assign(tooltip.style, dynamicStyles.tooltip);
    chartContainerRef.current.appendChild(tooltip);
    tooltipRef.current = tooltip;

    const minValueBox = document.createElement("div");
    minValueBox.setAttribute("data-min-value-box", "true");

    chartContainerRef.current.appendChild(minValueBox);
    Object.assign(minValueBox.style, dynamicStyles.valueBox);
    minValueBoxRef.current = minValueBox;

    const maxValueBox = document.createElement("div");
    maxValueBox.setAttribute("data-max-value-box", "true");

    chartContainerRef.current.appendChild(maxValueBox);
    Object.assign(maxValueBox.style, dynamicStyles.valueBox);
    maxValueBoxRef.current = maxValueBox;

    const overlay = document.createElement("div");

    chartContainerRef.current.appendChild(overlay);
    Object.assign(overlay.style, dynamicStyles.overlay);
    redOverlayRef.current = overlay;

    const canvas = document.createElement("canvas");

    Object.assign(canvas.style, dynamicStyles.canvas);
    canvas.width = chartContainerRef.current.clientWidth;
    canvas.height = chartContainerRef.current.clientHeight;
    chartContainerRef.current.appendChild(canvas);
    canvasRef.current = canvas;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: {
          type: ColorType.Solid,
          color: colors.Zeb_Solid_Dark_Blue,
        },
        textColor: "#C0C0EE",
      },

      width: chartContainerRef.current.clientWidth,
      height: 230,
      grid: {
        vertLines: { color: colors.Zeb_Solid_Dark_Blue },
        horzLines: { color: colors.Zeb_Transparent_4 },
      },
      crosshair: {
        mode: 0,
        vertLine: {
          labelVisible: false,
        },
        horzLine: {
          labelVisible: false,
        },
      },
      timeScale: {
        borderColor: colors.Zeb_Transparent_4,
        timeVisible: true,
        lockVisibleTimeRangeOnResize: true,
      },
      rightPriceScale: {
        borderColor: colors.Zeb_Transparent_4,
        mode: PriceScaleMode.Normal,
        scaleMargins: {
          top: 0.3,
          bottom: 0.25,
        },
        autoScale: false,
      },
    });

    const series = chart.addSeries(AreaSeries, {
      lineColor: colors.Zeb_Solid_Green,
      topColor: "rgba(46, 204, 113, 0.4)",
      bottomColor: "rgba(46, 204, 113, 0.1)",
      lastValueVisible: false,
      priceLineVisible: false,
    });

    chartRef.current = chart;
    seriesRef.current = series;

    chart.subscribeCrosshairMove((param) => {
      if (
        tooltipRef.current &&
        redOverlayRef.current &&
        canvasRef.current &&
        chartContainerRef.current
      ) {
        if (!param || !param.seriesData || !param.point) {
          tooltipRef.current.style.display = "none";
          redOverlayRef.current.style.display = "none";
          setIsCrosshairActive(false);

          const ctx = canvasRef.current.getContext("2d");
          if (ctx) {
            ctx.clearRect(
              0,
              0,
              canvasRef.current.width,
              canvasRef.current.height
            );
          }

          if (!loading) {
            if (minValueBoxRef.current)
              minValueBoxRef.current.style.display = "block";
            if (maxValueBoxRef.current)
              maxValueBoxRef.current.style.display = "block";
            dotsRef.current.forEach((dot) => {
              dot.style.display = "block";
            });
          }

          if (seriesRef.current) {
            seriesRef.current.applyOptions({
              lineColor: originalOptionsRef.current.lineColor,
              topColor: originalOptionsRef.current.topColor,
              bottomColor: originalOptionsRef.current.bottomColor,
            });
          }
          return;
        }

        const pointData = param.seriesData.get(series);
        if (!pointData) {
          tooltipRef.current.style.display = "none";
          redOverlayRef.current.style.display = "none";
          setIsCrosshairActive(false);
          return;
        }

        setIsCrosshairActive(true);

        if (minValueBoxRef.current)
          minValueBoxRef.current.style.display = "none";
        if (maxValueBoxRef.current)
          maxValueBoxRef.current.style.display = "none";

        dotsRef.current.forEach((dot) => {
          dot.style.display = "block";
        });

        const price = pointData.value.toFixed(2);
        const date = new Date(param.time * 1000);

        const day = date.toLocaleString("en-IN", { day: "2-digit" });
        const month = date
          .toLocaleString("en-IN", { month: "short" })
          .toUpperCase();

        const time = date
          .toLocaleString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
          .toUpperCase();

        const formattedDate = `${day} ${month} | ${time}`;

        tooltipRef.current.innerHTML = `
          <div>
            <div>${price} INR</div>
            <div style="margin-top: 0px; font-size: 12px;font-weight:400">${formattedDate}</div>
          </div>
        `;

        const chartWidth = chartContainerRef.current.clientWidth;
        const tooltipWidth = 120;

        let tooltipX = param.point.x - tooltipWidth / 2;

        if (tooltipX < 10) tooltipX = 10;
        if (tooltipX + tooltipWidth > chartWidth - 10)
          tooltipX = chartWidth - tooltipWidth - 10;

        tooltipRef.current.style.left = `${tooltipX}px`;
        tooltipRef.current.style.top = `${0}px`;
        tooltipRef.current.style.display = "block";

        redOverlayRef.current.style.left = `${param.point.x}px`;
        redOverlayRef.current.style.width = `${chartContainerRef.current.clientWidth - param.point.x}px`;
        redOverlayRef.current.style.top = "30px";
        redOverlayRef.current.style.height = "calc(100% - 50px)";
        redOverlayRef.current.style.display = "block";

        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          ctx.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );

          if (chartContainerRef.current.clientWidth - param.point.x > 10) {
            const gradientTop = 30;
            const gradientBottom = canvasRef.current.height - 20;

            const gradient = ctx.createLinearGradient(
              param.point.x,
              0,
              canvasRef.current.width,
              0
            );
            gradient.addColorStop(0, "rgba(24, 24, 55, 0.5)");
            gradient.addColorStop(0, "rgba(24, 24, 55, 0.5)");

            ctx.fillStyle = gradient;
            ctx.fillRect(
              param.point.x,
              gradientTop,
              canvasRef.current.width - param.point.x,
              gradientBottom - gradientTop
            );
          }
        }
      }
    });

    chartContainerRef.current.addEventListener("mouseleave", () => {
      if (redOverlayRef.current) {
        redOverlayRef.current.style.display = "none";
      }

      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          ctx.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
        }
      }

      setIsCrosshairActive(false);

      if (!loading) {
        if (minValueBoxRef.current)
          minValueBoxRef.current.style.display = "block";
        if (maxValueBoxRef.current)
          maxValueBoxRef.current.style.display = "block";
      }

      if (seriesRef.current) {
        seriesRef.current.applyOptions({
          lineColor: originalOptionsRef.current.lineColor,
          topColor: originalOptionsRef.current.topColor,
          bottomColor: originalOptionsRef.current.bottomColor,
        });
      }
    });

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });

        if (canvasRef.current) {
          canvasRef.current.width = chartContainerRef.current.clientWidth;
          canvasRef.current.height = chartContainerRef.current.clientHeight;
        }

        setTimeout(() => {
          updateMinMaxPositions();
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      updateMinMaxPositions();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (chartContainerRef.current) {
        chartContainerRef.current.removeEventListener("mouseleave", () => {});
      }
    };
  }, [loading]);

  const updateMinMaxPositions = () => {
    if (
      !chartContainerRef.current ||
      !chartRef.current ||
      !seriesRef.current ||
      !minPrice ||
      !maxPrice ||
      loading
    )
      return;

    dotsRef.current.forEach((dot) => {
      if (dot.parentNode) {
        dot.parentNode.removeChild(dot);
      }
    });
    dotsRef.current = [];

    if (minValueBoxRef.current && maxValueBoxRef.current) {
      const minTime = new Date(minPrice.time).getTime() / 1000;
      const maxTime = new Date(maxPrice.time).getTime() / 1000;
      const chartWidth = chartContainerRef.current.clientWidth;
      const boxWidth = 80;

      chartRef.current.timeScale().scrollToPosition(0, false);

      const minCoordinates = seriesRef.current.priceToCoordinate(
        minPrice.value
      );
      const minTimeCoordinate = chartRef.current
        .timeScale()
        .timeToCoordinate(minTime);

      if (minCoordinates !== null && minTimeCoordinate !== null) {
        const minDot = document.createElement("div");
        minDot.classList.add("blue-dot");

        Object.assign(minDot.style, dynamicStyles.blueDot);
        minDot.style.left = `${minTimeCoordinate - 4}px`;
        minDot.style.top = `${minCoordinates + 4}px`;
        minDot.style.display = loading ? "none" : "block";
        chartContainerRef.current.appendChild(minDot);
        dotsRef.current.push(minDot);

        let boxX = minTimeCoordinate;

        if (boxX < boxWidth / 2) boxX = boxWidth / 2;
        if (boxX > chartWidth - boxWidth / 2) boxX = chartWidth - boxWidth / 2;

        minValueBoxRef.current.style.left = `${boxX}px`;
        minValueBoxRef.current.style.top = `${minCoordinates + 15}px`;
        minValueBoxRef.current.style.display =
          !isCrosshairActive && !loading ? "block" : "none";
        minValueBoxRef.current.textContent = minPrice.value.toFixed(2);
      }

      const maxCoordinates = seriesRef.current.priceToCoordinate(
        maxPrice.value
      );
      const maxTimeCoordinate = chartRef.current
        .timeScale()
        .timeToCoordinate(maxTime);

      if (maxCoordinates !== null && maxTimeCoordinate !== null) {
        const maxDot = document.createElement("div");
        maxDot.classList.add("blue-dot");

        Object.assign(maxDot.style, dynamicStyles.blueDot);
        maxDot.style.left = `${maxTimeCoordinate - 4}px`;
        maxDot.style.top = `${maxCoordinates - 12}px`;
        maxDot.style.display = loading ? "none" : "block";
        chartContainerRef.current.appendChild(maxDot);
        dotsRef.current.push(maxDot);

        let boxX = maxTimeCoordinate;

        if (boxX < boxWidth / 2) boxX = boxWidth / 2;
        if (boxX > chartWidth - boxWidth / 2) boxX = chartWidth - boxWidth / 2;

        maxValueBoxRef.current.style.left = `${boxX}px`;
        maxValueBoxRef.current.style.top = `${maxCoordinates - 45}px`;
        maxValueBoxRef.current.style.display =
          !isCrosshairActive && !loading ? "block" : "none";
        maxValueBoxRef.current.textContent = maxPrice.value.toFixed(2);
      }
    }
  };

  useEffect(() => {
    if (
      !seriesRef.current ||
      !chartRef.current ||
      currentPrice === null ||
      !minPrice ||
      !maxPrice ||
      loading
    )
      return;

    const formattedData = chartData.map((item) => ({
      time: new Date(item.time).getTime() / 1000,
      value: item.value,
    }));

    seriesRef.current.setData(formattedData);

    chartRef.current.timeScale().fitContent();

    const priceLine = seriesRef.current.createPriceLine({
      price: currentPrice,
      color: colors.Zeb_Solid_Green,
      lineWidth: 2,
      lineStyle: 2,
      axisLabelVisible: true,
    });

    setTimeout(() => {
      updateMinMaxPositions();
    }, 100);

    return () => {
      if (seriesRef.current) {
        seriesRef.current.removePriceLine(priceLine);
      }
    };
  }, [chartData, currentPrice, minPrice, maxPrice, loading]);

  useEffect(() => {
    updateMinMaxPositions();
  }, [isCrosshairActive]);

  const getTagsLabel = () => {
    switch (timePeriod) {
      case "24H":
        return "24H";
      case "3D":
        return "3D";
      case "1W":
        return "1W";
      case "1M":
        return "1M";
      default:
        return "24H";
    }
  };

  const isPercentagePositive = (percentageStr: string) => {
    if (!percentageStr) return true;
    return percentageStr.startsWith("↑");
  };

  return (
    <div css={performanceGraphContainer}>
      <div css={header}>
        <ShimmerWrapper
          height={24}
          width={102}
          isLoading={loading}
          style={css({ marginRight: utils.remConverter(4) })}
        >
          <span css={title}>Performance</span>
        </ShimmerWrapper>
        <ShimmerWrapper height={24} width={102} isLoading={loading}>
          <Tags
            type={
              isPercentagePositive(currentPercentageChange)
                ? "success"
                : "error"
            }
          >
            {currentPercentageChange} | {getTagsLabel()}
          </Tags>
        </ShimmerWrapper>
      </div>

      <div css={innerChartContainer}>
        <ShimmerWrapper
          height={200}
          width={1000}
          isLoading={loading}
          style={css({ marginBottom: utils.remConverter(16) })}
        >
          <div ref={chartContainerRef} css={container} />
        </ShimmerWrapper>

        <div css={css({ display: "flex", gap: utils.remConverter(12) })}>
          {["24H", "3D", "1W", "1M"].map((tab, index) => (
            <ShimmerWrapper
              key={index}
              height={26}
              width={241}
              isLoading={loading}
              children={undefined}
            />
          ))}
        </div>

        {!loading && (
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
        )}
      </div>
      {/* </ShimmerWrapper> */}
    </div>
  );
};

export default PerformanceGraph;
