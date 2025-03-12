import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";

export const header = css({
  display: "flex",
  justifyContent: "space-between",
  padding: `0 ${utils.remConverter(16)}`,
  alignItems: "center",
  alignSelf: "stretch",
  "@media (max-width: 48rem)": {
    flexDirection: "column",
    gap: utils.remConverter(8),
    padding: `0 ${utils.remConverter(8)}`,
  },
});

export const news = css({
  display: "flex",
  width: "auto",
  alignItems: "center",
  gap: utils.remConverter(8),
  color: colors.Zeb_Solid_White,
  ...typography.h6_16_bold,
  "@media (max-width: 48rem)": {
    flexDirection: "column",
    gap: utils.remConverter(8),
  },
});

export const filterAndUpdownFrame = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(20),
  height: utils.remConverter(24),
  "@media (max-width: 48rem)": {
    gap: utils.remConverter(8),
    height: "auto",
  },
});

export const filter = css({
  color: colors.Zeb_Solid_White,
  display: "flex",
  padding: utils.remConverter(10),
  alignItems: "center",
  borderRadius: utils.remConverter(8),
  background: colors.Zeb_Solid_BG_Blue,
  "@media (max-width: 48rem)": {
    padding: utils.remConverter(4),
  },
});

export const updown = css({
  color: colors.Zeb_Solid_White,
  height: utils.remConverter(36),
  width: utils.remConverter(36),
  display: "flex",
  padding: utils.remConverter(10),
  alignItems: "center",
  borderRadius: utils.remConverter(8),
  background: colors.Zeb_Solid_BG_Blue,
  cursor: "pointer",
  "@media (max-width: 48rem)": {
    height: utils.remConverter(24),
    padding: utils.remConverter(4),
  },
});

export const newsletter = css({
  display: "flex",
  width: "inherit",
  height: utils.remConverter(136),
  padding: utils.remConverter(12),
  paddingBottom: utils.remConverter(16),
  alignItems: "center",
  gap: utils.remConverter(4),
  flex: "1 0 0",
  minHeight: utils.remConverter(356),
  borderRadius: utils.remConverter(8),
  background: colors.Zeb_Solid_BG_Blue,

  "&::-webkit-scrollbar": {
    display: "none",
  },

  scrollbarWidth: "none",

  "@media (max-width: 48rem)": {
    height: "auto",
    padding: utils.remConverter(8),
    paddingBottom: utils.remConverter(16),
    maxHeight: utils.remConverter(136),
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
    gap: utils.remConverter(8),
  },
});

export const innerCard = css({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(16),
  flexShrink: "0",
  "@media (max-width: 48rem)": {
    gap: utils.remConverter(8),
  },
});

export const newsHeader = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(8),
  alignSelf: "stretch",
  "@media (max-width: 48rem)": {
    gap: utils.remConverter(4),
  },
});

export const heading = css({
  color: colors.Zeb_Solid_White,
  fontFeatureSettings: '"clig" off, "liga" off',
  fontFamily: "Lato",
  fontSize: utils.remConverter(16),
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: utils.remConverter(28),
  letterSpacing: utils.remConverter(0.8),
  "@media (max-width: 48rem)": {
    fontSize: utils.remConverter(14),
    lineHeight: utils.remConverter(24),
  },
});

export const mailIcon = css({
  display: "flex",
  width: utils.remConverter(80),
  height: utils.remConverter(80),
  padding: `${utils.remConverter(17)} ${utils.remConverter(3.74)}`,
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 48rem)": {
    width: utils.remConverter(48),
    height: utils.remConverter(48),
  },
});

export const quote = css({
  alignSelf: "stretch",
  color: colors.Zeb_Solid_Light_Blue,
  fontFeatureSettings: '"clig" off, "liga" off',
  fontFamily: "Lato",
  fontSize: utils.remConverter(14),
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: utils.remConverter(24),
  letterSpacing: utils.remConverter(0.4),
  "@media (max-width: 48rem)": {
    fontSize: utils.remConverter(12),
    lineHeight: utils.remConverter(20),
  },
});

