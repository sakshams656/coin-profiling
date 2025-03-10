// import { css } from "@emotion/react";
// import { colors, utils } from "zebpay-ui";

// export const container = css({
//   fontFamily: "Lato",
//   width: "100%",
//   padding: utils.remConverter(40),
//   paddingTop: utils.remConverter(24),
//   marginBottom: utils.remConverter(32),
//   height: "100vh",
//   overflowY: "auto",
//   scrollbarColor: `${colors.Zeb_Solid_Light_Blue} transparent`,
//   "&::-webkit-scrollbar": {
//     width: utils.remConverter(4),
//   },
//   "&::-webkit-scrollbar-track": {
//     background: "transparent",
//   },
//   "&::-webkit-scrollbar-thumb": {
//     backgroundColor: colors.Zeb_Solid_Light_Blue,
//     borderRadius: utils.remConverter(4),
//   },
// });

// export const coinBanner = css({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   width: "100%",
//   padding: utils.remConverter(24),
//   backgroundColor: colors.Zeb_BG_Blue,
//   borderRadius: utils.remConverter(8),
//   maxHeight: utils.remConverter(110),
// });

// export const coinInfo = css({
//   display: "flex",
//   alignItems: "center",
//   gap: utils.remConverter(16),
//   color: colors.Zeb_Solid_White,
// });

// export const priceInfo = css({
//   display: "flex",
//   alignItems: "center",
//   gap: utils.remConverter(8),
// });

// export const positiveChange = css({
//   backgroundColor: "rgba(46, 204, 113, 0.2)",
//   color: "#2ECC71",
//   padding: `${utils.remConverter(4)} ${utils.remConverter(8)}`,
//   borderRadius: utils.remConverter(8),
//   border: `${utils.remConverter(1)} solid #2ECC71`,
//   fontSize: utils.remConverter(14),
// });

// export const tag = css({
//   border: `${utils.remConverter(1)} solid ${colors.Zeb_Solid_White}`,
//   padding: `${utils.remConverter(4)} ${utils.remConverter(8)}`,
//   borderRadius: utils.remConverter(8),
//   backgroundColor: colors.Zeb_BG_Light_Blue,
//   fontSize: utils.remConverter(14),
//   color: colors.Zeb_Solid_White,
// });

// export const statsContainer = css({
//   display: "flex",
//   gap: utils.remConverter(16),
// });

// export const statCard = css({
//   display: "flex",
//   alignItems: "center",
//   backgroundColor: colors.Zeb_BG_Light_Blue,
//   padding: utils.remConverter(16),
//   borderRadius: utils.remConverter(8),
//   minWidth: utils.remConverter(120),
//   textAlign: "center",
//   color: colors.Zeb_Solid_White,
//   fontSize: utils.remConverter(14),
// });

// export const statInfo = css({
//   display: "flex",
//   flexDirection: "column",
//   marginLeft: utils.remConverter(8),
//   alignItems: "flex-start",
//   fontSize: utils.remConverter(12),
//   fontWeight: 400,
//   color: colors.Zeb_Solid_Light_Blue,
// });

// export const statValue = css({
//   fontSize: utils.remConverter(16),
//   fontWeight: 700,
//   color: "white",
//   paddingTop: utils.remConverter(4),
// });

// export const leftContainer = css({
//   flex: "3.8",
//   backgroundColor: colors.Zeb_Solid_BG_Blue,
//   color: colors.Zeb_Solid_White,
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   overflowY: "auto",
// });

// export const rightContainer = css({
//   flex: "1.2",
//   backgroundColor: colors.Zeb_Solid_Dark_Blue,
//   padding: utils.remConverter(16),
//   borderRadius: utils.remConverter(8),
//   color: colors.Zeb_Solid_White,
//   height: "fit-content",
//   position: "sticky",
//   top: utils.remConverter(24),
//   marginBottom: utils.remConverter(32),
//   maxWidth: utils.remConverter(312),
// });

