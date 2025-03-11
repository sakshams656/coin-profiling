import { css } from "@emotion/react";
import { utils } from "zebpay-ui";

export const text = (showError: boolean, focus: boolean) =>
  css({
    color: showError ? "#EA6161" : focus ? "white" : "#C0C0EE",
  });

export const warning = css({
  color: "#EA6161",
  display: "block",
});

export const field = css({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: utils.remConverter(8),
  color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee))",
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: "Lato",
  fontSize: utils.remConverter(14),
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: utils.remConverter(24),
  letterSpacing: utils.remConverter(0.4),
  marginBottom: utils.remConverter(8.8),
});