export const email = css({
  flex: "1 0 0",
  fontFeatureSettings: '"clig" off, "liga" off',
  fontFamily: "Lato",
  fontSize: utils.remConverter(14),
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: utils.remConverter(24),
  letterSpacing: utils.remConverter(0.4),
  "@media (max-width: 48rem)": {
    fontSize: utils.remConverter(12),
    lineHeight: utils.remConverter(20),
  },
});

export const subscribe = css({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: utils.remConverter(8),
  color: "white",
  borderRadius: utils.remConverter(8),
  marginBottom: utils.remConverter(8),
  background: colors.Zeb_Gradient_Blue_01,
  ...typography.C4_12,
  "@media (max-width: 48rem)": {
    gap: utils.remConverter(6.4),
    borderRadius: utils.remConverter(6),
  },
});

export const bannerImage = css({
  width: utils.remConverter(48),
  height: utils.remConverter(48),
  alignSelf: "center",
  flexShrink: "0",
  position: "absolute",
  right: utils.remConverter(16),
  top: utils.remConverter(16),
  "@media (max-width: 30rem)": {
    width: utils.remConverter(32),
    height: utils.remConverter(32),
  },
});

export const frame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: utils.remConverter(20),
  alignSelf: "stretch",
  "@media (max-width: 48rem)": {
    gap: utils.remConverter(12),
  },
});

export const anotherFrame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  gap: utils.remConverter(20),
  alignSelf: "stretch",
  "@media (max-width: 48rem)": {
    gap: utils.remConverter(12),
  },
});

export const zebpayImageDiv = css({
  display: "flex",
  width: utils.remConverter(64),
  height: utils.remConverter(64),
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 48rem)": {
    width: utils.remConverter(48),
    height: utils.remConverter(48),
  },
});

export const textWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(4),
  alignSelf: "stretch",
  "@media (max-width: 48rem)": {
    gap: utils.remConverter(2),
  },
});

export const subtitle = css({
  alignSelf: "stretch",
  color: colors.Zeb_Solid_Light_Blue,
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: "Lato",
  fontSize: utils.remConverter(14),
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: utils.remConverter(24),
  letterSpacing: utils.remConverter(0.4),
  "@media (max-width: 48rem)": {
    fontSize: utils.remConverter(12),
    lineHeight: utils.remConverter(20),
  },
});

export const button = css({
  height: utils.remConverter(32),
  flex: "1 0 0",
  "@media (max-width: 48rem)": {
    height: utils.remConverter(28),
  },
});

export const KYC = css({
  height: utils.remConverter(80),
  width: utils.remConverter(80),
  "@media (max-width: 48rem)": {
    height: utils.remConverter(64),
    width: utils.remConverter(64),
  },
});

export const subSucess = css({
  fontSize: utils.remConverter(16),
  fontWeight: "700",
  marginTop: utils.remConverter(16),
  "@media (max-width: 48rem)": {
    fontSize: utils.remConverter(14),
  },
});

export const subText = css({
  fontSize: utils.remConverter(14),
  fontWeight: "400",
  color: colors.Zeb_Solid_Light_Blue,
  marginTop: utils.remConverter(16),
  lineHeight: utils.remConverter(24),
  "@media (max-width: 48rem)": {
    fontSize: utils.remConverter(12),
    lineHeight: utils.remConverter(20),
  },
});

export const zebpayZebra = css({
  float: "right",
  marginTop: utils.remConverter(28),
  marginRight: utils.remConverter(-12),
  color: colors.Zeb_Solid_Dark_Grey,
  opacity: "0.1",
  "@media (max-width: 75rem)": {
    marginTop: utils.remConverter(20),
    marginRight: utils.remConverter(-8),
    height: utils.remConverter(120),
    width: utils.remConverter(120),
  },
});

