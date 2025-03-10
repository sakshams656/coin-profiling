import { css } from "@emotion/react";
import { utils, typography, colors } from "zebpay-ui";

export const container = css({
    textAlign: "center",
    color: "white",
    padding: utils.remConverter(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: utils.remConverter(20),
    height: "100%"
});

export const noNews = css({
    fontSize: utils.remConverter(24),
    fontWeight: 600
});

export const noNewsText = css({
    fontSize: utils.remConverter(16),
    fontWeight: 400,
    color: colors.Zeb_Solid_Light_Blue
});

export const buttonText = css({
    fontSize: utils.remConverter(16),
    fontWeight: 700
})