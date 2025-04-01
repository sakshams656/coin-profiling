
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";

export const Main = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  height: "100%",
  minHeight: utils.remConverter(300),
  textAlign: "center",
  padding: utils.remConverter(32),
  color: colors.Zeb_Solid_White,
});

export const Heading = css({
  ...typography.h3,
  fontFamily: "Lato",
  fontWeight: 700,
  fontSize: utils.remConverter(32),
  lineHeight: utils.remConverter(48),
  letterSpacing: utils.remConverter(0.8),
  marginBottom: utils.remConverter(16),
});

export const subHeading = css({
  fontFamily: "Lato",
  fontWeight: 400,
  fontSize: utils.remConverter(20),
  lineHeight: utils.remConverter(30),
  letterSpacing: utils.remConverter(0.4),
  textAlign: "center",
  color: colors.Zeb_Solid_Light_Blue,
  marginBottom: utils.remConverter(48),
});
