import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui";

export const cryptoCategoriesContainer = css({
    width: "100%",
    backgroundColor: colors.Zeb_Solid_Dark_Blue,
    borderRadius: "0.5rem",
    padding: "1.5rem",
    marginTop: "1rem",
    boxShadow: "0rem 0.25rem 0.5rem 0rem rgba(0, 0, 0, 0.1)",
  });
  
export const title = css({
    fontSize: utils.remConverter(18),
    fontWeight: 700,
    color: colors.Zeb_Solid_White,
    marginBottom: "1rem",
  });
  
export const categoryButtons = css({
    display: "flex",
    whiteSpace: "nowrap",
    gap: "0.5rem",
    marginBottom: "1rem",
    marginTop: "1rem",
  });
  
export const cryptoCardsContainer = css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.25rem",
  });
  
export const cryptoCard = css({
    backgroundColor: colors.Zeb_Solid_BG_Blue,
    borderRadius: "0.75rem",
    padding: "1rem",
    alignItems: "flex-start",
    boxShadow: "0rem 0.25rem 0.5rem 0rem rgba(0, 0, 0, 0.1)",
  });
  
export const cryptoName = css({
    fontSize: utils.remConverter(14),
    color: colors.Zeb_Solid_Light_Blue,
    fontWeight: 400,
    marginTop: "0.5rem",
    marginBottom: "0.25rem",
  });
  
export const cryptoPrice = css({
    fontSize: utils.remConverter(14),
    color: colors.Zeb_Solid_White,
    fontWeight: 600,
    marginBottom: "0.5rem",
  });
  
export const cryptoChange = css({
    fontSize: utils.remConverter(14),
    padding: "0.25rem 0.5rem",
    borderRadius: "0.5rem",
  });
  
export const viewMoreButton = css({
    backgroundColor: colors.Zeb_Solid_Dark_Blue,
    border: `1px solid ${colors.Zeb_Solid_Bright_Blue}`,
    borderRadius: "0.5rem",
    color: colors.Zeb_Solid_Bright_Blue,
    padding: "0rem 0.5rem",
    cursor: "pointer",
    marginTop: "1rem",
  });