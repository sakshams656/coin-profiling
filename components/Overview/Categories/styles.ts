import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui";

export const cryptoCategoriesContainer = css({
  width: "100%",
  backgroundColor: colors.Zeb_Solid_Dark_Blue,
  borderRadius: utils.remConverter(8),
  padding: utils.remConverter(24),
  marginTop: utils.remConverter(16),
  boxShadow: `${utils.remConverter(0)} ${utils.remConverter(4)} ${utils.remConverter(8)} ${utils.remConverter(0)} rgba(0, 0, 0, 0.1)`,
});

export const title = css({
  fontSize: utils.remConverter(18),
  fontWeight: 700,
  color: colors.Zeb_Solid_White,
  marginBottom: utils.remConverter(16),
});

export const categoryButtons = css({
  display: "flex",
  whiteSpace: "nowrap",
  gap: utils.remConverter(8),
  marginBottom: utils.remConverter(16),
  marginTop: utils.remConverter(16),
});

export const cryptoCardsContainer = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: utils.remConverter(20),
});

export const cryptoCard = css({
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  borderRadius: utils.remConverter(12),
  padding: utils.remConverter(16),
  alignItems: "flex-start",
});

export const cryptoName = css({
  fontSize: utils.remConverter(14),
  color: colors.Zeb_Solid_Light_Blue,
  fontWeight: 400,
  marginTop: utils.remConverter(8),
  marginBottom: utils.remConverter(4),
});

export const cryptoPrice = css({
  fontSize: utils.remConverter(14),
  color: colors.Zeb_Solid_White,
  fontWeight: 600,
  marginBottom: utils.remConverter(8),
});

export const cryptoChange = css({
  fontSize: utils.remConverter(14),
  padding: `${utils.remConverter(4)} ${utils.remConverter(0)}`,
  borderRadius: utils.remConverter(8),
});

export const viewMoreButton = css({
  backgroundColor: colors.Zeb_Solid_Dark_Blue,
  border: `${utils.remConverter(1)} solid ${colors.Zeb_Solid_Bright_Blue}`,
  borderRadius: utils.remConverter(8),
  color: colors.Zeb_Solid_Bright_Blue,
  padding: `${utils.remConverter(8)} ${utils.remConverter(8)}`,
  cursor: "pointer",
  marginTop: utils.remConverter(16),
  height: utils.remConverter(36),
});