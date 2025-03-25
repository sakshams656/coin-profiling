
import { css } from "@emotion/react";
import AssetsImg from "@public/images";
import { typography, colors, utils } from "zebpay-ui";

export const buttonGroup = css({
  display: "flex",
  width:"100%",
  justifyContent: "space-between",
  gap: utils.remConverter(8),
});

export const ButtonStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "none",
  border: "none",
  cursor: "pointer",
  width:"100%"
  
});

export const image = css({
  height: "auto",
  width: "100%",

});

export const tradingBanner =(isLoading:boolean)=> css({
  display: "flex",
  padding: utils.remConverter(12),
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: utils.remConverter(8),
  background: isLoading? colors.Zeb_Gradient_Dark_Blue: `${colors.Zeb_Gradient_Dark_Blue}, url(${AssetsImg.ic_tb_gradient.src})`, 
  backgroundBlendMode: "soft-light",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

export const frame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "stretch",
});

export const anotherFrame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(12),
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
  fontSize:utils.remConverter(16),
  lineHeight:utils.remConverter(28),
  fontWeight:"700",
});

export const subtitle = css({
  width: "100%",
  color: colors.Zeb_Solid_Light_Blue,
  fontSize:utils.remConverter(14),
  lineHeight:utils.remConverter(24),
  fontWeight: 400,
  letterSpacing: utils.remConverter(0.6),
});



