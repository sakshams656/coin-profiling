import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui";

export const container = css({
    background: colors.Zeb_Gradient_Dark_Blue,
    display: "flex",
    gap: utils.remConverter(12),
    alignItems: "center",
    borderRadius: utils.remConverter(8),
    paddingTop: utils.remConverter(20),
    paddingBottom: utils.remConverter(20),
    paddingLeft: utils.remConverter(12),
    paddingRight: utils.remConverter(12),
    maxHeight: utils.remConverter(117),
    marginBottom: utils.remConverter(16)
})

export const title = css({
    fontSize: utils.remConverter(14),
    fontWeight: 600,
    color: colors.Zeb_Solid_White
})

export const description = css({
    fontSize: utils.remConverter(12),
    fontWeight: 400,
    color: colors.Zeb_Solid_White
})

export const textContainer = css({
    display: "flex",
    flexDirection: "column",
    gap: utils.remConverter(8)
})