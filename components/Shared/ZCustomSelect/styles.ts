import { css } from "@emotion/react";
import { colors, typography, utils } from "zebpay-ui";

export enum ZIndexLevels {
  layout = "layout",
  content = "content",
  sidePanelUnderlay = "side-panel_underlay",
  sidePanel = "side-panel",
  dropdownLevel1 = "dropdown_level-1",
  dropdownLevel2 = "dropdown_level-2",
  modal = "modal"
}

export const getZIndex = (element: ZIndexLevels): number => {
  const elements = Object.values(ZIndexLevels);
  const zIndex = (elements.indexOf(element) + 1) * 10;
  return zIndex;
};

const toRem8 = "0.5rem";
const toRem12 = utils.remConverter(12);
const toRem16 = utils.remConverter(16);
export const customComponentSelectContainer = css({
  position: "relative"
});

export const formContainer = css({
  display: "flex",
  justifyContent: "stretch",
  alignItems: "stretch",
  position: "relative",
  maxHeight: utils.remConverter(50),
  borderRadius: toRem8,
  border: `1px solid ${colors.Zeb_Solid_Dark_Blue}`
});

export const inputContainer = css({
  position: "relative"
});

export const labelContainer = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

export const label = css({
  marginBottom: utils.remConverter(4),
  ...typography.B4_14_regular,
  color: colors.Zeb_Solid_Light_Blue
});

export const labelFocused = css({
  ...typography.B4_14_semibold
});

export const selectOverlay = css({
  position: "fixed",
  height: "100%",
  width: "100%",
  left: 0,
  background: "transparent",
  zIndex: 0,
  right: 0,
  top: 0,
  bottom: 0
});

export const customComponentSelect = (theme: "light" | "dark") =>
  css({
    padding: "8px 12px",
    background:
      theme === "light" ? colors.Zeb_Transparent_4 : colors.Zeb_Solid_Dark_Blue,
    border:
      theme === "light"
        ? `1px solid ${colors.Zeb_BG_Light_Blue}`
        : "1px solid transparent",
    borderRadius: toRem8,
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box"
  });

export const customSelectSharpLeftCorners = css({
  borderRadius: `0 ${toRem8} ${toRem8} 0`
});

export const customComponentSelectFullWidth = css({
  width: "100%"
});

export const selectWithPointerEvents = css({
  "&:focus": {
    outline: "none",
    boxShadow: "none"
  },
  "&:hover": {
    borderColor: colors.Zeb_Solid_Bright_Blue
  }
});

export const smallCustomComponentSelect = css({
  padding: `${toRem8} 0.75rem`
});

export const focused = css({
  borderColor: colors.Zeb_Solid_Bright_Blue,
  boxShadow: colors.Zeb_Effects_Shadow_Hover
});

export const invalid = css({
  borderColor: colors.Zeb_Solid_Red
});

export const valueComponent = css({
  width: `calc(100% - ${utils.remConverter(22)})`
});

export const valueComponentFixedHeight = css({
  width: "9rem"
});

export const selectIndicatorImg = css({
  fontSize: "20px",
  transition: "0.2s all ease-in-out"
});

export const openSelectIndicatorImg = css({
  transform: "rotate(180deg)"
});

export const customComponentSelectPlaceholder = css({
  ...typography.B3_16_semibold
});

export const customComponentSelectList = (theme: "light" | "dark") =>
  css({
    paddingBottom: utils.remConverter(20),
    background:
      theme === "light" ? colors.Zeb_Solid_White : colors.Zeb_Solid_Dark_Blue,
    borderRadius: toRem8,
    border: `1px solid ${colors.Zeb_Solid_Bright_Blue}`,
    top: "3rem",
    height: 0,
    transition: "opacity ease-in-out 0.5s",
    opacity: 0,
    visibility: "hidden",
    position: "absolute",
    width: "100%",
    zIndex: getZIndex(ZIndexLevels.dropdownLevel1),
    overflow: "hidden"
  });