export const main = css({
  fontFamily: "Lato",
  display: "inline-flex",
  alignItems: "flex-start",
  gap: utils.remConverter(20),
  width: "100%",
  maxWidth: "100%",
  marginTop: utils.remConverter(60),
  padding: utils.remConverter(40),
  paddingTop: utils.remConverter(20),
  paddingBottom: utils.remConverter(20),
  height: "calc(100vh - 3.75rem)",
  flexShrink: 0,
  overflow: "hidden",
  background: colors.Zeb_Solid_BG_Blue,
  boxShadow: `0 ${utils.remConverter(7)} ${utils.remConverter(7)} ${utils.remConverter(-2)} rgba(97, 79, 79, 0.14)`,
  "@media (max-width: 75rem)": {
    gap: utils.remConverter(16),
    padding: utils.remConverter(16),
  },
  "@media (max-width: 48rem)": {
    flexDirection: "column",
    padding: utils.remConverter(16),
    height: "auto",
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
  "@media (max-width: 75rem)": {
    width: "85%",
  },
  "@media (max-width: 48rem)": {
    width: "100%",
    height: "auto",
    paddingBottom: utils.remConverter(8),
  },
});

export const headerFrame = (isScrolled: boolean) =>
  css({
    display: "flex",
    padding: `${utils.remConverter(16)} 0`,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: utils.remConverter(8),
    alignSelf: "stretch",
    background: colors.Zeb_Solid_Dark_Blue,
    position: "sticky",
    top: 0,
    borderRadius: utils.remConverter(8),
    ...(isScrolled && {
      boxShadow: `0 ${utils.remConverter(8)} ${utils.remConverter(8)} ${utils.remConverter(-4)} #0C0C1D`,
    }),
    "@media (max-width: 75rem)": {
      gap: utils.remConverter(6),
      padding: `${utils.remConverter(12)} 0`,
    },
    "@media (max-width: 48rem)": {
      gap: utils.remConverter(4),
      padding: `${utils.remConverter(8)} 0`,
    },
  });

  export const section = css({
    display: "flex",
    flexWrap: "wrap",
    height: utils.remConverter(636),
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
      visibility: "hidden",
    },
    "&::-webkit-scrollbar-thumb": {
      background: colors.Zeb_Solid_Dark_Grey,
      borderRadius: utils.remConverter(18),
      visibility: "hidden", 
    },
    "&.scrolled": {
      "&::-webkit-scrollbar": {
        visibility: "visible",
      },
      "&::-webkit-scrollbar-thumb": {
        visibility: "visible", 
      },
    },
    "@media (max-width: 75rem)": {
      padding: utils.remConverter(12),
    },
    "@media (max-width: 48rem)": {
      width: "100%",
      height: "auto",
      padding: utils.remConverter(8),
    },
  });
  
  export const innerDiv = css({
    display: "flex",
    width: "25%",
    height: "100%",
    padding: utils.remConverter(16),
    overflowY: "auto",
    fontFamily: "Lato",
    color: colors.Zeb_Solid_White,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: utils.remConverter(8),
    background: colors.Zeb_Solid_Dark_Blue,
    "&::-webkit-scrollbar": {
      width: 0, 
    },
    "&::-webkit-scrollbar-thumb": {
      display: "none", 
    },
    "@media (max-width: 75rem)": {
      width: "30%",
    },
    "@media (max-width: 48rem)": {
      width: "100%",
      height: "auto",
      padding: utils.remConverter(8),
    },
  });

export const tradingBanner = css({
  display: "flex",
  width: "100%",
  padding: utils.remConverter(12),
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(4),
  flexShrink: "0",
  borderRadius: utils.remConverter(8),
  background: colors.Zeb_Gradient_Dark_Blue,
  "@media (max-width: 75rem)": {
    padding: utils.remConverter(16),
  },
  "@media (max-width: 48rem)": {
    height: "auto",
    padding: utils.remConverter(16),
  },
});

export const buttonGroup = css({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
  gap: utils.remConverter(12),
  alignSelf: "stretch",
  "@media (max-width: 75rem)": {
    gap: utils.remConverter(8),
  },
  "@media (max-width: 48rem)": {
    gap: utils.remConverter(8),
  },
});

export const appButton = css({
  display: "flex",
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  borderRadius: utils.remConverter(4),
  padding: `${utils.remConverter(6.4)} ${utils.remConverter(28)}`,
  width: "100%",
  border: `${utils.remConverter(1)} solid #A6A6A6`,
  cursor: "pointer",
  "@media (max-width: 75rem)": {
    padding: `${utils.remConverter(4.8)} ${utils.remConverter(16)}`,
  },
  "@media (max-width: 62.5rem)": {
    padding: `${utils.remConverter(1.6)} ${utils.remConverter(8)}`,
  },
});

