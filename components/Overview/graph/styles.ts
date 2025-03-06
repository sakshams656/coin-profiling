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

export const performanceTag = css({
  backgroundColor: "rgba(46, 204, 113, 0.2)", 
  color: colors.Zeb_Solid_Green, 
  padding: utils.remConverter(4) + " " + utils.remConverter(8),
  borderRadius: utils.remConverter(8),
  border: `${utils.remConverter(1)} solid ${colors.Zeb_Solid_Green}`,
  fontSize: utils.remConverter(14),
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(4),
});

export const chartContainer = css({
  width: "100%",
  height: utils.remConverter(200),
});