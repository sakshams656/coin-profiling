import { css } from "@emotion/react";
import { utils, colors } from "zebpay-ui";

export const header = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingTop: utils.remConverter(8),
  paddingLeft: utils.remConverter(40),
  paddingRight: utils.remConverter(40),
  marginBottom: utils.remConverter(-22.4),
  boxSizing: "border-box",
});

export const tabs = css({
  width: "100%",
  marginBottom: utils.remConverter(0),
  padding: utils.remConverter(0),
});

export const headerButton = css({
  position: "relative",
  marginBottom: utils.remConverter(32),
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(16),
  "@media (max-width: 48rem)": {
    marginRight: utils.remConverter(16),
    marginBottom: utils.remConverter(16),
    gap: utils.remConverter(8),
  },
});

export const iconButton = css({
  background: colors.Zeb_Solid_Dark_Blue,
  borderRadius: utils.remConverter(8),
  border: "none",
  width: utils.remConverter(36),
  height: utils.remConverter(36),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: utils.remConverter(8),
  cursor: "pointer",
  position: "relative", 
  "&:hover": {
    borderColor: colors.Zeb_Solid_Light_Blue,
  },
  "@media (max-width: 48rem)": {
    width: utils.remConverter(28),
    height: utils.remConverter(28),
    padding: utils.remConverter(6),
  },
});