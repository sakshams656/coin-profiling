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
  height: "2rem",
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
  height: "auto",
  minHeight: "12rem",
  padding: "0.75rem",
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: "8px",
  background: colors.Zeb_Gradient_Dark_Blue,
  position: "relative",

  "@media (max-width: 768px)": {
    padding: "1rem",
    minHeight: "10rem",
  },

  "@media (max-width: 480px)": {
    flexDirection: "column",
    alignItems: "center",
    minHeight: "9rem",
  },
});

export const frame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "stretch",
  minHeight: "100%",
});

export const anotherFrame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",

  "@media (max-width: 768px)": {
    gap: "0.1rem !important",
  },

  "@media (max-width: 480px)": {
    gap: "0.1rem !important",
  },
});

export const zebpayImageDiv = css({
  display: "flex",
  width: "clamp(2.5rem, 5vw, 4rem)",
  height: "clamp(2.5rem, 5vw, 4rem)",
  justifyContent: "center",
  alignItems: "center",

  "@media (max-width: 768px)": {
    width: "clamp(2rem, 4vw, 3rem)",
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
});

export const title = css({
  width: "100%",
  color: "var(--Zeb_Solid-White, #FFF)",
  fontFeatureSettings: "'liga' off, 'clig' off",
  letterSpacing: "0.05rem",
  fontSize: "clamp(0.5rem, 1.2vw, 1.25rem)",
  lineHeight: "clamp(1.5rem, 2.5vw, 1.75rem)",

  "@media (max-width: 768px)": {
    fontSize: "0.875rem",
    lineHeight: "1.5rem",
  },
});

export const subtitle = css({
  width: "100%",
  color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #C0C0EE))",
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontSize: "clamp(0.625rem, 1.2vw, 0.9rem)",
  lineHeight: "clamp(1rem, 2.2vw, 1.5rem)",
  fontStyle: "normal",
  fontWeight: "400",
  letterSpacing: "0.025rem",

  "@media (max-width: 768px)": {
    fontSize: "0.75rem",
    lineHeight: "1.25rem",
  },
});

export const buttonGroup = css({
  display: "flex",
  justifyContent: "center",
  gap: "0.75rem",
  alignSelf: "stretch",

  "@media (max-width: 768px)": {
    gap: "0.5rem",
    justifyContent: "center",
  },
});
