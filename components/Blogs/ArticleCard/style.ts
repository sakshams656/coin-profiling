
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";

export const CardContainer = css({
  display: "flex",
  height: "40vh",
  flexDirection: "column",
  alignItems: "center",
  padding: utils.remConverter(12),
  borderRadius: utils.remConverter(8),
  background: colors.Zeb_Solid_BG_Blue,
  overflow: "hidden",
  flex: "1 1 27%",
  maxWidth: "33%",
  "&.hover-active:hover": {
    border: `${utils.remConverter(1)} solid ${colors.Zeb_Solid_Bright_Blue}`,
    boxShadow: `0px ${utils.remConverter(8)} ${utils.remConverter(8)} ${utils.remConverter(-4)} #0c0c1d`,
  },
  ["@media (max-width: " + utils.remConverter(1024) + ")"]: {
    flex: "1 1 45%",
    maxWidth: "45%",
  },
  ["@media (max-width: " + utils.remConverter(768) + ")"]: {
    flex: "1 1 100%",
    maxWidth: "100%",
  },
});

export const InsideFrame = css({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: utils.remConverter(9.6),
});

export const CardImage = css({
  display: "flex",
  height: "17vh",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: utils.remConverter(4),
  alignSelf: "stretch",
  borderRadius: utils.remConverter(4),
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: utils.remConverter(4),
  },
});

export const CardInfo = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(11.2),
  alignSelf: "stretch",
  flexGrow: 1,
  justifyContent: "space-between",
});

export const CardInfoHeader = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: utils.remConverter(8),
  alignSelf: "stretch",
});

export const DomainName = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: utils.remConverter(4),
  color: colors.Zeb_Solid_Light_Blue,
  borderRadius: utils.remConverter(4),
});

export const Title = css({
  gap: utils.remConverter(18),
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
  color: colors.Zeb_Solid_White,
  textDecoration: "none",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
  lineHeight: 1,
});

export const Description = css({
  fontSize: utils.remConverter(14.4),
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
  maxWidth: "100%",
  lineHeight: 1.5,
  color: colors.Zeb_Solid_Light_Blue,
});

export const CardInfoFooter = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: utils.remConverter(9.6),
  alignSelf: "stretch",
});

export const ReadingTime = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(6),
});

export const ReadingTimeIcon = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: utils.remConverter(12),
  height: utils.remConverter(12),
});

export const ReadingTimeText = css({
  color: colors.Zeb_Solid_Light_Blue,
  fontSize: utils.remConverter(14),
  lineHeight: 1,
});

export const Date = css({
  display: "flex",
  alignItems: "center",
  gap: utils.remConverter(6),
});

export const DateIcon = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const DateText = css({
  fontSize: utils.remConverter(14),
  lineHeight: 1,
  color: colors.Zeb_Solid_Light_Blue,
});