export const form = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
  width: "100%",
  "@media (max-width: 48rem)": {
    gap: utils.remConverter(8),
  },
});

export const title = css({
  color: colors.Zeb_Solid_White,
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: "Lato",
  fontSize: utils.remConverter(16),
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: utils.remConverter(28),
  letterSpacing: utils.remConverter(0.8),
  "@media (max-width: 75rem)": {
    fontSize: utils.remConverter(14.4),
    lineHeight: utils.remConverter(24),
  },
  "@media (max-width: 48rem)": {
    fontSize: utils.remConverter(14),
    lineHeight: utils.remConverter(24),
  },
});

export const filterTagsContainer = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(8),
  padding: utils.remConverter(10),
  paddingLeft: utils.remConverter(24),
  paddingRight: utils.remConverter(24),
  width: "100%",
  background: colors.Zeb_Solid_Dark_Blue,
  borderBottom: `${utils.remConverter(1)} solid ${colors.Zeb_Solid_BG_Blue}`,
  justifyContent: "space-between",
  "@media (max-width: 48rem)": {
    padding: utils.remConverter(8),
    paddingLeft: utils.remConverter(16),
    paddingRight: utils.remConverter(16),
  },
});

export const tagsWrapper = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(8),
  whiteSpace: "nowrap",
  overflow: "hidden",
  flexGrow: 1,
});

export const filterTag = css({
  display: "flex",
  alignItems: "center",
  padding: `${utils.remConverter(6)} ${utils.remConverter(10)}`,
  background: colors.Zeb_Solid_Dark_Grey,
  borderRadius: utils.remConverter(4),
  color: colors.Zeb_Solid_White,
  fontSize: utils.remConverter(12),
  fontWeight: 600,
  whiteSpace: "nowrap",

  img: {
    width: utils.remConverter(16),
    height: utils.remConverter(16),
    marginRight: utils.remConverter(6),
  },

  button: {
    marginLeft: utils.remConverter(6),
    marginRight: utils.remConverter(-8),
    marginTop: utils.remConverter(4),
    background: "none",
    border: "none",
    color: colors.Zeb_Solid_Light_Blue,
    fontSize: utils.remConverter(14),
    cursor: "pointer",
    padding: 0,

    "&:hover": {
      color: colors.Zeb_Solid_White,
    },
  },
});

export const resetTagButton = css({
  flexShrink: 0,
  borderRadius: utils.remConverter(4),
  "@media (max-width: 48rem)": {
    padding: `${utils.remConverter(4)} ${utils.remConverter(10)}`,
    fontSize: utils.remConverter(12),
  },
});

export const sorterDropdown = css({
  position: "absolute",
  right: utils.remConverter(16),
  top: "calc(100% + 4px)",
  background: colors.Zeb_Solid_Dark_Blue,
  border: `${utils.remConverter(1)} solid ${colors.Zeb_Solid_Bright_Blue}`,
  borderRadius: utils.remConverter(8),
  padding: utils.remConverter(12),
  width: "231px",
  zIndex: 1000,
  fontFamily: "'Lato', sans-serif",
});

export const sorterItem = css({
  display: "flex",
  alignItems: "center",
  ...typography.B4_14_semibold,
  gap: "12px",
  padding: "8px",
  paddingBottom: "12px",
  paddingTop: "12px",
  width: "100%",
  color: colors.Zeb_Solid_Light_Blue,
  background: "none",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
  justifyContent: "space-between",
  fontFamily: 'Lato',
  "&:hover": {
    background: colors.Zeb_Solid_BG_Blue,
    color: colors.Zeb_Solid_White,
  },
});

export const sorterCheckmark = css({
  fontSize: utils.remConverter(16),
  color: colors.Zeb_Solid_White,
  fontFamily: "'Lato', sans-serif",
});

export const sorterIcon = css({
  background: "none",
  border: "none",
  cursor: "pointer",
  paddingTop: utils.remConverter(2),
});