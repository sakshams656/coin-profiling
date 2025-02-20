import { css, CSSObject } from "@emotion/react";

import { colors, typography, utils, ZIndexLevels } from "@styles/shared";

const toRem4 = "0.25rem";
const toRem20 = utils.remConverter(20);
const toRem30 = utils.remConverter(30);
const sidebarPaddingVertical = toRem20;
export const SIDEBAR_PADDING_HORIZONTAL = toRem30;

const scrollbarContainer: CSSObject = {
  overflowY: "auto",
  width: `calc(100% - ${toRem4})`,

  "&::-webkit-scrollbar": {
    width: toRem4
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: colors.Zeb_Solid_Dark_Blue,
    height: "50%",
    margin: "0.5rem 0"
  },

  "&::-webkit-scrollbar-thumb": {
    borderRadius: utils.remConverter(18),
    backgroundColor: colors.Zeb_Solid_Dark_Grey
  }
};

export const container = css({
  marginLeft: utils.remConverter(25),
  marginRight: utils.remConverter(25),
  height: "100%",
  display: "flex",
  flexDirection: "column"
});

export const sidebarContainer = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  padding: `${sidebarPaddingVertical} ${SIDEBAR_PADDING_HORIZONTAL}`,
  "&::-webkit-scrollbar": {
    display: "none"
  }
});

export const sidebarContainerPaddingCleaner = css({
  width: `calc(100% + 2 * ${SIDEBAR_PADDING_HORIZONTAL})`,
  margin: `-${sidebarPaddingVertical} -${SIDEBAR_PADDING_HORIZONTAL}`
});

export const containerWithRelativePosition = css({
  position: "relative"
});

export const containerWithBottomButtons = css({
  justifyContent: "space-between"
});

export const containerFullWidth = css({
  width: "100%"
});

export const sidebarHeader = (theme?: "light" | "dark", isMobile?: boolean) =>
  css({
    display: "flex",
    alignItems: "center",
    width: `calc(100% + 2 * ${SIDEBAR_PADDING_HORIZONTAL})`,
    margin: `0 -${SIDEBAR_PADDING_HORIZONTAL}`,
    padding: `0 ${SIDEBAR_PADDING_HORIZONTAL}`,
    ...(isMobile ? typography.H5_20_bold : typography.H4_28_bold),
    color:
      theme === "light" ? colors.Zeb_Solid_Dark_Blue : colors.Zeb_Solid_White,
    justifyContent: isMobile ? "center" : undefined
  });

export const sidebarHeaderWithMargin = css({
  paddingBottom: utils.remConverter(40)
});

export const sidebarHeaderWithShadow = (isMobile: boolean) =>
  css({
    boxShadow: isMobile
      ? colors.Zeb_Effects_Soft_Shadow
      : colors.Zeb_Effects_Shadow_Hover,
    zIndex: utils.getZIndex(ZIndexLevels.content)
  });

export const sidebarFooter = (
  isMobile: boolean,
  withShadow?: boolean,
  withBottomMargin = true
) => {
  const marginBottom = withBottomMargin ? sidebarPaddingVertical : 0;
  return css({
    display: "flex",
    alignSelf: "flex-end",
    width: `calc(100% + 2 * ${SIDEBAR_PADDING_HORIZONTAL})`,
    margin: `0 -${SIDEBAR_PADDING_HORIZONTAL} -${marginBottom} -${SIDEBAR_PADDING_HORIZONTAL}`,
    padding: `1rem ${SIDEBAR_PADDING_HORIZONTAL}`,
    boxShadow: withShadow
      ? isMobile
        ? colors.Zeb_Effects_Shadow_Light
        : colors.Zeb_Effects_Shadow_M_Drawer
      : "unset",
    marginBottom: isMobile ? 0 : ""
  });
};

export const sidebarContentFillSpace = css({
  flex: 1,
  width: "100%",
  overflow: "auto"
});

export const sidebarContentWithScroll = css({
  width: "100%",
  overflow: "auto"
});

export const innerContainer = css({
  height: "100%"
});

export const card = css({
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  borderRadius: "0.5rem",
  display: "flex",
  padding: "1rem",
  justifyContent: "space-between"
});

export const tabContainer = css({
  display: "flex",
  justifyContent: "space-between",
  height: "100vh",
  flexGrow: 100
});

export const iconContainer = (isMobile?: boolean, theme?: "light" | "dark") =>
  css({
    cursor: "pointer",
    display: "flex",
    width: utils.remConverter(36),
    height: utils.remConverter(36),
    borderRadius: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      theme === "light" ? colors.Zeb_Solid_White : colors.Zeb_Solid_Dark_Blue,
    position: isMobile ? "absolute" : "unset",
    left: utils.remConverter(10)
  });

export const button = css({
  ...typography.C2_16,
  minWidth: utils.remConverter(211),
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem"
});

export const sidebarElements = css({
  overflowY: "scroll",
  width: "100%",

  "@supports (scrollbar-width: none)": {
    scrollbarWidth: "none"
  },

  "@supports not (scrollbar-width: none)": {
    "&::-webkit-scrollbar": {
      display: "none"
    }
  }
});

export const sidebarElementsScrollbar = css({
  ...scrollbarContainer
});

export const sidebarElementsScrollbarBGBlue = (isMobile: boolean) =>
  css(
    isMobile
      ? {
          "&::-webkit-scrollbar": {
            display: "none"
          }
        }
      : {
          ...scrollbarContainer,
          "&::-webkit-scrollbar-track": {
            backgroundColor: colors.Zeb_Solid_BG_Blue
          }
        }
  );
