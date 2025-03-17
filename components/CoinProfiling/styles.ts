import { css } from "@emotion/react";
import { colors, utils} from "zebpay-ui";

export const main = css({
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    position: "relative", 
  });

export const headerWrapper = css({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: colors.Zeb_Solid_BG_Blue, 
    zIndex: 10,
    transition: "box-shadow 0.3s ease",
  });

  export const headerShadow = css({
    boxShadow: `0 ${utils.remConverter(8)} ${utils.remConverter(8)} ${utils.remConverter(-4)} #0C0C1D`,
  });