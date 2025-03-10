/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { typography, colors, utils } from "zebpay-ui";
import { css } from "@emotion/react";

export const Main = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  min-height: ${utils.remConverter(300)};
  text-align: center;
  padding: ${utils.remConverter(32)};
  color: ${colors.Zeb_Solid_White};
`;

export const Heading = css`
  ${typography.h3};
  font-family: "Lato";
  font-weight: 700;
  font-size: ${utils.remConverter(32)};
  line-height: ${utils.remConverter(48)};
  letter-spacing: ${utils.remConverter(0.8)};
  margin-bottom: ${utils.remConverter(16)};
`;

export const subHeading = css`
  font-family: "Lato";
  font-weight: 400;
  font-size: ${utils.remConverter(20)};
  line-height: ${utils.remConverter(30)};
  letter-spacing: ${utils.remConverter(0.4)};
  text-align: center;
  color: ${colors.Zeb_Solid_Light_Blue};
  margin-bottom: ${utils.remConverter(48)};
`;
