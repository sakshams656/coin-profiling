
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";

export const header = css({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 1rem",
  alignItems: "center",
  alignSelf: "stretch",
  "@media (max-width: 48rem)": {
    flexDirection: "column",
    gap: "0.5rem",
    padding: "0 0.5rem",
  },
});

export const news = css({
  display: "flex",
  width: "auto",
  alignItems: "center",
  gap: "0.5rem",
  color: colors.Zeb_Solid_White,
  ...typography.h6_16_bold,
  "@media (max-width: 48rem)": {
    flexDirection: "column",
    gap: "0.5rem",
  },
});

export const filterAndUpdownFrame = css({
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
  height: "1.5rem",
  "@media (max-width: 48rem)": {
    gap: "0.5rem",
    height: "auto",
  },
});

export const filter = css({
  color: colors.Zeb_Solid_White,
  display: "flex",
  padding: "0.625rem",
  alignItems: "center",
  borderRadius: "0.5rem",
  background: colors.Zeb_Solid_BG_Blue,
  "@media (max-width: 48rem)": {
    padding: "0.25rem",
  },
});

export const updown = css({
  color: colors.Zeb_Solid_White,
  height: utils.remConverter(36),
  width: utils.remConverter(36),
  display: "flex",
  padding: "0.625rem",
  alignItems: "center",
  borderRadius: "0.5rem",
  background: colors.Zeb_Solid_BG_Blue,
  cursor: "pointer",
  "@media (max-width: 48rem)": {
    height: "1.5rem",
    padding: "0.25rem",
  },
});

export const newsletter = css({
  display: "flex",
  width: "inherit",
  height: "8.5rem",
  padding: "0.75rem",
  paddingBottom: "1rem",
  alignItems: "center",
  gap: "0.25rem",
  flex: "1 0 0",
  borderRadius: "0.5rem",
  overflowY: "auto", // Enables vertical scrolling
  overflowX: "hidden", // Prevents horizontal scrolling
  background: colors.Zeb_Solid_BG_Blue,

  // Hide scrollbar for Webkit (Chrome, Safari)
  "&::-webkit-scrollbar": {
    display: "none",
  },

  scrollbarWidth: "none",

  "@media (max-width: 48rem)": {
    height: "auto",
    padding: "0.5rem",
    paddingBottom: "1rem",
    maxHeight: "8.5rem",
  },
});



export const newsChild = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flex: "1 0 0",
  alignSelf: "stretch",
  "@media (max-width: 48rem)": {
    gap: "0.5rem",
  },
});

export const innerCard = css({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
  flexShrink: "0",
  "@media (max-width: 48rem)": {
    gap: "0.5rem",
  },
});

export const newsHeader = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.5rem",
  alignSelf: "stretch",
  "@media (max-width: 48rem)": {
    gap: "0.25rem",
  },
});

export const heading = css({
  color: colors.Zeb_Solid_White,
  fontFeatureSettings: '"clig" off, "liga" off',
  fontFamily: "Lato",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "1.75rem",
  letterSpacing: "0.05rem",
  "@media (max-width: 48rem)": {
    fontSize: "0.875rem",
    lineHeight: "1.5rem",
  },
});

export const mailIcon = css({
  display: "flex",
  width: "5rem",
  height: "5rem",
  padding: "1.0625rem 0.234rem",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 48rem)": {
    width: "3rem",
    height: "3rem",
  },
});

export const quote = css({
  alignSelf: "stretch",
  color: colors.Zeb_Solid_Light_Blue,
  fontFeatureSettings: '"clig" off, "liga" off',
  fontFamily: "Lato",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.5rem",
  letterSpacing: "0.025rem",
  "@media (max-width: 48rem)": {
    fontSize: "0.75rem",
    lineHeight: "1.25rem",
  },
});

export const email = css({
  flex: "1 0 0",
  fontFeatureSettings: '"clig" off, "liga" off',
  fontFamily: "Lato",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.5rem",
  letterSpacing: "0.025rem",
  "@media (max-width: 48rem)": {
    fontSize: "0.75rem",
    lineHeight: "1.25rem",
  },
});

export const subscribe = css({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  color: "white",
  borderRadius: "0.5rem",
  marginBottom: "0.5rem",
  background: colors.Zeb_Gradient_Blue_01,
  ...typography.C4_12,
  "@media (max-width: 48rem)": {
    gap: "0.4rem",
    borderRadius: "0.375rem",
  },
});

