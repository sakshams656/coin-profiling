import { css } from "@emotion/react";
import { utils } from "zebpay-ui";

export const image = css({
  width: utils.remConverter(140),
  height: utils.remConverter(140),
});

export const heading = css({
  color: "#FFFFFF",
  margin: 0,
  fontWeight: 400,
});

export const subHeading = css({
  color: "#C0C0EE",
  margin: 0,
  gap: utils.remConverter(48),
  fontWeight: 400,
});

export const container = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: utils.remConverter(16),
});
