/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { typography, colors } from "zebpay-ui";
import { css } from "@emotion/react";

export const ErrorText = css({
  color: "#ea6161",
  fontSize: "14px",
  position: "absolute",
  bottom: "-26px",
  left: "0",
});

export const ButtonStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "20px",
  "@media (max-width: 800px)": {
    height: "30px",
    backgroundColor: "#ffffff",
  },
});

export const Subscribed = css({
    flexShrink: 0,
    marginLeft: "auto",
    display: "flex",
  });

  export const Subscribe = (isValid: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: ${isValid ? colors.Zeb_Gradient_Blue_01 : "#C2C2DD"} !important;
    cursor: ${isValid ? "pointer" : "not-allowed"};
  }

  @media (max-width: 768px) {
    max-width: 130px;
  }

  @media (max-width: 480px) {
    max-width: 110px;
  }
`;



  export const newsletter = css({
    height: "10vh",
    display: "flex",
    // width: "inherit",
    // height: "8.5rem",
    padding: "0.75rem",
    alignItems: "center",
    gap: "0.25rem",
    flex: "1 0 0",
    borderRadius: "8px",
    background: colors.Zeb_Solid_BG_Blue,
    "@media (max-width: 768px)": {
      height: "auto",
      padding: "1rem",
    },
    "@media (max-width: 480px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
    },
  });
  
  export const newsChild = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: "1 0 0",
    alignSelf: "stretch",
  
    "@media (max-width: 768px)": {
      height: "auto",
      padding: "1rem",
    },
    "@media (max-width: 480px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
    },
  });


  export const newsHeader = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.5rem",
    alignSelf: "stretch",
  });
  
  export const heading = css({
    color: colors.Zeb_Solid_White,
    fontFeatureSettings: '"clig" off, "liga" off',
    fontFamily: "Lato",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "1.75rem",
    letterSpacing: "0.05rem",
  });
  
  export const MailIcon = styled.div`
    display: flex;
    width: 5rem;
    height: 5rem;
    // padding: 1.0625rem 0.234rem;
    justify-content: center;
    align-items: center;
  `;
  
  export const quote = css({
    alignSelf: "stretch",
    color: colors.Zeb_Solid_Light_Blue,
    fontFeatureSettings: '"clig" off, "liga" off',
    fontFamily: "Lato",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.5rem",
    letterSpacing: "0.025rem",
    // margin:"0.rem"
  });
  
  export const Form = styled.div`
    display: flex;
    // width:max;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    align-self: stretch;
    margin-bottom: 3.5rem;
    padding-top: 1rem;
    "@media (max-width: 768px)": {
      height: "auto",
      padding: "1rem",
    },
    "@media (max-width: 480px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
    },
  `;
  