// export const contentWrapper = css({
//   display: "flex",
//   gap: utils.remConverter(16),
//   marginTop: utils.remConverter(24),
//   marginBottom: utils.remConverter(32),
//   width: "100%",
//   flexGrow: 1,
//   alignItems: "stretch",
//   position: "relative",
// });

// export const returnsTitle = css({
//   fontSize: utils.remConverter(16),
//   fontWeight: 700,
//   paddingTop: utils.remConverter(8),
// });

// export const formContainer = css({
//   backgroundColor: colors.Zeb_Solid_BG_Blue,
//   borderRadius: utils.remConverter(8),
//   marginTop: utils.remConverter(16),
//   padding: utils.remConverter(16),
//   boxSizing: "border-box",
//   width: "100%",
//   marginBottom: utils.remConverter(200),
//   maxHeight: utils.remConverter(254),
// });

// export const investmentBox = css({
//   display: "flex",
//   flexDirection: "column",
//   background: colors.Zeb_Solid_Dark_Blue,
//   borderRadius: utils.remConverter(8),
//   padding: utils.remConverter(16),
//   width: "100%",
//   maxWidth: utils.remConverter(300),
//   border: `${utils.remConverter(1)} solid ${colors.Zeb_BG_Blue}`,
//   marginBottom: utils.remConverter(16),
// });

// export const IBlabel = css({
//   fontSize: utils.remConverter(12),
//   color: colors.Zeb_Solid_Light_Blue,
//   fontWeight: 400,
//   marginBottom: utils.remConverter(8),
// });

// export const IBvalue = css({
//   fontSize: utils.remConverter(14),
//   fontWeight: 600,
//   color: colors.Zeb_Solid_White,
// });

// export const percentageBox = css({
//   background: "#C0C0EE33",
//   padding: `${utils.remConverter(4)} ${utils.remConverter(4)}`,
//   borderRadius: utils.remConverter(4),
//   fontSize: utils.remConverter(14),
//   color: colors.Zeb_Solid_White,
//   alignSelf: "flex-end",
// });

// export const statisticsContainer = css({
//   backgroundColor: colors.Zeb_Solid_Dark_Blue,
//   padding: utils.remConverter(24),
//   borderRadius: utils.remConverter(8),
// });

// // New styles from inline css in Overview.tsx
// export const investmentFrequencyLabel = css({
//   fontSize: utils.remConverter(14),
//   color: colors.Zeb_Solid_Light_Blue,
// });

// export const overThePastLabel = css({
//   fontSize: utils.remConverter(14),
//   color: colors.Zeb_Solid_Light_Blue,
// });

// export const investmentBoxContent = css({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   maxHeight: utils.remConverter(106),
// });

// export const investedAmountText = css({
//   color: colors.Zeb_Solid_Light_Blue,
//   fontSize: utils.remConverter(12),
//   fontWeight: 400,
// });

// export const investedAmountValue = css({
//   color: colors.Zeb_Solid_Light_Blue,
//   fontSize: utils.remConverter(12),
//   fontWeight: 400,
// });

// // Styles for ShimmerWrapper margins
// export const inputMarginBottom = css({
//   marginBottom: utils.remConverter(16),
// });

// export const labelMarginBottom = css({
//   marginBottom: utils.remConverter(16),
// });

// export const dropdownMargin = css({
//   marginTop: utils.remConverter(4), 
// });

// export const tabsMargin = css({
//   marginTop: utils.remConverter(4),
// });

// export const buttonMarginTop = css({
//   marginTop: utils.remConverter(16), 
// });


import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui";

export const container = css({
  fontFamily: "Lato",
  width: "100%",
  padding: utils.remConverter(40),
  paddingTop: utils.remConverter(24),
  paddingBottom: utils.remConverter(0),
  marginBottom: utils.remConverter(24),
  height: "100vh",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: utils.remConverter(4),
  },
  "&::-webkit-scrollbar-thumb": {
    background: colors.Zeb_Solid_Light_Blue,
    borderRadius: utils.remConverter(18),
  },
  "@media (max-width: 75rem)": {
    padding: utils.remConverter(32),
    paddingTop: utils.remConverter(20),
    marginBottom: utils.remConverter(28),
  },
  "@media (max-width: 48rem)": {
    padding: utils.remConverter(24),
    paddingTop: utils.remConverter(16),
  },
  "@media (max-width: 30rem)": {
    padding: utils.remConverter(16),
    paddingTop: utils.remConverter(12),
  },
});

