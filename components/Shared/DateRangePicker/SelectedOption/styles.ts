import { css } from "@emotion/react";

import { colors, typography } from "zebpay-ui";

export const selectedOption = css({
  ...typography.H5_20_bold,
  color: colors.Zeb_Solid_Light_Blue
});

export const selectedOptionOpened = css({
  color: colors.Zeb_Solid_White
});
