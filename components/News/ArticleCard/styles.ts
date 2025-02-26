import { css } from "@emotion/react";
import { colors, typography, utils } from "zebpay-ui"; 

export const cardContainerStyle = css({
  display: "flex",
  padding: utils.remConverter(16),
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(4),
  flex: "1 0 0",
  borderRadius: utils.remConverter(8),
  background: colors.Zeb_Solid_BG_Blue,
  border: `${utils.remConverter(1)} solid ${colors.Zeb_Solid_BG_Blue}`,
  "&:hover": {
    border: `${utils.remConverter(1)} solid ${colors.Zeb_Solid_Bright_Blue}`,
    boxShadow: `0 ${utils.remConverter(8)} ${utils.remConverter(8)} ${utils.remConverter(-4)} #0c0c1d`,
  },
});

export const insideFrameStyle = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(12),
  width: "100%",
  alignSelf: "stretch",
});

export const cardImageStyle = css({
  display: "flex",
  width: utils.remConverter(100),
  height: utils.remConverter(104),
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: utils.remConverter(4),
  alignSelf: "stretch",
  borderRadius: utils.remConverter(4),
  border: `${utils.remConverter(1)} solid #34345a`,
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: utils.remConverter(4),
  },
});

export const cardInfoStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(12),
  flex: "1 0 0",
  alignSelf: "stretch",
});

export const infoHeaderStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(4),
  alignSelf: "stretch",
});

export const domainNameStyle = (isZebpay) =>
  css({
    display: "flex",
    padding: `${utils.remConverter(2)} ${utils.remConverter(4)}`,
    alignItems: "center",
    gap: utils.remConverter(10),
    borderRadius: utils.remConverter(4),
    background: isZebpay
      ? "rgba(51, 143, 255, 0.20)"
      : "rgba(192, 192, 238, 0.20)",
    color: isZebpay
      ? colors.Zeb_Solid_Bright_Blue
      : "#C2C2DD",
  });

export const titleStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
  width: "100%",
  padding: `${utils.remConverter(2)} ${utils.remConverter(4)}`,
  borderRadius: utils.remConverter(4),
  color: colors.Zeb_Solid_White,
  textDecoration: "none",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  lineHeight: 1.5,
});

export const infoFooterStyle = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(2),
  alignSelf: "stretch",
});

export const readingTimeStyle = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(4),
  fontSize: utils.remConverter(12),
  fontWeight: 400,
});

export const readingTimeIcon = css({
  display: "flex",
  width: utils.remConverter(12),
  height: utils.remConverter(12),
  padding: utils.remConverter(0.6),
  justifyContent: "center",
  alignItems: "center",
  color: colors.Zeb_Solid_Light_Blue,
});

export const textReadingTime = css({
  color: colors.Zeb_Solid_Light_Blue,
  ...typography["b5/12_regular"],
});

export const iconSeparatorStyle = css({
  width: utils.remConverter(16),
  height: utils.remConverter(16),
});

export const dateStyle = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(4),
  fontSize: utils.remConverter(12),
  fontWeight: 400,
});

export const dateIconStyle = css({
  display: "flex",
  width: utils.remConverter(12),
  height: utils.remConverter(12),
  padding: utils.remConverter(0.6),
  justifyContent: "center",
  alignItems: "center",
  color: colors.Zeb_Solid_Light_Blue,
});

export const dateTextStyle = css({
  color: colors.Zeb_Solid_Light_Blue,
  ...typography["b5/12_regular"],
});