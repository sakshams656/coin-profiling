import { css } from "@emotion/react";

import { colors, typography, utils } from "zebpay-ui";

const toRem6 = utils.remConverter(6);
const toRem35 = utils.remConverter(35);

const calendarTile = {
  background: colors.Zeb_Solid_Bright_Blue,
  borderRadius: toRem6,
  color: colors.Zeb_Solid_White
};

const dayHoverStyles = {
  background: `linear-gradient(180deg, ${colors.Zeb_BG_Blue} 50%, ${colors.Zeb_BG_Blue} 50%)`,
  backgroundSize: "100% 90%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
};

const rangeEnds = {
  "&.react-calendar__tile--rangeStart": {
    ...calendarTile
  },
  "&.react-calendar__tile--rangeEnd": {
    ...calendarTile
  }
};

const disabledElement = {
  backgroundColor: "transparent",
  opacity: 0.1
};

export const dateRangePickerContainer = css({
  gap: utils.remConverter(10),
  position: "relative"
});

export const dateRangePickerNavigation = css({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: utils.remConverter(15),
  width: "100%"
});

export const dateRangePickerNavigationBox = css({
  alignItems: "center",
  display: "flex",
  width: "100%"
});

export const dateRangePickerNavigationBoxEnd = css({
  justifyContent: "flex-end"
});

export const dateRangePickerMonthSelected = css({
  ...typography.H5_20_bold,
  color: colors.Zeb_Solid_Light_Blue
});

export const dateRangeSelectList = css({
  maxHeight: "14rem"
});

export const dateRangeSelectListContainer = css({
  minWidth: "8rem",
  paddingBottom: 0
});

export const dateRangeSelectMarginRight = css({
  marginRight: utils.remConverter(2),
  button: {
    background: colors.Zeb_Solid_BG_Blue
  }
});
export const dateRangeSelectBackground = css({
  button: {
    background: colors.Zeb_Solid_BG_Blue
  }
});

export const dateRangeSelectListAlignRight = css({
  maxHeight: "10rem",
  right: 0
});

export const dateRangePickerMonth = css({
  ...typography.B3_16_semibold
});

export const arrowButton = css({
  background: "none",
  border: "none",
  outline: "none"
});

export const monthArrow = css({
  width: utils.remConverter(25)
});

export const monthArrowLeft = css({
  marginRight: toRem35
});

export const monthArrowRight = css({
  marginLeft: toRem35
});

export const dateInput = css({
  cursor: "default",
  width: "100%"
});

export const errorMessage = css({
  ...typography.B4_14_regular,
  color: colors.Zeb_Solid_Red
});

export const dateRangePicker = (positionData?: DOMRect) => {
  const bottom = positionData ? window.innerHeight - positionData.bottom : "0";
  return css({
    position: "absolute",
    bottom: bottom + "px",
    background: colors.Zeb_Solid_Dark_Blue,
    boxShadow: colors.Zeb_Effects_Shadow_Hover,
    border: `1px solid ${colors.Zeb_Solid_Bright_Blue}`,
    borderRadius: "0.5rem",
    padding: "1rem",
    transform: "translateX(-108%)",

    ".react-calendar": {
      background: colors.Zeb_Solid_Dark_Blue,
      border: "none",
      maxWidth: "none"
    },

    ".react-calendar__month-view": {
      height: utils.remConverter(216),
      margin: "0"
    },

    ".react-calendar__navigation__label": {
      ...typography.H5_20_bold,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: colors.Zeb_Solid_Light_Blue
    },

    ".react-calendar__navigation__label__divider": {
      display: "none"
    },

    ".react-calendar__month-view__days__day": {
      ...typography.B5_12_regular,
      color: colors.Zeb_Solid_Light_Blue,
      height: "2rem",
      position: "relative",

      "&:hover": {
        background: colors.Zeb_Solid_Bright_Blue
      }
    },

    ".react-calendar__month-view__weekdays__weekday": {
      ...typography.B5_12_regular,
      opacity: "0.2",
      textTransform: "capitalize",

      "abbr[title]": {
        cursor: "default",
        textDecoration: "none"
      }
    },

    ".react-calendar button:enabled:hover": {
      borderRadius: toRem6
    },

    ".react-calendar__navigation button:enabled:focus": {
      background: colors.Zeb_Solid_BG_Blue
    },

    ".react-calendar__tile": {
      padding: "0"
    },

    ".react-calendar__tile--range": {
      ...dayHoverStyles,
      ...rangeEnds,

      ".react-calendar__tile--now": {
        ...dayHoverStyles
      }
    },

    ".react-calendar__tile--hover": {
      ...dayHoverStyles
    },

    ".react-calendar__tile--now": {
      ...rangeEnds,
      borderRadius: utils.remConverter(6),
      background: colors.Zeb_Solid_BG_Blue,

      "&.react-calendar__tile--range": {
        ...dayHoverStyles,
        ...rangeEnds
      },
      "&.react-calendar__tile--hover": {
        ...dayHoverStyles
      }
    },

    ".react-calendar__viewContainer": {
      gap: utils.remConverter(29),
      margin: "0"
    },

    ".react-calendar--doubleView": {
      width: utils.remConverter(534)
    },

    ".react-calendar__tile:disabled": {
      ...disabledElement
    },

    ".react-calendar__navigation button:disabled": {
      ...disabledElement
    }
  });
};
