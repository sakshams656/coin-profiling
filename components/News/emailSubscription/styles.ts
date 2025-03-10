import { css } from "@emotion/react";
import { utils } from "zebpay-ui";

export const form = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
  width: "100%",
  "@media (max-width: 48rem)": {
    gap: utils.remConverter(8),
  },
});

export const inputButtonGap = css({
  width: "100%",
  marginBottom: utils.remConverter(16)
});

export const inputContainer = css({
  width: "100%",
  "@media (max-width: 48rem)": {
    width: "95%",
  },
});

export const subButton = css({
    marginBottom: utils.remConverter(16)
});