import { css } from "@emotion/react";
import { utils } from "zebpay-ui";

export const cryptoOption = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: utils.remConverter(8),
});

export const cryptoIcon = css({
  width: utils.remConverter(24), 
  height: utils.remConverter(24),
});

export const cryptoText = css({
  fontSize: utils.remConverter(16), 
  color: "white",
});
