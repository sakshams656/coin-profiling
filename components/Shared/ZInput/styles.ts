import { css } from "@emotion/react";

import { colors, typography, utils } from "zebpay-ui";

export const invalidFormLabel = (isMobile?: boolean) =>
  css({
    color: isMobile
      ? `${colors.Zeb_Solid_Light_Red}!important`
      : `${colors.Zeb_Solid_Red}!important`
  });
export const invalidInputGroup = (isMobile?: boolean) =>
  css({
    borderColor: isMobile ? colors.Zeb_Solid_Light_Red : colors.Zeb_Solid_Red,
    boxShadow: isMobile
      ? colors.Zeb_Effects_Soft_Shadow
      : colors.Zeb_Effects_Shadow_Hover
  });
export const invalidInfoText = (isMobile?: boolean) =>
  css({
    color: isMobile
      ? `${colors.Zeb_Solid_Light_Red}!important`
      : `${colors.Zeb_Solid_Red}!important`
  });

export const formGroup = css({
  marginBottom: `${utils.remConverter(4)}`
});

export const formLabel = (isMobile?: boolean) =>
  css({
    ...typography.B4_14_regular,
    color: `${
      isMobile ? colors.Zeb_Solid_Dark_Grey : colors.Zeb_Solid_Light_Blue
    }!important`,
    marginBottom: `${utils.remConverter(4)}`
  });

export const activeFormLabel = (isMobile?: boolean) =>
  css({
    color: isMobile
      ? colors.Zeb_Solid_Dark_Blue
      : `${colors.Zeb_Solid_White}!important`
  });

export const inputGroup = css({
  border: "1px solid transparent",
  borderRadius: "8px",
  position: "relative"
});

export const focusedInputGroup = (isMobile?: boolean) =>
  css({
    borderColor: colors.Zeb_Solid_Bright_Blue,
    boxShadow: isMobile
      ? colors.Zeb_Effects_Soft_Shadow
      : colors.Zeb_Effects_Shadow_Hover
  });

export const formControl = (isMobile?: boolean) => {
  return css({
    padding: `${utils.remConverter(8)} ${utils.remConverter(12)}`,
    background: `${
      isMobile ? colors.Zeb_Solid_Light_Blue_01 : colors.Zeb_Solid_Dark_Blue
    }!important`,
    borderRadius: "0.5rem",
    border: "none",
    ...typography.B4_14_semibold,
    color: `${
      isMobile ? colors.Zeb_Solid_Dark_Blue : colors.Zeb_Solid_White
    }!important`,
    minHeight: `${utils.remConverter(40)}`,
    ":focus": {
      boxShadow: "none",
      outline: "none"
    },
    "::placeholder": {
      ...typography.B4_14_regular,
      color: isMobile ? colors.Zeb_Solid_Grey_02 : colors.Zeb_Solid_Light_Blue
    }
  });
};

export const textAreaControl = css({
  "::-webkit-scrollbar": {
    width: "0.75rem"
  },

  "::-webkit-scrollbar-track": {
    backgroundColor: colors.Zeb_Solid_Dark_Blue,
    height: "50%",
    margin: `${utils.remConverter(6)} 0`
  },

  "::-webkit-scrollbar-thumb": {
    borderRadius: utils.remConverter(30),
    backgroundColor: colors.Zeb_Solid_Dark_Grey,
    border: `0.25rem solid ${colors.Zeb_Solid_Dark_Blue}`
  },
  resize: "none"
});

export const formControlRounded = css({
  // important used to override bootstrap mixin
  borderRadius: "0.5rem !important"
});

export const inputGroupText = (isMobile?: boolean) => {
  return css({
    padding: `${utils.remConverter(4)} ${utils.remConverter(12)}`,
    background: isMobile
      ? colors.Zeb_Solid_Light_Blue_01
      : colors.Zeb_Solid_Dark_Blue,
    borderRadius: "0 8px 8px 0",
    border: "1px solid transparent",
    ...typography.B4_14_semibold,
    color: isMobile ? colors.Zeb_Solid_Grey_02 : colors.Zeb_Solid_White
  });
};
export const touchedAppendix = (isMobile?: boolean) => {
  return css({ color: isMobile ? colors.Zeb_Solid_Dark_Blue : "" });
};
export const infoContainer = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});

export const infoText = css({
  ...typography.B4_14_regular,
  color: colors.Zeb_Solid_Light_Blue
});

export const infoCta = css({
  marginLeft: "auto"
});

export const inputIcon = css({
  height: "1rem",
  width: "1rem",
  position: "absolute",
  right: utils.remConverter(12),
  top: utils.remConverter(12)
});

export const labelContainer = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});
