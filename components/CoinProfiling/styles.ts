import { css } from "@emotion/react";
import { colors } from "zebpay-ui";

export const main = css({ height: "100vh", width: "100vw"});

export const headerWrapper = css({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    backgroundColor: colors.Zeb_Solid_BG_Blue, 
  });