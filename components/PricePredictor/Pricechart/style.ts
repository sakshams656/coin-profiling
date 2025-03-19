import { css } from "@emotion/react";
import { utils } from "zebpay-ui";

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

export const chartContainer = css({
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "visible",
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
