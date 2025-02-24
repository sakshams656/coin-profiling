import { css } from "@emotion/react";
import { colors } from "zebpay-ui";

export const form = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
  width: "100%",
  "@media (max-width: 48rem)": {
    gap: "0.5rem",
  },
});

export const inputButtonGap = css({
  width: "100%",
});

export const errorMessageContainer = css({
  height: "1.5rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  "@media (max-width: 48rem)": {
    height: "1.25rem",
  },
});

export const errorMessage = css({
  color: colors.Zeb_Solid_Red,
  fontSize: "0.875rem",
  marginTop: "0.25rem",
  "@media (max-width: 48rem)": {
    fontSize: "0.75rem",
  },
});

export const inputContainer = css({
  width: "100%",
  "@media (max-width: 48rem)": {
    width: "95%",
  },
});