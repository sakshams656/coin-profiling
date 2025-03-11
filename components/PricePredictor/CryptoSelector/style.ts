import css from "styled-jsx/css";
import { utils } from "zebpay-ui";

export const cryptoOption = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem",
});

export const cryptoIcon = css({
  width: "1.5rem",
  height: "1.5rem",
});

export const cryptoText = css({
  fontSize: "1rem",
  color: "white",
});


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