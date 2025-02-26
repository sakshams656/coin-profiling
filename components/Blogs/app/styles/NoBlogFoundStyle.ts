/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { typography, colors } from "zebpay-ui";
import { css } from "@emotion/react";

export const Main = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "100%",
    minHeight: "50vh",
    textAlign: "center",
    padding: "2rem",
    color: colors.Zeb_Solid_White,
  });
  
  export const Heading = css({
    ...typography.h3,
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "48px",
    letterSpacing: "0.8px",
    marginBottom: "1rem",
  });

  export const subHeading = css({
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "0.4px",
    textAlign: "center",
    color: colors.Zeb_Solid_Light_Blue,
    marginBottom: "3rem",
  });
  
  