export const bannerImage = css({
  width: "3rem",
  height: "3rem",
  alignSelf: "center",
  flexShrink: "0",
  position: "absolute",
  right: "1rem",
  top: "1rem",
  "@media (max-width: 30rem)": {
    width: "2rem",
    height: "2rem",
  },
});

export const topology = css({
  width: "16.75513rem",
  height: "16.39394rem",
  transform: "rotate(44.59deg)",
  position: "absolute",
  right: "-11.12863rem",
  top: "-11rem",
  "@media (max-width: 48rem)": {
    width: "12rem",
    height: "12rem",
    right: "-8rem",
    top: "-8rem",
  },
});

export const frame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.25rem",
  alignSelf: "stretch",
  "@media (max-width: 48rem)": {
    gap: "0.75rem",
  },
});

export const anotherFrame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  gap: "1.25rem",
  alignSelf: "stretch",
  "@media (max-width: 48rem)": {
    gap: "0.75rem",
  },
});

export const zebpayImageDiv = css({
  display: "flex",
  width: "4rem",
  height: "4rem",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 48rem)": {
    width: "3rem",
    height: "3rem",
  },
});

export const textWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.25rem",
  alignSelf: "stretch",
  "@media (max-width: 48rem)": {
    gap: "0.125rem",
  },
});

export const subtitle = css({
  alignSelf: "stretch",
  color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #C0C0EE))",
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: "Lato",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.5rem",
  letterSpacing: "0.025rem",
  "@media (max-width: 48rem)": {
    fontSize: "0.75rem",
    lineHeight: "1.25rem",
  },
});

export const button = css({
  height: "2rem",
  flex: "1 0 0",
  "@media (max-width: 48rem)": {
    height: "1.75rem",
  },
});

export const KYC = css({
  height: "5rem",
  width: "5rem",
  "@media (max-width: 48rem)": {
    height: "4rem",
    width: "4rem",
  },
});

export const subSucess = css({
  fontSize: "1rem",
  fontWeight: "700",
  marginTop: "1rem",
  "@media (max-width: 48rem)": {
    fontSize: "0.875rem",
  },
});

export const subText = css({
  fontSize: "0.875rem",
  fontWeight: "400",
  color: colors.Zeb_Solid_Light_Blue,
  marginTop: "1rem",
  lineHeight: "1.5rem",
  "@media (max-width: 48rem)": {
    fontSize: "0.75rem",
    lineHeight: "1.25rem",
  },
});

export const zebpayZebra = css({
  float: "right",
  marginTop: "1.75rem",
  marginRight: "-0.75rem",
  color: colors.Zeb_Solid_Dark_Grey,
  opacity: "0.1",
  "@media (max-width: 75rem)": {
    marginTop: "1.25rem",
    marginRight: "-0.5rem",
    height: utils.remConverter(7.5),
    width: utils.remConverter(7.5),
  },
});

export const main = css({
  fontFamily: "Lato",
  display: "inline-flex",
  alignItems: "flex-start",
  gap: "1.25rem",
  width: "100%",
  padding: "1.25rem",
  height: "calc(100vh - 3.75rem)",
  flexShrink: 0,
  alignSelf: "stretch",
  background: colors.Zeb_Solid_BG_Blue,
  boxShadow: "0rem 0.4375rem 0.4375rem -0.125rem rgba(97, 79, 79, 0.14)",
  "@media (max-width: 75rem)": {
    gap: "1rem",
    padding: "1rem",
  },
  "@media (max-width: 48rem)": {
    flexDirection: "column",
    padding: "1rem",
    height: "auto",
  },
});

export const container = css({
  display: "flex",
  width: "75%",
  height: "100%",
  paddingBottom: "1rem",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "0.5rem",
  background: colors.Zeb_Solid_Dark_Blue,
  "@media (max-width: 75rem)": {
    width: "85%",
  },
  "@media (max-width: 48rem)": {
    width: "100%",
    height: "auto",
    paddingBottom: "0.5rem",
  },
});

export const headerFrame = (isScrolled: boolean) =>
  css({
    display: "flex",
    padding: "1rem 0",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.5rem",
    alignSelf: "stretch",
    background: colors.Zeb_Solid_Dark_Blue,
    position: "sticky",
    top: 0,
    borderRadius: "0.5rem",
    zIndex: 10,
    ...(isScrolled && {
      boxShadow: "0rem 0.5rem 0.5rem -0.25rem #0C0C1D",
    }),
    "@media (max-width: 75rem)": {
      gap: "0.375rem",
      padding: "0.75rem 0",
    },
    "@media (max-width: 48rem)": {
      gap: "0.25rem",
      padding: "0.5rem 0",
    },
  });

