/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors, utils } from "zebpay-ui"; 

export const noResultsContainer = css`
  text-align: center;
  color: ${colors.Zeb_Solid_White};
  padding: ${utils.remConverter(20)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${utils.remConverter(20)};
`;

export const noResultsTitle = css`
  font-size: ${utils.remConverter(22)};
`;

export const noResultsSubtitle = css`
  font-size: ${utils.remConverter(16)};
  color: ${colors.Zeb_Solid_Light_Blue}; 
`;
