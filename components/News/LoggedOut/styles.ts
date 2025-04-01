import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui";

export const container = css({
    background: colors.Zeb_Gradient_Dark_Blue,
    borderRadius: utils.remConverter(8),
    //padding: utils.remConverter(12),
    display: "flex",
    flexDirection: "column",
    gap: utils.remConverter(20)
});

export const buttons = css({
    display: "flex",
    justifyContent: "space-between"
})

export const textContainer = css ({
    display: "flex",
    flexDirection: "column",
    gap: utils.remConverter(8)
})

export const title = css({
    fontSize: utils.remConverter(16),
    fontWeight: 700
})

export const description = css({
    fontSize: utils.remConverter(14),
    fontWeight: 400,
    color: colors.Zeb_Solid_Light_Blue
})