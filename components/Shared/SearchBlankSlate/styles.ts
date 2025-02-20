import { css } from "@emotion/react";

import { colors, typography, utils } from "zebpay-ui";

export const container = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: `${utils.remConverter(79)} 0 ${utils.remConverter(83)} 0`
});

export const smallContainer = css({
  height: "100%",
  margin: `${utils.remConverter(48)} 0.75rem`
});

export const title = (isMobile: boolean, theme: "light" | "dark") =>
  css({
    ...(isMobile ? typography.H6_16_bold : typography.B3_16_semibold),
    color:
      theme === "light" ? colors.Zeb_Solid_BG_Blue : colors.Zeb_Solid_White,
    marginBottom: "0.25rem"
  });

export const text = (isMobile: boolean, theme: "light" | "dark") =>
  css({
    ...(isMobile ? typography.B4_14_regular : typography.B5_12_regular),
    color:
      theme === "light" ? colors.Zeb_Solid_Grey_02 : colors.Zeb_Solid_Light_Blue
  });
