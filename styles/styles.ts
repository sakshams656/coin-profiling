import { css } from "@emotion/react";
import { colors } from "zebpay-ui";

export const main = css({
  fontFamily: "Lato",
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  width: "100%", // Ensure the main container takes full width
  padding: 0, // Remove any default padding
});