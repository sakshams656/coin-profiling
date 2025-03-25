import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui";

export const container = css({
    backgroundColor: colors.Zeb_Solid_BG_Blue,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    gap: utils.remConverter(20)
});

export const title = css({
    fontFamily: "Lato",
    color: colors.Zeb_Solid_White,
    fontSize: utils.remConverter(16)
});
