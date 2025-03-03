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
  height: "3rem",
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
  // width: "100%",
  height: "auto", // Prevent stretching
  minHeight: "12rem", // Fixed minimum height
  padding: "0.75rem",
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: "8px",
  background: colors.Zeb_Gradient_Dark_Blue,
  
  "@media (max-width: 768px)": {
    padding: "1rem",
    minHeight: "10rem", // Ensure height remains consistent
  },

  "@media (max-width: 480px)": {
    flexDirection: "column",
    alignItems: "center",
    minHeight: "9rem", // Keep height stable
  },
});

export const frame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "stretch",
  minHeight: "100%", // Ensures frame doesn't expand when width decreases
});
  
  export const anotherFrame = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.4rem",
    // alignSelf: "stretch",
    "@media (max-width: 768px)": {
      gap:"0.1rem !important"
    },
  
    "@media (max-width: 480px)": {
      gap:"0.1rem !important"
    },
  });


  export const zebpayImageDiv = css({
    display: "flex",
    width: "clamp(2.5rem, 5vw, 4rem)", // Adjusts between 2.5rem and 4rem
    height: "clamp(2.5rem, 5vw, 4rem)", // Keeps aspect ratio intact
    justifyContent: "center",
    alignItems: "center",
  
    "@media (max-width: 768px)": {
      width: "clamp(2rem, 4vw, 3rem)", // Shrinks at smaller widths
      height: "clamp(1rem, 3vw, 2rem)",
    },
  
    "@media (max-width: 480px)": {
      width: "clamp(1.8rem, 3.5vw, 2.5rem)",
      height: "clamp(1rem, 3vw, 2rem)",
    },
  });
  
  
  export const textWrapper = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    // gap: "0.25rem",
    // alignSelf: "stretch",
    "@media (max-width: 768px)": {
      // gap: "0.125rem",
    },
  });


  export const title = css({
    width:"100%",
    color: "var(--Zeb_Solid-White, #FFF)",
    fontFeatureSettings: "'liga' off, 'clig' off",
    // lineHeight: "1.75rem", // 175%
    letterSpacing: "0.05rem",
    fontSize: "clamp(0.5rem, 1.2vw, 1.25rem)", // Responsive font size
  lineHeight: "clamp(1.5rem, 2.5vw, 1.75rem)", // Dynamic line height
    "@media (max-width: 768px)": {
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
    },
  });
  
  export const subtitle = css({
    width:"100%",
    color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #C0C0EE))",
    fontFeatureSettings: "'liga' off, 'clig' off",
    // fontSize: "0.875rem",
    fontSize: "clamp(0.625rem, 1.2vw, 0.9rem)", // Lower min, higher max
  lineHeight: "clamp(1rem, 2.2vw, 1.5rem)",
    fontStyle: "normal",
    fontWeight: "400",
    // lineHeight: "1.5rem", // 171.429%
    letterSpacing: "0.025rem",
    "@media (max-width: 768px)": {
      fontSize: "0.75rem",
      lineHeight: "1.25rem",
    },
  });
  
 export const buttonGroup = css({
  display: "flex",
  justifyContent: "center", // Center buttons properly
  gap: "0.75rem",
  alignSelf: "stretch",

  "@media (max-width: 768px)": {
    gap: "0.5rem",
    justifyContent: "center",
  },
});

  
