/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { typography, colors } from "zebpay-ui";
import { css } from "@emotion/react";

export const ButtonStyle = css({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "160px",
  height: "auto",
  background: "none",
  border: "none",
  cursor: "pointer",

  "@media (max-width: 768px)": {
    maxWidth: "130px",
  },


  "@media (max-width: 480px)": {
    maxWidth: "110px",
  },
});

export const image = css({
  height: "2.rem",
  width: "100%",
  maxWidth: "100%",

  "@media (max-width: 768px)": {
    height: "30px",
  },

  "@media (max-width: 480px)": {
    height: "24px",
  },
});

export const tradingBanner = css({
    display: "flex",
    width: "100%",
    // height:"60%",
    padding: "0.75rem",
    flexDirection: "column",
    alignItems: "flex-start",
    // gap: "0.25rem",
    flexShrink: "0",
    borderRadius: "8px",
    background: colors.Zeb_Gradient_Dark_Blue,
    position: "relative",
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

  export const frame = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // gap: "1.25rem",
    alignSelf: "stretch",
    "@media (max-width: 768px)": {
      gap: "0.75rem",
    },
  });
  
  export const anotherFrame = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    gap: "1rem",
    alignSelf: "stretch",
    "@media (max-width: 768px)": {
      gap: "0.75rem",
    },
  });


  export const zebpayImageDiv = css({
    display: "flex",
    width: "4rem",
    height: "4rem",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 768px)": {
      width: "3rem",
      height: "3rem",
    },
  });
  
  export const textWrapper = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    // gap: "0.25rem",
    alignSelf: "stretch",
    "@media (max-width: 768px)": {
      gap: "0.125rem",
    },
  });


  export const title = css({
    alignSelf: "stretch",
    color: "var(--Zeb_Solid-White, #FFF)",
    fontFeatureSettings: "'liga' off, 'clig' off",
    // fontFamily: "Lato",
    // fontSize: "1rem",
    // fontStyle: "normal",
    // fontWeight: "700",
    lineHeight: "1.75rem", // 175%
    letterSpacing: "0.05rem",
    "@media (max-width: 768px)": {
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
    },
  });
  
  export const subtitle = css({
    alignSelf: "stretch",
    color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #C0C0EE))",
  
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: "Lato",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.5rem", // 171.429%
    letterSpacing: "0.025rem",
    "@media (max-width: 768px)": {
      fontSize: "0.75rem",
      lineHeight: "1.25rem",
    },
  });
  
  export const buttonGroup = css({
    display: "flex",
    justifyContent: "space",
    // alignItems: "flex-start",
    gap: "0.75rem",
    alignSelf: "stretch",
    "@media (max-width: 768px)": {
      gap: "0.5rem",
    },
  });

  
