import { typography, colors, utils } from "zebpay-ui";
import { css } from "@emotion/react";

export const ErrorText = css({
  color: "#ea6161",
  fontSize: utils.remConverter(14),
  position: "absolute",
  bottom: utils.remConverter(355),
  left: utils.remConverter(1122),
});

export const ButtonStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: utils.remConverter(20),

});

export const Subscribed = css({
  flexShrink: 0,
  marginLeft: "auto",
  display: "flex",
});

export const Subscribe  =
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"auto",
  });

export const newsletter = css({
  height: "auto",
  padding: utils.remConverter(12),
  alignItems: "center",
  gap: utils.remConverter(4),
  flex: "1 0 0",
  borderRadius: utils.remConverter(8),
  background: colors.Zeb_Solid_BG_Blue,

});

export const newsChild = css({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
  gap:utils.remConverter(20),
  flex: "1 0 0",
  alignSelf: "stretch",

});

export const newsHeader = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
});

export const heading = css({

  color: colors.Zeb_Solid_White,

  fontFeatureSettings: `"clig" off, "liga" off`,
  fontSize: utils.remConverter(16),
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: utils.remConverter(28),
  letterSpacing: utils.remConverter(0.8),
});

export const mailIcon = css({
  display: "flex",
  width: utils.remConverter(72),
  height: utils.remConverter(72),
  justifyContent: "center",
  alignItems: "center",
});

export const quote = css({
  alignSelf: "stretch",
  color: colors.Zeb_Solid_Light_Blue,
  fontFeatureSettings: `"clig" off, "liga" off`,
  fontSize: utils.remConverter(14),
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: utils.remConverter(24),
  letterSpacing: utils.remConverter(0.4),
});

export const Form = css({
  width:"100%",

});

export const input=css({
  width:"100%"
})

export const loading =css({
  marginTop:utils.remConverter(24),
  gap:utils.remConverter(4.8),
  display:"flex",
  flexDirection:"column"
})