export const openCustomComponentSelectList = css({
  opacity: 1,
  visibility: "visible",
  height: "auto"
});

export const customComponentOption = (
  theme: "light" | "dark",
  isMobile: boolean,
  isAlternate?: boolean
) =>
  css({
    borderRadius: "0.25rem",
    padding:
      theme === "light"
        ? `${toRem16} ${toRem8} ${toRem16} ${isMobile ? toRem16 : "0"}`
        : toRem8, // TODO: Add Mobile
    margin: `${toRem8} 0`,
    cursor: "pointer",
    position: "relative",
    backgroundColor:
      theme === "light"
        ? isAlternate
          ? colors.Zeb_Transparent_4
          : colors.Zeb_Solid_White
        : undefined,
    "&:hover": {
      background:
        theme === "light"
          ? colors.Zeb_Solid_Light_Blue_01
          : colors.Zeb_Solid_BG_Blue
    }
  });

export const selectedIcon = (isMobile: boolean) =>
  css({
    position: "absolute",
    right: isMobile ? "1.25rem" : "0.5rem",
    top: isMobile ? "calc(50% - 10px)" : "calc(50% - 5px)"
  });

export const input = (theme: "light" | "dark") =>
  css({
    padding: "8px 12px",
    background:
      theme === "light" ? colors.Zeb_Solid_White : colors.Zeb_Solid_Dark_Blue,
    borderTopLeftRadius: toRem8,
    borderBottomLeftRadius: toRem8,
    flexGrow: 2,
    border: "none",
    ...typography.B4_14_semibold,
    color: colors.Zeb_Solid_White,
    ":focus": {
      boxShadow: "none",
      outline: "none"
    },
    "::placeholder": {
      ...typography.B4_14_regular,
      color: colors.Zeb_Solid_Light_Blue
    }
  });

export const invalidText = css({
  ...typography.B4_14_regular,
  color: colors.Zeb_Solid_Red
});

export const searchInputContainer = (theme: "light" | "dark") =>
  css({
    background:
      theme === "light" ? colors.Zeb_Solid_White : colors.Zeb_Solid_Dark_Blue,
    borderRadius: "0.5rem 0.5rem 0 0",
    padding: toRem12,
    position: "sticky",
    top: 0,
    zIndex: getZIndex(ZIndexLevels.dropdownLevel2)
  });

export const searchInput = (theme: "light" | "dark") =>
  css({
    backgroundColor:
      theme === "light"
        ? colors.Zeb_Solid_Light_Blue_01
        : colors.Zeb_Solid_BG_Blue,
    "&::placeholder": {
      color: theme === "light" ? colors.Zeb_Solid_Dark_Blue : undefined
    }
  });

export const searchInputWithBoxShadow = css({
  boxShadow: colors.Zeb_Effects_Shadow_Hover
  // boxShadow: isMobile ? colors.Zeb_Effects_Shadow_Hard : colors.Zeb_Effects_Shadow_Hover,
});

export const selectListContainer = css({
  padding: `0 ${toRem12}`,
  maxHeight: utils.remConverter(364)
});

export const extraMessage = css({
  ...typography.B5_12_regular,
  color: colors.Zeb_Solid_Light_Blue,
  marginTop: "0.25rem"
});

export const valueChangeButton = css({
  ...typography.B4_14_regular,
  cursor: "pointer",
  textAlign: "center",
  background: colors.Zeb_Solid_Dark_Blue,
  borderRadius: utils.remConverter(8),
  color: colors.Zeb_Solid_Light_Blue,
  padding: utils.remConverter(7),
  height: utils.remConverter(40),
  minWidth: utils.remConverter(47),
  alignSelf: "center",
  ":hover": {
    color: colors.Zeb_Solid_Bright_Blue
  }
});

export const tooltip = css({
  zIndex: getZIndex(ZIndexLevels.modal)
});

export const customButton = css({
  ...typography.C3_14,
  color: colors.Zeb_Solid_Bright_Blue,
  cursor: "pointer"
});
