import { css } from "@emotion/react";
import { colors, typography, utils} from "zebpay-ui"; 

export const container = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    minHeight: "50vh",
    textAlign: "center",
    padding: utils.remConverter(32),
    color: "#ffffff",
})

export const noNewsTitle = css({
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: utils.remConverter(32),
    lineHeight: utils.remConverter(48),
    letterSpacing: utils.remConverter(0.8),
    marginBottom: utils.remConverter(1),
})

export const noNewsHeadline = css({
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: utils.remConverter(20),
    lineHeight: utils.remConverter(30),
    letterSpacing: utils.remConverter(0.4),
    textAlign: "center",
    marginBottom: utils.remConverter(3),
    color: colors.Zeb_Solid_Light_Blue
})