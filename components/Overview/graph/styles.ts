import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui";

export const performanceGraphContainer = css({
  width: "100%",
  backgroundColor: colors.Zeb_Solid_Dark_Blue,
  borderRadius: utils.remConverter(8),
  padding: utils.remConverter(16),
  marginBottom: utils.remConverter(16),
});

export const innerChartContainer = css({
  border: `${utils.remConverter(2)} solid ${colors.Zeb_Transparent_4}`, 
  borderRadius: utils.remConverter(8),
  padding: utils.remConverter(16), 
  backgroundColor: colors.Zeb_Solid_Dark_Blue, 
});

export const header = css({
  display: "flex",
  alignItems: "center",
  marginBottom: utils.remConverter(16),
});

export const title = css({
  fontSize: utils.remConverter(18),
  fontWeight: 700,
  color: colors.Zeb_Solid_White,
  marginRight: utils.remConverter(16)
});

export const chartContainer = css({
  width: "100%",
  height: utils.remConverter(200),
  overflow: "hidden",
  marginBottom:utils.remConverter(8)
});

export const tooltipLine = (x: number, y: number, height: number) =>
  css({
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    height: `${height}px`,
    width: utils.remConverter(1),
    backgroundColor: "#338fff",
    zIndex: 998,
  });

export const tooltipBox = (x: number, y: number) =>
  css({
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    background: "#181837",
    color: "#ffffff",
    padding: `${utils.remConverter(5)} ${utils.remConverter(10)}`,
    borderRadius: utils.remConverter(4),
    fontSize: utils.remConverter(12),
    border: `${utils.remConverter(1)} solid #338fff`,
    pointerEvents: "none",
    zIndex: 999,
    textAlign: "center",
    minWidth: utils.remConverter(80),
  });

export const historicalTagStyle = (width: number) =>
  css({
    position: "absolute",
    left: `${width * 0.3}px`,
    bottom: utils.remConverter(240),
    zIndex: 1,
  });

export const predictionTagStyle = (width: number) =>
  css({
    position: "absolute",
    left: `${width * 0.7}px`,
    bottom: utils.remConverter(240),
    zIndex: 1,
  });

export const tooltipPriceStyle = css({
  fontWeight: 600,
  fontSize: utils.remConverter(12),
});

export const tooltipDateTimeStyle = css({
  fontSize: utils.remConverter(12),
  marginTop: utils.remConverter(2),
});


export const dynamicStyles = {
  tooltip: {
    position: "absolute",
    background: "#181837",
    color: "white",
    padding: `${utils.remConverter(4)} ${utils.remConverter(8)}`,
    borderRadius: `${utils.remConverter(6)}`,
    border: `1px solid ${colors.Zeb_Solid_Bright_Blue}`,
    pointerEvents: "none",
    zIndex: "1000",
    fontWeight: "400",
    display: "none",
    letterSpacing: "0.4px",
    fontSize: `${utils.remConverter(12)}`,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    lineHeight: `${utils.remConverter(18)}`,
    minWidth: `${utils.remConverter(120)}`,
    fontFamily: "Lato"
  },
  valueBox: {
    position: "absolute",
    background: "rgba(24, 24, 55, 0.9)",
    color: colors.Zeb_Solid_White,
    padding: `${utils.remConverter(6)} ${utils.remConverter(10)}`,
    borderRadius: `${utils.remConverter(6)}`,
    border: `1px solid ${colors.Zeb_Solid_Bright_Blue}`,
    pointerEvents: "none",
    zIndex: "999",
    fontWeight: "400",
    fontSize: `${utils.remConverter(12)}`,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
    display: "none",
    fontFamily: "Lato",
    transform: "translateX(-50%)"
  },
  blueDot: {
    position: "absolute",
    width: `${utils.remConverter(8)}`,
    height: `${utils.remConverter(8)}`,
    background: "#338FFF",
    borderRadius: "50%",
    zIndex: "1000",
    display: "block"
  },
  overlay: {
    position: "absolute",
    top: "0",
    bottom: "0",
    background: "rgba(24, 24, 55, 0.5)",
    pointerEvents: "none",
    zIndex: "500",
    display: "none"
  },
  canvas: {
    position: "absolute",
    top: "0",
    left: "0",
    pointerEvents: "none",
    zIndex: "600"
  },
};


export const container=()=>css({
  position: 'relative',
  background: colors.Zeb_Solid_Dark_Blue,
  borderRadius: '8px',
  overflow: 'hidden'
})


