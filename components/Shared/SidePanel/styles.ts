import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui";

export const resetButton = css({
  fontFamily: "Lato",
  fontSize: utils.remConverter(14),
  fontWeight: "700",
  paddingLeft: utils.remConverter(12),
  paddingRight: utils.remConverter(12),
  borderRadius: utils.remConverter(8),
  border: `${utils.remConverter(1)} solid`,
  color: "#C2C2DD",
  cursor: "pointer",
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  "@media (max-width: 75rem)": {
    paddingLeft: utils.remConverter(8),
    paddingRight: utils.remConverter(8),
  },
  "@media (max-width: 48rem)": {
    paddingLeft: utils.remConverter(8),
    paddingRight: utils.remConverter(8),
  },
});

export const filterStyle = css({
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
});

export const accordionWrapper = css({
  width: "90%",
  margin: "0 auto",
  marginBottom: utils.remConverter(12),
  border: "none",
});

export const buttonWrapper = css({
  position: "absolute",
  bottom: "20px",
  right: "30px",
  display: "flex",
  gap: "10px",
});

export const iconAccordian = css({
  marginRight: utils.remConverter(12),
});

export const sidePanelStyle = css({
  zIndex: 1,
});

export const accordionTitleStyle = (isOpen: boolean) => css`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  color: ${isOpen ? colors.Zeb_Solid_White : colors.Zeb_Solid_Light_Blue};
`;

export const customDateRangePickerStyle = (dateRange: string | null) => css`
  margin-top: ${utils.remConverter(-8)};
  padding: ${utils.remConverter(16)};
  background-color: ${colors.Zeb_Solid_BG_Blue};
  border-radius: ${utils.remConverter(4)};
  display: ${dateRange === "Custom" ? "block" : "none"};
`;