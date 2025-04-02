import { css } from "@emotion/react";
import { utils } from "zebpay-ui";

export const field = css({
  display: "flex",
  flexDirection: "column",
  width: "48%",
  gap: utils.remConverter(8),
  color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee))",
  // fontFeatureSettings: "'liga' off, 'clig' off",
  fontSize: utils.remConverter(14),
  // fontStyle: "normal",
  // fontWeight: 400,
  lineHeight: utils.remConverter(24),
  letterSpacing: utils.remConverter(0.4),
  // marginBottom: utils.remConverter(8.8),
  // marginLeft:"350px",
});

export const heading = (isDropDownOpen: boolean) =>
  css({
    color: isDropDownOpen ? "white" : "#C0C0EE",
  });
