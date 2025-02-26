import { css } from "@emotion/react";
import { colors, typography} from "zebpay-ui"; 

export const container = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    minHeight: "50vh",
    textAlign: "center",
    padding: "2rem",
    color: "#ffffff",
})

export const noNewsTitle = css({
    ...typography.h3,
    fontFamily: "Lato",
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "48px",
    letterSpacing: "0.8px",
    marginBottom: "1rem",
})

export const noNewsHeadline = css({
    fontFamily: "Lato",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "0.4px",
    textAlign: "center",
    marginBottom: "3rem",
    color: colors.Zeb_Solid_Light_Blue
})