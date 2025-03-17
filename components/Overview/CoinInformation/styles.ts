import { css } from "@emotion/react";
import { utimesSync } from "fs";
import { colors, utils } from "zebpay-ui";

export const coinInfoContainer = css({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  backgroundColor: colors.Zeb_Solid_Dark_Blue,
  borderRadius: utils.remConverter(8),
  marginTop: utils.remConverter(16),
  padding: utils.remConverter(24),
  boxShadow: `0 ${utils.remConverter(4)} ${utils.remConverter(8)} 0 rgba(0, 0, 0, 0.1)`,
  position: "relative",
  maxHeight: utils.remConverter(436),
});

export const title = css({
  fontSize: utils.remConverter(18),
  fontWeight: 700,
  color: colors.Zeb_Solid_White,
  padding: `${utils.remConverter(8)} ${utils.remConverter(16)}`,
  paddingLeft: utils.remConverter(0),
  borderRadius: utils.remConverter(4),
  marginBottom: utils.remConverter(8),
  display: "inline-block",
});

export const launchInfo = css({
  position: "absolute",
  top: utils.remConverter(24),
  right: utils.remConverter(24),
  backgroundColor: "#C0C0EE33",
  padding: utils.remConverter(8),
  borderRadius: utils.remConverter(4),
  fontSize: utils.remConverter(12),
  color: colors.Zeb_Solid_Grey_01,
});

export const dataContainer = css({
  display: "flex",
  width: "100%",
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  borderRadius: utils.remConverter(8),
  marginTop: utils.remConverter(16),
  overflow: "hidden",
  
});

export const leftSidebar = css({
  display: "flex",
  flexDirection: "column",
  width: "25%",
  padding: utils.remConverter(12),
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  borderRadius: `${utils.remConverter(8)} 0 0 ${utils.remConverter(8)}`,
  minHeight: utils.remConverter(400),
  fontSize: utils.remConverter(14),
  fontWeight: 400,
});

export const getTabStyle = (isActive: boolean) =>
  css({
    padding: `${utils.remConverter(12)} ${utils.remConverter(16)}`,
    marginBottom: utils.remConverter(8),
    backgroundColor: "transparent",
    border: "none",
    color: colors.Zeb_Solid_Light_Blue,
    fontSize: utils.remConverter(14),
    paddingLeft: utils.remConverter(8),
    fontWeight: 400,
    cursor: "pointer",
    borderRadius: utils.remConverter(4),
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    gap: utils.remConverter(8),
    position: "relative",
    ...(isActive && {
      color: colors.Zeb_Solid_White,
      "&::before": {
        content: '""',
        position: "absolute",
        left: utils.remConverter(-12),
        top: 0,
        width: utils.remConverter(4),
        height: "100%",
        backgroundColor: colors.Zeb_Solid_Bright_Blue,
        borderRadius: utils.remConverter(4),
      },
    }),
  });

export const contentArea = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  color: colors.Zeb_Solid_White,
  fontSize: utils.remConverter(14),
  lineHeight: "1.5",
  padding: utils.remConverter(16),
  paddingRight: utils.remConverter(0),
  boxShadow: `inset ${utils.remConverter(25)} 0 ${utils.remConverter(5)} ${utils.remConverter(-10)} rgba(0, 0, 0, 0.2)`,
});

export const contentHeader = css({
  padding: utils.remConverter(16),
  fontSize: utils.remConverter(16),
  fontWeight: 600,
  color: colors.Zeb_Solid_White,
  borderBottom: `${utils.remConverter(1)} solid ${colors.Zeb_Solid_BG_Blue}`,
  position: "sticky",
  top: 0,
  paddingTop: utils.remConverter(0),
  marginLeft: utils.remConverter(0),
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  boxShadow: `0 ${utils.remConverter(16)} ${utils.remConverter(8)} rgba(0, 0, 0, 0.2)`,
});

export const contentBody = css({
    padding: utils.remConverter(16),
    overflowY: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: colors.Zeb_Solid_Light_Blue,
    "&::-webkit-scrollbar": {
    width: utils.remConverter(4), 
  },
});