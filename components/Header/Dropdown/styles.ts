import { css } from "@emotion/react";
import { utils, colors } from "zebpay-ui";

export const shareMenu = css({
    position: "absolute",
    right: utils.remConverter(185),
    top: `calc(100% + ${utils.remConverter(8)})`,
    background: colors.Zeb_Solid_Dark_Blue,
    border: `${utils.remConverter(1)} solid ${colors.Zeb_Solid_Bright_Blue}`,
    borderRadius: utils.remConverter(8),
    padding: utils.remConverter(12),
    width: utils.remConverter(230),
    boxShadow: `${utils.remConverter(0)} ${utils.remConverter(4)} ${utils.remConverter(16)} rgba(0, 0, 0, 0.2)`,
    zIndex: 1000,
  });
  
  export const shareMenuItem = css({
    display: "flex",
    alignItems: "center",
    gap: utils.remConverter(12),
    padding: utils.remConverter(8),
    paddingLeft: utils.remConverter(0),
    width: "100%",
    color: colors.Zeb_Solid_Light_Blue,
    fontsize: utils.remConverter(14),
    background: "none",
    border: "none",
    cursor: "pointer",
    borderRadius: utils.remConverter(4),
    "&:hover": {
      color: colors.Zeb_Solid_White,
    },
  });
  
  export const shareMenuHeader = css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1rem",
      color: colors.Zeb_Solid_White,
  });
  
    export const shareMenuHeaderSpan = css({
      fontSize: `${utils.remConverter(14)}`,
      fontWeight: 600
    });
  
  export const shareMenuTitle = css({
    display: "flex",
    alignItems: "center",
    gap: utils.remConverter(8),
    fontSize: utils.remConverter(14),
    color: colors.Zeb_Solid_Light_Blue,
    fontWeight: 500,
  });
  
  export const closeButton = css({
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: utils.remConverter(4),
    color: colors.Zeb_Solid_Light_Blue,
    fontSize: utils.remConverter(16),
    lineHeight: 1,
  });
  
  export const shareButton = css({
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: utils.remConverter(4),
    color: `${colors.Zeb_Solid_Light_Blue}`,
    fontSize: `${utils.remConverter(16)}`,
    lineHeight: 1,
  });