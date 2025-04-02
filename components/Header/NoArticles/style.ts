/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui"; 

export const noResultsContainer = css({
  textAlign: "center",
  color: colors.Zeb_Solid_White,
  padding: utils.remConverter(20),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: utils.remConverter(20),
});

export const noResultsTitle = css({
  fontSize: utils.remConverter(22),
});

export const noResultsSubtitle = css({
  fontSize: utils.remConverter(16),
  color: colors.Zeb_Solid_Light_Blue,
});
