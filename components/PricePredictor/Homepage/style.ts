import { css } from "@emotion/react";
import { utils } from "zebpay-ui";

export const main = css({
  display: "flex",
  gap: utils.remConverter(20),
  width: "100%",
  height: "88vh",
});

export const graph = css({
  display: "flex",
  flexDirection: "column",
  width: "75%",
  height: "100%",
  padding: utils.remConverter(16),
  borderRadius: utils.remConverter(8),
  background: "var(--blue-02-dark-blue, #181837)",

  "@media (min-width: 568px)": {
    width: "75%",
    height: "100%",
  },
});

export const innerWrapper = css({});

export const predictionCards = css({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  width: "100%",
  height: "100%",
  gap: utils.remConverter(17.6),
  padding: utils.remConverter(16),
  paddingBottom: utils.remConverter(8),
  borderRadius: utils.remConverter(8),
  background: "var(--Zeb_Solid-BG_Blue, #222245)",
});

export const heading = css({
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(12),
  alignSelf: "stretch",
});

export const fieldRow = css({
  display: "flex",
  width: "100%",
  height: "12vh",
  flexDirection:"row",
  justifyContent: "space-between",

  "@media (min-width: 768px)": {
    justifyContent: "space-between",
  },
});

export const buttonWrapper = css({
  paddingTop: utils.remConverter(16),
});

export const component15 = css({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  gap: utils.remConverter(12),
  alignSelf: "stretch",
  background: "var(--Zeb_Transparent/4)",
  marginTop: utils.remConverter(20),
});

export const rightSideCards = css({
  display: "flex",
  gap: utils.remConverter(96),
  width: "25%",

  "@media (min-width: 768px)": {
    width: "25%",
  },
});

export const breakdown = css({
  display: "flex",
  padding: utils.remConverter(16),
  flexDirection: "column",
  gap: utils.remConverter(16),
  justifyContent: "space-between",
  alignItems: "flex-start",
  flex: "1 0 0",
  alignSelf: "stretch",
  borderRadius: utils.remConverter(8),
  background: "var(--blue-02-dark-blue, #181837)",
});

export const currentValue = css({
  display: "flex",
  padding: utils.remConverter(8),
  height: "15%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(20),
  alignSelf: "stretch",
  borderRadius: utils.remConverter(8),
  background:
    "var(--Zeb_Gradient-Dark_Blue, linear-gradient(254deg, #4a62ca -43.42%, #1b264b 148.58%))",
});

export const roww = css({
  display: "flex",
});

export const coll = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "bottom",
  gap: utils.remConverter(12.8),
});

export const headerContent = css({
  color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee))",
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: "Lato",
  fontSize: utils.remConverter(14),
  fontStyle: "normal",
  marginRight: utils.remConverter(8.8),
  fontWeight: 400,
  lineHeight: utils.remConverter(24),
  letterSpacing: utils.remConverter(0.4),
});

export const headerContent1 = css({
  display: "flex",
  padding: `0 ${utils.remConverter(4)}`,
  justifyContent: "center",
  alignItems: "center",
  gap: utils.remConverter(2),
  borderRadius: utils.remConverter(4),
  border: "1px solid var(--Shimmer-Zeb_Solid-Success, #1ecaa2)",
  background: "var(--Shimmer-Zeb_Transparent-Green, rgba(30, 202, 162, 0.2))",
});

export const up = css({
  display: "flex",
  flexDirection: "row",
  color: "var(--Shimmer-Zeb_Solid-White, #fff)",
  gap: utils.remConverter(6.4),
});

export const down = css({
  color: "var(--Zeb_Solid-White, #fff)",
  display: "flex",
  flexDirection: "row",
  letterSpacing: utils.remConverter(0.96),
});

export const cryptoSelect = css({
  color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee))",
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: "Lato",
  fontSize: utils.remConverter(14),
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: utils.remConverter(24),
  letterSpacing: utils.remConverter(0.4),
});

export const chart = css({
  width: "100%",
  height: "100%",
  borderRadius: utils.remConverter(8),
  border: `${utils.remConverter(2)} solid #338fff0a`,
});