export const coinBanner = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: utils.remConverter(24),
  backgroundColor: colors.Zeb_BG_Blue,
  borderRadius: utils.remConverter(8),
  maxHeight: utils.remConverter(110),
  "@media (max-width: 75rem)": {
    padding: utils.remConverter(20),
  },
  "@media (max-width: 48rem)": {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: utils.remConverter(16),
    maxHeight: "none",
  },
  "@media (max-width: 30rem)": {
    padding: utils.remConverter(12),
  },
});

export const coinInfo = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(16),
  color: colors.Zeb_Solid_White,
  "@media (max-width: 75rem)": {
    gap: utils.remConverter(12),
  },
  "@media (max-width: 48rem)": {
    marginBottom: utils.remConverter(16),
    gap: utils.remConverter(10),
  },
  "@media (max-width: 30rem)": {
    gap: utils.remConverter(8),
  },
});

export const priceInfo = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(8),
  "@media (max-width: 75rem)": {
    gap: utils.remConverter(6),
  },
  "@media (max-width: 30rem)": {
    gap: utils.remConverter(4),
    flexWrap: "wrap",
  },
});

export const positiveChange = css({
  backgroundColor: "rgba(46, 204, 113, 0.2)",
  color: "#2ECC71",
  padding: `${utils.remConverter(4)} ${utils.remConverter(8)}`,
  borderRadius: utils.remConverter(8),
  border: `${utils.remConverter(1)} solid #2ECC71`,
  fontSize: utils.remConverter(14),
  "@media (max-width: 75rem)": {
    padding: `${utils.remConverter(3)} ${utils.remConverter(6)}`,
  },
  "@media (max-width: 30rem)": {
    fontSize: utils.remConverter(12),
    padding: `${utils.remConverter(2)} ${utils.remConverter(6)}`,
  },
});

export const tag = css({
  border: `${utils.remConverter(1)} solid ${colors.Zeb_Solid_White}`,
  padding: `${utils.remConverter(4)} ${utils.remConverter(8)}`,
  borderRadius: utils.remConverter(8),
  backgroundColor: colors.Zeb_BG_Light_Blue,
  fontSize: utils.remConverter(14),
  color: colors.Zeb_Solid_White,
  "@media (max-width: 75rem)": {
    padding: `${utils.remConverter(3)} ${utils.remConverter(6)}`,
  },
  "@media (max-width: 30rem)": {
    fontSize: utils.remConverter(12),
    padding: `${utils.remConverter(2)} ${utils.remConverter(6)}`,
  },
});

export const statsContainer = css({
  display: "flex",
  gap: utils.remConverter(16),
  "@media (max-width: 75rem)": {
    gap: utils.remConverter(14),
  },
  "@media (max-width: 48rem)": {
    flexWrap: "wrap",
    gap: utils.remConverter(12),
  },
  "@media (max-width: 30rem)": {
    gap: utils.remConverter(8),
  },
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
  "@media (max-width: 75rem)": {
    padding: utils.remConverter(14),
    minWidth: utils.remConverter(110),
  },
  "@media (max-width: 48rem)": {
    minWidth: utils.remConverter(100),
    padding: utils.remConverter(12),
  },
  "@media (max-width: 30rem)": {
    minWidth: utils.remConverter(80),
    padding: utils.remConverter(8),
    fontSize: utils.remConverter(12),
  },
});

export const statInfo = css({
  display: "flex",
  flexDirection: "column",
  marginLeft: utils.remConverter(8),
  alignItems: "flex-start",
  fontSize: utils.remConverter(12),
  fontWeight: 400,
  color: colors.Zeb_Solid_Light_Blue,
  "@media (max-width: 75rem)": {
    marginLeft: utils.remConverter(6),
  },
  "@media (max-width: 30rem)": {
    marginLeft: utils.remConverter(4),
    fontSize: utils.remConverter(10),
  },
});

