
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";

export const ButtonStyle = css({
  // flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // maxWidth: utils.remConverter(160),
  // height: "auto",
  background: "none",
  border: "none",
  cursor: "pointer",
  // "@media (max-width: 768px)": {
  //   maxWidth: utils.remConverter(130),
  // },
  // "@media (max-width: 480px)": {
  //   maxWidth: utils.remConverter(110),
  // },
});

export const image = css({
  height: "auto",
  width: "100%",
  maxWidth: "100%",
  // "@media (max-width: 768px)": {
  //   height: utils.remConverter(30),
  // },
  // "@media (max-width: 480px)": {
  //   height: utils.remConverter(24),
  // },
});

export const tradingBanner = css({
  display: "flex",
  // height: "50%",
  // minHeight: utils.remConverter(192),
  padding: utils.remConverter(12),
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: utils.remConverter(8),
  background: colors.Zeb_Gradient_Dark_Blue,
  // "@media (max-width: 768px)": {
  //   padding: utils.remConverter(16),
  //   minHeight: utils.remConverter(160),
  // },
  // "@media (max-width: 480px)": {
  //   alignItems: "center",
  //   minHeight: utils.remConverter(144),
  // },
});

export const frame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "stretch",
  minHeight: "100%",
});

export const anotherFrame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(12),
  // "@media (max-width: 768px), (max-width: 480px)": {
  //   gap: utils.remConverter(2),
  // },
});

export const zebpayImageDiv = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const textWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(3),
});

export const title = css({
  width: "100%",
  color: colors.Zeb_Solid_White,
  // fontFeatureSettings: '"liga" off, "clig" off',
  // fontSize: "clamp(0.5rem, 1.2vw, 1.25rem)",
  // lineHeight: "clamp(1.5rem, 2.5vw, 1.75rem)",
  fontSize:utils.remConverter(16),
  lineHeight:"1.75rem",

  // "@media (max-width: 768px)": {
  //   fontSize: utils.remConverter(14),
  //   lineHeight: utils.remConverter(24),
  // },
});

export const subtitle = css({
  width: "100%",
  color: colors.Zeb_Solid_Light_Blue,
  // fontFeatureSettings: '"liga" off, "clig" off',
  // fontSize: "clamp(0.625rem, 1.2vw, 0.9rem)",
  // lineHeight: "clamp(1rem, 2.2vw, 1.5rem)",
  fontSize:utils.remConverter(14),
  lineHeight:utils.remConverter(24),
  fontWeight: 400,
  letterSpacing: utils.remConverter(0.4),
  // "@media (max-width: 768px)": {
  //   fontSize: utils.remConverter(12),
  //   lineHeight: utils.remConverter(20),
  // },
});

export const buttonGroup = css({
  display: "flex",
  width:"100%",
  justifyContent: "space-between",
  gap: utils.remConverter(8),
  // alignSelf: "stretch",
  // "@media (max-width: 768px)": {
  //   gap: utils.remConverter(8),
  //   justifyContent: "center",
  // },
});
