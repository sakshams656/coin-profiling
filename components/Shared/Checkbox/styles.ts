import { css } from "@emotion/react";
import { colors, typography, utils } from "zebpay-ui";

export const checkboxContainer = css({
  minWidth: utils.remConverter(16),
});

export const labelContainer = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "auto",
  position: "relative",
  cursor: "pointer",
  marginBottom: 0,
  ...typography.B4_14_semibold,
  "&:hover": {
    "input ~ .checkmark": {
      backgroundColor: colors.Zeb_Solid_White,
    },
  },
});

export const disabledLabel = css({
  opacity: 0.5,
  cursor: "not-allowed",
});

export const input = css({
  opacity: 0,
  cursor: "pointer",
  height: 0,
  width: 0,
});
export const checkbox = css({
  height: utils.remConverter(20),
  width: utils.remConverter(20),
});
