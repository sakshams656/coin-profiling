import { css } from "@emotion/react";

export const main = css({
  display: "flex",
  gap: "1.25rem",
  width: "100%",
  height: "100%",
});

export const graph = css({
  display: "flex",
  flexDirection: "column",
  width: "75%",
  height: "100%",
  padding: "1rem",
  borderRadius: "0.5rem",
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
  gap: "1.1rem",
  padding: "1rem",
  paddingBottom: "0.5rem",
  borderRadius: "0.5rem",
  background: "var(--Zeb_Solid-BG_Blue, #222245)",
});

export const heading = css({
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  alignSelf: "stretch",
});

export const fieldRow = css({
  display: "flex",
  width: "100%",
  height: "12vh",
  justifyContent: "space-between",

  "@media (min-width: 768px)": {
    justifyContent: "space-between",
  },
});

export const buttonWrapper = css({
  paddingTop: "1rem",
});

export const component15 = css({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.75rem",
  alignSelf: "stretch",
  background: "var(--Zeb_Transparent/4)",
  marginTop: "1.25rem",
});

export const rightSideCards = css({
  display: "flex",
  gap: "6rem",
  width: "25%",

  "@media (min-width: 768px)": {
    width: "25%",
  },
});

export const breakdown = css({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flex: "1 0 0",
  alignSelf: "stretch",
  borderRadius: "0.5rem",
  background: "var(--blue-02-dark-blue, #181837)",
});

export const currentValue = css({
  display: "flex",
  padding: "0.5rem",
  height: "15%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.25rem",
  alignSelf: "stretch",
  borderRadius: "0.5rem",
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
  gap: "0.8rem",
});

export const headerContent = css({
  color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee))",
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: "Lato",
  fontSize: "0.875rem",
  fontStyle: "normal",
  marginRight: "0.55rem",
  fontWeight: 400,
  lineHeight: "1.5rem",
  letterSpacing: "0.025rem",
});

export const headerContent1 = css({
  display: "flex",
  padding: "0rem 0.25rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.125rem",
  borderRadius: "0.25rem",
  border: "1px solid var(--Shimmer-Zeb_Solid-Success, #1ecaa2)",
  background: "var(--Shimmer-Zeb_Transparent-Green, rgba(30, 202, 162, 0.2))",
});

export const up = css({
  display: "flex",
  flexDirection: "row",
  color: "var(--Shimmer-Zeb_Solid-White, #fff)",
  gap: "0.4rem",
});

export const down = css({
  color: "var(--Zeb_Solid-White, #fff)",
  display: "flex",
  flexDirection: "row",
  letterSpacing: "0.06rem",
});

export const cryptoSelect = css({
  color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee))",
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: "Lato",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.5rem",
  letterSpacing: "0.025rem",
});

export const chart = css({
  width: "100%",
  height: "100%",
  borderRadius: "0.5rem",
  border: "2px solid #338fff0a",
});