export const statValue = css({
  fontSize: utils.remConverter(16),
  fontWeight: 700,
  color: "white",
  paddingTop: utils.remConverter(4),
  "@media (max-width: 75rem)": {
    paddingTop: utils.remConverter(3),
  },
  "@media (max-width: 30rem)": {
    fontSize: utils.remConverter(14),
    paddingTop: utils.remConverter(2),
  },
});

export const leftContainer = css({
  flex: "3.8",
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  color: colors.Zeb_Solid_White,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  "@media (max-width: 75rem)": {
    flex: "3",
  },
  "@media (max-width: 48rem)": {
    flex: "1",
  },
});

export const rightContainer = css({
  flex: "1.2",
  backgroundColor: colors.Zeb_Solid_Dark_Blue,
  padding: utils.remConverter(16),
  borderRadius: utils.remConverter(8),
  color: colors.Zeb_Solid_White,
  height: "fit-content",
  position: "sticky",
  top: utils.remConverter(24),
  marginBottom: utils.remConverter(32),
  maxWidth: utils.remConverter(312),
  "@media (max-width: 75rem)": {
    padding: utils.remConverter(14),
    maxWidth: utils.remConverter(280),
    top: utils.remConverter(20),
    marginBottom: utils.remConverter(28),
  },
  "@media (max-width: 48rem)": {
    position: "static",
    maxWidth: "100%",
    marginTop: utils.remConverter(16),
  },
  "@media (max-width: 30rem)": {
    padding: utils.remConverter(12),
  },
});

export const contentWrapper = css({
  display: "flex",
  gap: utils.remConverter(16),
  marginTop: utils.remConverter(24),
  marginBottom: utils.remConverter(32),
  width: "100%",
  flexGrow: 1,
  alignItems: "stretch",
  position: "relative",
  "@media (max-width: 75rem)": {
    gap: utils.remConverter(14),
    marginTop: utils.remConverter(20),
    marginBottom: utils.remConverter(28),
  },
  "@media (max-width: 48rem)": {
    flexDirection: "column",
    gap: utils.remConverter(12),
  },
  "@media (max-width: 30rem)": {
    marginTop: utils.remConverter(16),
    marginBottom: utils.remConverter(24),
  },
});

export const returnsTitle = css({
  fontSize: utils.remConverter(16),
  fontWeight: 700,
  paddingTop: utils.remConverter(8),
  "@media (max-width: 75rem)": {
    paddingTop: utils.remConverter(6),
  },
  "@media (max-width: 30rem)": {
    fontSize: utils.remConverter(14),
    paddingTop: utils.remConverter(4),
  },
});

export const formContainer = css({
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  borderRadius: utils.remConverter(8),
  marginTop: utils.remConverter(16),
  padding: utils.remConverter(16),
  boxSizing: "border-box",
  width: "100%",
  //marginBottom: utils.remConverter(200),
  marginBottom: utils.remConverter(16),

  maxHeight: utils.remConverter(254),
  "@media (max-width: 75rem)": {
    padding: utils.remConverter(14),
    marginTop: utils.remConverter(14),
  },
  "@media (max-width: 48rem)": {
    marginBottom: utils.remConverter(32),
  },
  "@media (max-width: 30rem)": {
    padding: utils.remConverter(12),
    maxHeight: "none",
  },
});

export const investmentBox = css({
  display: "flex",
  flexDirection: "column",
  background: colors.Zeb_Solid_Dark_Blue,
  borderRadius: utils.remConverter(8),
  padding: utils.remConverter(16),
  width: "100%",
  maxWidth: utils.remConverter(300),
  border: `${utils.remConverter(1)} solid ${colors.Zeb_BG_Blue}`,
  marginBottom: utils.remConverter(16),
  "@media (max-width: 75rem)": {
    padding: utils.remConverter(14),
    maxWidth: utils.remConverter(280),
    marginBottom: utils.remConverter(14),
  },
  "@media (max-width: 48rem)": {
    maxWidth: "100%",
  },
  "@media (max-width: 30rem)": {
    padding: utils.remConverter(12),
  },
});