export const section = css({
  display: "flex",
  flexWrap: "wrap",
  height: "39.75rem",
  width: "100%",
  padding: "1rem",
  paddingBottom: "1rem",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "0.25rem",
  background: colors.Zeb_Solid_Dark_Blue,
  overflowY: "auto",
  overflowX: "hidden",
  position: "relative",
  paddingRight: "0.75rem",
  "&::-webkit-scrollbar": {
    width: "0.25rem",
  },
  "&::-webkit-scrollbar-thumb": {
    background: colors.Zeb_Solid_Dark_Grey,
    borderRadius: "1.125rem",
  },
  "@media (max-width: 75rem)": {
    height: "35rem",
    padding: "0.75rem",
  },
  "@media (max-width: 48rem)": {
    width: "100%",
    height: "auto",
    padding: "0.5rem",
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
  borderRadius: "0.5rem",
  background: colors.Zeb_Solid_Dark_Blue,
  "@media (max-width: 75rem)": {
    width: "30%",
  },
  "@media (max-width: 48rem)": {
    width: "100%",
    height: "auto",
    padding: "0.5rem",
  },
});

export const tradingBanner = css({
  display: "flex",
  width: "100%",
  padding: "0.75rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.25rem",
  flexShrink: "0",
  borderRadius: "0.5rem",
  background: colors.Zeb_Gradient_Dark_Blue,
  position: "relative",
  "@media (max-width: 75rem)": {
    padding: "1rem",
  },
  "@media (max-width: 48rem)": {
    height: "auto",
    padding: "1rem",
  },
});

export const buttonGroup = css({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
  gap: "0.75rem",
  alignSelf: "stretch",
  "@media (max-width: 75rem)": {
    gap: "0.5rem",
  },
  "@media (max-width: 48rem)": {
    gap: "0.5rem",
  },
});

export const appButton = css({
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  borderRadius: "0.25rem",
  padding: "0.4rem 1.75rem",
  width: "100%",
  border: "0.0625rem solid #A6A6A6",
  cursor: "pointer",
  "@media (max-width: 75rem)": {
    padding: "0.3rem 1rem",
  },
  "@media (max-width: 62.5rem)": {
    padding: "0.1rem 0.5rem",
  },
});

export const form = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
  width: "100%",
  "@media (max-width: 48rem)": {
    gap: "0.5rem",
  },
});

export const title = css({
  alignSelf: "stretch",
  color: colors.Zeb_Solid_White,
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: "Lato",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "1.75rem",
  letterSpacing: "0.05rem",
  "@media (max-width: 75rem)": {
    fontSize: "0.9rem",
    lineHeight: "1.5rem",
  },
  "@media (max-width: 48rem)": {
    fontSize: "0.875rem",
    lineHeight: "1.5rem",
  },
});


export const filterTagsContainer = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.625rem",
  padding: "0.625rem",
  background: colors.Zeb_Solid_Dark_Blue,
  borderBottom: `0.0625rem solid ${colors.Zeb_Solid_BG_Blue}`,
  width: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  scrollbarWidth: "thin",
  scrollbarColor: `${colors.Zeb_Solid_Dark_Grey} transparent`,
  "&::-webkit-scrollbar": {
    height: "0.25rem",
  },
  "&::-webkit-scrollbar-thumb": {
    background: colors.Zeb_Solid_Dark_Grey,
    borderRadius: "0.25rem",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
});

export const filterTag = css({
  display: "flex",
  alignItems: "center",
  padding: "0.375rem 0.625rem",
  background: colors.Zeb_Solid_Dark_Grey,
  borderRadius: "0.25rem",
  color: colors.Zeb_Solid_White,
  fontSize: "0.875rem",
  fontWeight: 400,

  img: {
    width: "1rem",
    height: "1rem",
    marginRight: "0.375rem",
  },

  button: {
    marginLeft: "0.375rem",
    background: "none",
    border: "none",
    color: colors.Zeb_Solid_Light_Blue,
    fontSize: "0.875rem",
    cursor: "pointer",
    padding: 0,
    lineHeight: 1,

    "&:hover": {
      color: colors.Zeb_Solid_White,
    },
  },
});

export const resetTagButton = css({
  marginLeft: "auto",

  "@media (max-width: 48rem)": {
    padding: "0.25rem 0.625rem",
    fontSize: "0.75rem",
  },
});