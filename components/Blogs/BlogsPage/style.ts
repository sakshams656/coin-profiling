import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";

export const main = css({
  fontFamily: "Lato",
  display: "inline-flex",
  alignItems: "flex-start",
  gap: utils.remConverter(20),
  width: "100%",
  padding: utils.remConverter(40),
  paddingTop: utils.remConverter(20),
  paddingBottom: utils.remConverter(20),
  height: "calc(100vh - 3.75rem)",
  overflowY: "hidden",
  flexShrink: 0,
  alignSelf: "stretch",
  background: colors.Zeb_Solid_BG_Blue,
  boxShadow: `0px ${utils.remConverter(7)} ${utils.remConverter(7)} -${utils.remConverter(2)} rgba(97, 79, 79, 0.14)`,
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
});

export const container = css({
  display: "flex",
  width: "75%",
  height: "100%",
  paddingBottom: utils.remConverter(16),
  flexDirection: "column",
  alignItems: "center",
  borderRadius: utils.remConverter(8),
  background: colors.Zeb_Solid_Dark_Blue,
  "@media (max-width: 768px)": {
    width: "100%",
    height: "100%",
  },
});

export const headerFrame = (isScrolled, hasFilters) =>
  css({
    display: "flex",
    paddingTop: utils.remConverter(16),
    flexDirection: "column",
    alignItems: "flex-start",
    gap: utils.remConverter(16),
    // width: "100%",
    alignSelf: "stretch",
    background: colors.Zeb_Solid_Dark_Blue,
    position: "sticky",
    top: 0,
    borderRadius: utils.remConverter(8),
    ...(isScrolled
      ? {
          paddingBottom: utils.remConverter(9.6),
          boxShadow: `0px ${utils.remConverter(8)} ${utils.remConverter(8)} -${utils.remConverter(4)} #0C0C1D`,
        }
      : hasFilters
      ? {
          paddingBottom: utils.remConverter(9.6),
          borderBottom: `${utils.remConverter(1)} solid #222245`,
        }
      : {}),
    "@media (max-width: 768px)": {
      gap: utils.remConverter(8),
    },
  });

export const header = css({
  display: "flex",
  width:"100%",
  justifyContent: "space-between",
  paddingLeft: utils.remConverter(16),
  alignItems: "center",
  alignSelf: "stretch",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: utils.remConverter(8),
    padding: `0 ${utils.remConverter(8)}`,
  },
});

export const section = css({
  display: "flex",
  flexWrap: "wrap",
  height: "100%",
  width: "100%",
  padding: utils.remConverter(16),
  paddingBottom: utils.remConverter(16),
  flexDirection: "column",
  alignItems: "center",
  borderRadius: utils.remConverter(4),
  background: colors.Zeb_Solid_Dark_Blue,
  overflowY: "auto",
  overflowX: "hidden",
  paddingRight: utils.remConverter(12),
  "&::-webkit-scrollbar": {
    width: utils.remConverter(4),
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: colors.Zeb_Solid_Dark_Grey,
    borderRadius: utils.remConverter(18),
  },
  "@media (max-width: 768px)": {
    width: "100%",
    height: "inherit",
  },
});

export const news = css({
  display: "flex",
  width: "auto",
  alignItems: "center",
  gap: utils.remConverter(8),
  color: colors.Zeb_Solid_White,
  ...typography.h6_16_bold,
});

export const innerCard = css({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(16),
  flexShrink: 0,
  "@media (max-width: 768px)": {
    width: "25%",
    height: "100%",
  },
});

export const innerDiv = css({
  display: "flex",
  width: "25%",
  height: "100%",
  padding: "1rem",
  fontFamily: "Lato",
  color: colors.Zeb_Solid_White,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  borderRadius: "8px",
  background: colors.Zeb_Solid_Dark_Blue,
  "@media (max-width: 768px)": {
    width: "25%",
    height: "100%",
  },
});

export const NoBlogFound = css({
  width: "100%",
  minHeight: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const InsideSection = css({
  display: "flex",
  flexWrap: "wrap",
  gap: utils.remConverter(16),
  width: "100%",
});

export const appButton = css({
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  borderRadius: utils.remConverter(4),
  width: "100%",
  border: `${utils.remConverter(1)} solid #A6A6A6`,
});

export const button = css({
  height: utils.remConverter(32),
  flex: "1 0 0",
  "@media (max-width: 768px)": {
    height: utils.remConverter(28),
  },
});

export const headerBelow = css({
  display: "flex",
  paddingLeft: utils.remConverter(16),
  overflowX: "hidden",
  whiteSpace: "nowrap",
  overflowY: "hidden",
  width: "100%",
  scrollbarWidth: "none",
  alignItems: "stretch",
  justifyContent: "space-between",
  paddingRight: utils.remConverter(17.6),
});

export const categoryWrapper = css({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  marginTop: utils.remConverter(10),
});

export const selectedCategoriesContainer = css({
  display: "flex",
  gap: utils.remConverter(12),
  width:"100%",
  // paddingBottom: utils.remConverter(5),
  overflow: "hidden",
  // justifyContent:"space-between"
});

export const categoryButton = css({
  display: "flex",
  alignItems: "center",
  background: colors.Zeb_Solid_Dark_Grey,
  color: "white",
  padding: `${utils.remConverter(5)} ${utils.remConverter(12)}`,
  borderRadius: utils.remConverter(6),
  fontSize: utils.remConverter(14),
  fontWeight: 500,
  border: "none",
  cursor: "pointer",
  scrollbarWidth: "none",
});

export const clockIcon = css({
  marginRight: utils.remConverter(5),
});

export const categoryText = css({
  flexGrow: 1,
  textAlign: "center",
});

export const closeIcon = css({
  marginLeft: utils.remConverter(5),
  cursor: "pointer",
  flexGrow: 1,
});
