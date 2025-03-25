
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";

export const insidePanel = css({
  color: "white",
  fontSize: utils.remConverter(12),
  display: "flex",
  flexDirection: "column",
  gap: utils.remConverter(3),
  padding: `${utils.remConverter(16)} ${utils.remConverter(16)} ${utils.remConverter(16)}`,
});

export const title = (isDateRangeOpen) =>
  css({
    fontSize: utils.remConverter(12),
    lineHeight: utils.remConverter(18),
    letterSpacing: utils.remConverter(0.4),
    fontWeight:"600",
    color: isDateRangeOpen ? "white" : colors.Zeb_Solid_Light_Blue,
    fontFamily: `"Lato", "Noto-serif"`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

export const buttonGroup = css({
  position: "absolute",
  bottom: utils.remConverter(16),
  right: utils.remConverter(16),
  display: "flex",
  gap: utils.remConverter(12),
  marginRight: utils.remConverter(16),
});

export const added = css({
  fontSize: utils.remConverter(12),
  color: "white",
  marginLeft: utils.remConverter(8),
  fontWeight:"600",
});

export const filterAndUpdownFrame = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(20),

  "@media (max-width: 768px)": {
    gap: utils.remConverter(8),
  },
});

export const iconBox = css({
  padding: utils.remConverter(8),
  borderRadius: utils.remConverter(8),
  background: colors.Zeb_Solid_BG_Blue,
});

export const accordionStyle = css({
  marginBottom: utils.remConverter(9.6),
  marginLeft: utils.remConverter(16),
  marginRight: utils.remConverter(16),
});

export const icon=css({
  color:"#C0C0EE"
})

export const accordionTitle=css({
  marginRight:utils.remConverter(12)
})

export const accordion_option=css({
  margin: `0 ${utils.remConverter(16)} ${utils.remConverter(9.6)} ${utils.remConverter(16)}`,
})

export const accordion_option_inside=css({
  display:"flex",
  alignItems:"center",
  margin:`${utils.remConverter(12)} 0 ${utils.remConverter(12)} ${utils.remConverter(3)}`,
})

export const box=css({
  marginRight:utils.remConverter(16),
})

export const customDate=css({
  marginTop:utils.remConverter(-8),
  padding:utils.remConverter(16),
  backgroundColor:colors.Zeb_Solid_BG_Blue,
})

export const calendar_icon=css({
  marginRight:utils.remConverter(8),
  fontSize:utils.remConverter(18)

})

export const custom_span=css({
  color:"#C2C2DD",
  marginLeft:utils.remConverter(8),
  fontWeight:"400"
})
