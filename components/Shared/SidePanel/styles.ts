import { css } from "@emotion/react";
import { colors } from "zebpay-ui";

export const resetButton = css({
    fontFamily: "Lato",
    fontSize: "0.875rem",
    fontWeight: "700",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    borderRadius: "0.5rem",
    border: "0.0625rem solid",
    color: "#C2C2DD",
    cursor: "pointer",
    backgroundColor: colors.Zeb_Solid_BG_Blue,
    "@media (max-width: 75rem)": {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
    "@media (max-width: 48rem)": {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
  });

  export const filterStyle = css({
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  });
  
  export const accordionWrapper = css({
    width: "90%",
    margin: "0 auto",
    marginBottom: "0.75rem",
    border: "none",
  });
  
  export const buttonWrapper = css({
    position: "absolute",
    bottom: "20px",
    right: "30px",
    display: "flex",
    gap: "10px",
  });
  