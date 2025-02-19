import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui";

export const container = css({
  width: "100%",
  padding: "2.5rem",
  paddingTop: "1.5rem",
  marginBottom: "2rem",
  height: "100vh", 
  overflowY: "auto", 
});

export const coinBanner = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "1.5rem 2.5rem",
  backgroundColor: colors.Zeb_Gradient_Dark_Blue,
  borderRadius: "0.5rem",
});

export const coinInfo = css({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  color: colors.Zeb_Solid_White,
});

export const priceInfo = css({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const positiveChange = css({
  backgroundColor: "rgba(46, 204, 113, 0.2)", 
  color: "#2ECC71",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.5rem",
  border: "1px solid #2ECC71",
  fontSize: "0.875rem",
});

export const tag = css({
  border: `1px solid ${colors.Zeb_Solid_White}`,
  padding: "0.25rem 0.5rem",
  borderRadius: "0.5rem",
  fontSize: "0.875rem",
  color: colors.Zeb_Solid_White,
});

export const statsContainer = css({
  display: "flex",
  gap: "1rem",
});

export const statCard = css({
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.Zeb_BG_Light_Blue,
  padding: "1rem",
  borderRadius: "0.5rem",
  minWidth: "120px",
  textAlign: "center",
  color: colors.Zeb_Solid_White,
  fontSize: "0.875rem",
});

export const statInfo = css({
  display: "flex",
  flexDirection: "column",
  marginLeft: "0.5rem",
  alignItems: "flex-start",
  fontSize: utils.remConverter(12),
  fontWeight: utils.remConverter(400),
  color: colors.Zeb_Solid_Light_Blue
});

export const statValue = css({
  fontSize: utils.remConverter(16),
  fontWeight: utils.remConverter(700),
  color: "white",
  paddingTop: "0.25rem"
});

export const leftContainer = css({
  flex: "3.8",
  backgroundColor: colors.Zeb_Solid_Dark_Blue,
  padding: "1.5rem",
  borderRadius: "0.5rem",
  color: colors.Zeb_Solid_White,
  height: "100%", 
  display: "flex",
  flexDirection: "column",
  overflowY: "auto", /* Add vertical scrolling */
});

/* Make right container sticky */
export const rightContainer = css({
  flex: "1.2",
  backgroundColor: colors.Zeb_Solid_Dark_Blue,
  padding: "1.5rem",
  borderRadius: "0.5rem",
  color: colors.Zeb_Solid_White,
  height: "fit-content",
  position: "sticky",
  top: "1.5rem",
  marginBottom: "2rem"
});

/* Add to contentWrapper for sticky positioning context */
export const contentWrapper = css({
  display: "flex",
  gap: "1rem",
  marginTop: "2rem",
  marginBottom: "2rem",
  width: "100%",
  flexGrow: 1,
  alignItems: "stretch",
  position: "relative", /* Required for sticky children */
});

export const returnsTitle = css({
  fontSize: utils.remConverter(16),
  fontWeight: utils.remConverter(700)
})

export const formContainer = css({
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  borderRadius: "0.5rem",
  marginTop: "1rem",
  padding: "1rem",
  boxSizing: "border-box", 
  width: "100%",
});

export const pastButton = css({
  padding: "0.25rem 1.25rem",
  borderRadius: "0.25rem",
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  border: "1px solid #C0C0EE",
  color: colors.Zeb_Solid_Light_Blue, 
  cursor: "pointer"
})
