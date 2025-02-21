import { css, CSSObject } from "@emotion/react";
import { colors, utils } from "zebpay-ui";

export const hideScrollCSS: CSSObject = {
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export const scrollCSS = (atTop: boolean) => {
  return {
    "&::-webkit-scrollbar": {
      width: "0.25rem",
      height: "0.25rem"
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: utils.remConverter(18),
      backgroundColor: colors.Zeb_Solid_Dark_Grey,
      display: atTop ? "none" : "block",
    },
  };
};

export const styleHideScroll = css({
  ...hideScrollCSS,
});

export const styleScroll = (atTop: boolean) =>
  css({
    ...scrollCSS(atTop),
  });
