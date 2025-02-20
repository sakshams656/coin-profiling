import { css } from "@emotion/react";
import { utils, mixins } from "zebpay-ui";

export const logo_404 = css({
  height: utils.remConverter(540),
  width: utils.remConverter(1220),
  position: "relative",
  top: utils.remConverter(120),
  right: utils.remConverter(70),
});

export const locationNotFound = css({
  height: utils.remConverter(300),
  width: utils.remConverter(300),
});
export const featureUnavailContent = css([
  mixins.textAlignmentCenter,
  utils.mt(40),
  { width: utils.remConverter(500) },
]);
export const downtimeContent = css([
  mixins.textAlignmentCenter,
  utils.mt(40),
  mixins.flexColumn,
  mixins.flexAlignCenter,
  { gap: utils.remConverter(4) },
]);