export const IBlabel = css({
  fontSize: utils.remConverter(12),
  color: colors.Zeb_Solid_Light_Blue,
  fontWeight: 400,
  marginBottom: utils.remConverter(8),
  "@media (max-width: 75rem)": {
    marginBottom: utils.remConverter(6),
  },
  "@media (max-width: 30rem)": {
    fontSize: utils.remConverter(10),
  },
});

export const IBvalue = css({
  fontSize: utils.remConverter(14),
  fontWeight: 600,
  color: colors.Zeb_Solid_White,
  "@media (max-width: 30rem)": {
    fontSize: utils.remConverter(12),
  },
});

export const percentageBox = css({
  background: "#C0C0EE33",
  padding: `${utils.remConverter(4)} ${utils.remConverter(4)}`,
  borderRadius: utils.remConverter(4),
  fontSize: utils.remConverter(14),
  color: colors.Zeb_Solid_White,
  alignSelf: "flex-end",
  "@media (max-width: 75rem)": {
    padding: `${utils.remConverter(3)} ${utils.remConverter(3)}`,
  },
  "@media (max-width: 30rem)": {
    fontSize: utils.remConverter(12),
    padding: `${utils.remConverter(2)} ${utils.remConverter(2)}`,
  },
});

export const statisticsContainer = css({
  backgroundColor: colors.Zeb_Solid_Dark_Blue,
  padding: utils.remConverter(24),
  borderRadius: utils.remConverter(8),
  "@media (max-width: 75rem)": {
    padding: utils.remConverter(20),
  },
  "@media (max-width: 48rem)": {
    padding: utils.remConverter(16),
  },
  "@media (max-width: 30rem)": {
    padding: utils.remConverter(12),
  },
});

export const investmentFrequencyLabel = css({
  fontSize: utils.remConverter(14),
  color: colors.Zeb_Solid_Light_Blue,
  "@media (max-width: 30rem)": {
    fontSize: utils.remConverter(12),
  },
});

export const overThePastLabel = css({
  fontSize: utils.remConverter(14),
  color: colors.Zeb_Solid_Light_Blue,
  "@media (max-width: 30rem)": {
    fontSize: utils.remConverter(12),
  },
});

export const investmentBoxContent = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: utils.remConverter(4),
  maxHeight: utils.remConverter(106),
  "@media (max-width: 75rem)": {
    maxHeight: utils.remConverter(96),
  },
  "@media (max-width: 30rem)": {
    maxHeight: utils.remConverter(80),
  },
});

export const investedAmountText = css({
  color: colors.Zeb_Solid_Light_Blue,
  fontSize: utils.remConverter(12),
  fontWeight: 400,
  "@media (max-width: 30rem)": {
    fontSize: utils.remConverter(10),
  },
});

export const investedAmountValue = css({
  color: colors.Zeb_Solid_Light_Blue,
  fontSize: utils.remConverter(12),
  fontWeight: 400,
  "@media (max-width: 30rem)": {
    fontSize: utils.remConverter(10),
  },
});

export const inputMarginBottom = css({
  marginBottom: utils.remConverter(16),
  "@media (max-width: 75rem)": {
    marginBottom: utils.remConverter(14),
  },
  "@media (max-width: 30rem)": {
    marginBottom: utils.remConverter(12),
  },
});

export const labelMarginBottom = css({
  marginBottom: utils.remConverter(16),
  "@media (max-width: 75rem)": {
    marginBottom: utils.remConverter(14),
  },
  "@media (max-width: 30rem)": {
    marginBottom: utils.remConverter(12),
  },
});

export const dropdownMargin = css({
  marginTop: utils.remConverter(4),
});

export const tabsMargin = css({
  marginTop: utils.remConverter(4),

});

export const buttonMarginTop = css({
  marginTop: utils.remConverter(16),
  "@media (max-width: 75rem)": {
    marginTop: utils.remConverter(14),
  },
  "@media (max-width: 30rem)": {
    marginTop: utils.remConverter(12),
  },
});