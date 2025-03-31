import { css } from "@emotion/react";
import AssetsImg from "@public/images";

import { typography, colors, utils } from "zebpay-ui";


export const ButtonStyle = css({
  // flex: 1,
  display: "flex",
  // width:"100%",
  justifyContent: "space-between",
  // alignItems: "center",

  // maxWidth: utils.remConverter(160),
  // height: "auto",
  background: "none",
  border: "none",
  cursor: "pointer",
  // padding:"20px",
  "@media (max-width: 768px)": {
    maxWidth: utils.remConverter(30),
  },
  "@media (max-width: 480px)": {
    maxWidth: utils.remConverter(24),
  },
});

export const image = css({
  height: "auto",
  width: "100%",
  maxWidth: "100%",
  "@media (max-width: 768px)": {
    height: utils.remConverter(30),
  },
  "@media (max-width: 480px)": {
    height: utils.remConverter(24),
  },
});

export const tradingBanner =(isLoading:boolean)=> css({
  display: "flex",
  padding: utils.remConverter(12),
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: utils.remConverter(8),
  background:  isLoading? colors.Zeb_Gradient_Dark_Blue:`${colors.Zeb_Gradient_Dark_Blue} , url(${AssetsImg.ic_tb_gradient.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "soft-light", 
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
  "@media (max-width: 768px), (max-width: 480px)": {
    gap: utils.remConverter(2),
  },
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
  fontFeatureSettings: '"liga" off, "clig" off',
  fontSize:utils.remConverter(16),
  lineHeight:utils.remConverter(28),
  "@media (max-width: 768px)": {
    fontSize: utils.remConverter(14),
    lineHeight: utils.remConverter(24),
  },
  letterSpacing:utils.remConverter(0.8),
  fontWeight:"700"
});

export const subtitle = css({
  width: "100%",
  color: colors.Zeb_Solid_Light_Blue,
  fontFeatureSettings: '"liga" off, "clig" off',
  fontSize:utils.remConverter(14),
  lineHeight:utils.remConverter(24),
  fontWeight: 400,
  letterSpacing: utils.remConverter(0.6),
  "@media (max-width: 768px)": {
    fontSize: utils.remConverter(12),
    lineHeight: utils.remConverter(20),
  },
});

export const buttonGroup = css({
  display: "flex",
  width:"100%",
  justifyContent: "space-between",
  gap: utils.remConverter(8),
  // alignSelf: "stretch",
  "@media (max-width: 768px)": {
    gap: utils.remConverter(8),
    justifyContent: "center",
  },
});
