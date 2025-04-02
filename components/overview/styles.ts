import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui";

export const container = css({
  fontFamily: "Lato",
  width: "100%",
  padding: utils.remConverter(36),
  paddingTop: utils.remConverter(24),
  paddingBottom: utils.remConverter(0),
  marginBottom: 0,
  height: `calc(100vh - ${utils.remConverter(60)})`,
  overflowY: "auto",
  boxSizing: "border-box",
  "&::-webkit-scrollbar": {
    width: utils.remConverter(4),
    visibility: "hidden",
  },
  "&::-webkit-scrollbar-thumb": {
    background: colors.Zeb_Solid_Light_Blue,
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
    boxShadow: `0 ${utils.remConverter(8)} ${utils.remConverter(8)} ${utils.remConverter(-4)} #0C0C1D`, 
  },
});

export const coinBanner = css({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: utils.remConverter(24),
  background: colors.Zeb_Gradient_Dark_Blue,
  borderRadius: utils.remConverter(8),
  maxHeight: utils.remConverter(110),
  marginBottom: utils.remConverter(16), 
});

export const backgroundPattern = css({
  position: "absolute",
  top: 0,
  left: "50%", 
  width: "50%", 
  height: "100%",
});

export const coinInfo = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(16),
  color: colors.Zeb_Solid_White,
});

export const priceInfo = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(8),
});

export const statsContainer = css({
  display: "flex",
  gap: utils.remConverter(16),
});

export const statCard = css({
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.Zeb_BG_Light_Blue,
  padding: utils.remConverter(16),
  borderRadius: utils.remConverter(8),
  minWidth: utils.remConverter(120),
  textAlign: "center",
  color: colors.Zeb_Solid_White,
  fontSize: utils.remConverter(14),
});

export const statInfo = css({
  display: "flex",
  flexDirection: "column",
  marginLeft: utils.remConverter(8),
  alignItems: "flex-start",
  fontSize: utils.remConverter(12),
  fontWeight: 400,
  color: colors.Zeb_Solid_Light_Blue,
});

export const statValue = css({
  fontSize: utils.remConverter(16),
  fontWeight: 700,
  color: "white",
  paddingTop: utils.remConverter(4),
});

export const leftContainer = css({
  flex: "3.8",
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  color: colors.Zeb_Solid_White,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  paddingBottom: utils.remConverter(24),
});

export const rightContainer = css({
  flex: "1.2",
  backgroundColor: colors.Zeb_Solid_Dark_Blue,
  padding: utils.remConverter(16),
  borderRadius: utils.remConverter(8),
  color: colors.Zeb_Solid_White,
  position: "sticky",
  top: 0,
  minWidth: utils.remConverter(310),
  maxWidth: utils.remConverter(312),
  marginBottom: utils.remConverter(24),
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  maxHeight: utils.remConverter(520),
});

export const contentWrapper = css({
  display: "flex",
  gap: utils.remConverter(16),
  marginTop: 0,
  marginBottom: 0, 
  width: "100%",
  flexGrow: 1,
  alignItems: "stretch",
  position: "relative",
});

export const returnsTitle = css({
  fontSize: utils.remConverter(16),
  fontWeight: 700,
  paddingTop: utils.remConverter(8),
});

export const formContainer = css({
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  borderRadius: utils.remConverter(8),
  marginTop: utils.remConverter(16),
  padding: utils.remConverter(16),
  boxSizing: "border-box",
  width: "100%",
  marginBottom: utils.remConverter(16),
  maxHeight: utils.remConverter(254),
});

export const investmentBox = css({
  display: "flex",
  flexDirection: "column",
  background: colors.Zeb_Solid_Dark_Blue,
  borderRadius: utils.remConverter(8),
  padding: utils.remConverter(12),
  width: "100%",
  maxWidth: utils.remConverter(300),
  border: `${utils.remConverter(1)} solid ${colors.Zeb_BG_Blue}`,
  marginBottom: utils.remConverter(16), 
});

export const IBlabel = css({
  fontSize: utils.remConverter(12),
  color: colors.Zeb_Solid_Light_Blue,
  fontWeight: 400,
  marginBottom: utils.remConverter(8),
});

export const IBvalue = css({
  fontSize: utils.remConverter(14),
  fontWeight: 600,
  color: colors.Zeb_Solid_White,
});

export const percentageBox = css({
  display: "flex", 
  alignItems: "center", 
  justifyContent: "space-between", 
  gap: `${utils.remConverter(8)}`
});

export const statisticsContainer = css({
  backgroundColor: colors.Zeb_Solid_Dark_Blue,
  padding: utils.remConverter(24),
  borderRadius: utils.remConverter(8),
});

export const investmentFrequencyLabel = css({
  fontSize: utils.remConverter(14),
  color: colors.Zeb_Solid_Light_Blue,
});

export const overThePastLabel = css({
  fontSize: utils.remConverter(14),
  color: colors.Zeb_Solid_Light_Blue,
});

export const investmentBoxContent = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxHeight: utils.remConverter(106),
});

export const investedAmountText = css({
  color: colors.Zeb_Solid_Light_Blue,
  fontSize: utils.remConverter(12),
  fontWeight: 400,
  marginTop: utils.remConverter(8)
});

export const investedAmountValue = css({
  color: colors.Zeb_Solid_Light_Blue,
  fontSize: utils.remConverter(12),
  fontWeight: 400,
});

export const inputMarginBottom = css({
  marginBottom: utils.remConverter(16),
});

export const labelMarginBottom = css({
  marginBottom: utils.remConverter(16),
});

export const dropdownMargin = css({
  marginTop: utils.remConverter(4),
});

export const tabsMargin = css({
  marginTop: utils.remConverter(4),
});

export const returnsButton = css({
  position: "sticky",
  bottom:16,
  padding: `${utils.remConverter(0.75)} ${utils.remConverter(1)}`,
  background: colors.Zeb_Solid_Dark_Blue,
  boxShadow: `${colors.Zeb_Box_Shadow} 0 ${utils.remConverter(-12)} ${utils.remConverter(40)} 0`,
  marginLeft: utils.remConverter(-1),
  borderRadius: `${0} ${0} ${utils.remConverter(0.5)} ${utils.remConverter(0.5)}`,
});

export const coinName = css({
  fontSize: utils.remConverter(16),
  fontWeight: 600,
})

export const coinPrice = css({
  fontSize: utils.remConverter(20),
  fontWeight: 700
})

export const coinsInfoBox = css({
  display: "flex",
  flexDirection: "column",
  gap: utils.remConverter(8)
})

export const loginSignupButtons = css({
  display: "flex",
  justifyContent: "space-between",
  position: "sticky",
  bottom:16,
})