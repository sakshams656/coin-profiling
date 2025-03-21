import { css } from "@emotion/react";

import { colors, typography, utils } from "zebpay-ui";

const toRem3 = utils.remConverter(3);
const toRem4 = "0.25rem";
const toRem5 = utils.remConverter(5);
const toRem6 = utils.remConverter(6);
const toRem8 = "0.5rem";
const toRem10 = utils.remConverter(10);
const toRem16 = "1rem";
const toRem18 = utils.remConverter(18);
const toRem29 = utils.remConverter(29);
const toRem36 = utils.remConverter(36);

export const searchInputContainer = css({
  position: "relative"
});

export const searchInputContainerWithBackground = css({
  background: colors.Zeb_Solid_BG_Blue,
  borderRadius: toRem8,
  position: "relative"
});

export const searchInputIcon = css({
  cursor: "pointer",
  position: "absolute",
  left: toRem6,
  top: toRem5,
  width: toRem16
});

export const searchInputLowerIcon = css({
  cursor: "pointer",
  top: utils.remConverter(11),
  left: toRem10,
  position: "absolute",
  width: toRem18
});

export const searchInputSmallLowerIcon = css({
  top: utils.remConverter(13),
  left: toRem8,
  width: toRem16
});

export const searchInputCloseIcon = css({
  background: "transparent",
  border: "none",
  outline: "unset",
  opacity: 0,
  position: "absolute",
  right: toRem6,
  top: toRem3,
  transition: "opacity 0.5s ease-in-out",
  visibility: "hidden",
  width: toRem16
});

export const searchInputCloseLowerIcon = css({
  right: toRem8,
  top: toRem8,
  width: toRem18
});

export const searchInputSmallCloseLowerIcon = css({
  width: toRem16
});

export const searchInputCloseIconVisible = css({
  visibility: "visible",
  opacity: 1
});

export const searchInput = css({
  ...typography.B5_12_regular,
  background: "transparent",
  border: "1px solid transparent",
  borderRadius: "0.5rem",
  outline: "none",
  padding: `${toRem4} 0 ${toRem4} 2rem`,
  transition: "all 0.5s ease-in-out",
  width: utils.remConverter(80),
  "::placeholder": {
    ...typography.B5_12_regular,
    color: colors.Zeb_Solid_Light_Blue
  }
});

export const searchInputNoAnimation = (theme?: "light" | "dark") =>
  css({
    ...typography.B4_14_regular,
    alignItems: "center",
    display: "flex",
    padding: `${toRem8} ${toRem36} ${toRem8} ${toRem36}`,
    transition: "none",
    width: "100%",
    color:
      theme === "light" ? colors.Zeb_Solid_BG_Blue : colors.Zeb_Solid_White,
    caretColor:
      theme === "light" ? colors.Zeb_Solid_BG_Blue : colors.Zeb_Solid_White,
    "::placeholder": {
      ...typography.B4_14_regular,
      color: colors.Zeb_Solid_Light_Blue
    }
  });

export const searchInputNoAnimationSmallPadding = css({
  padding: `${toRem8} ${toRem18} ${toRem8} ${toRem29}`
});

export const searchInputUnfolded = css({
  width: utils.remConverter(140)
});

export const searchInputFocused = (theme?: "light" | "dark") =>
  css({
    background: colors.Zeb_Solid_BG_Blue,
    border: `1px solid ${colors.Zeb_Solid_Bright_Blue}`,
    boxShadow: theme === "dark" ? colors.Zeb_Effects_Shadow_Hover : "",
    cursor: "text",
    paddingRight: utils.remConverter(25)
  });
