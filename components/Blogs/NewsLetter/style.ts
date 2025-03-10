import styled from "@emotion/styled";
import { typography, colors, utils } from "zebpay-ui";
import { css } from "@emotion/react";

export const ErrorText = css`
  color: #ea6161;
  font-size: ${utils.remConverter(14)};
  position: absolute;
  bottom: ${utils.remConverter(355)};
  left: ${utils.remConverter(1122)};
`;

export const ButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${utils.remConverter(20)};

  @media (max-width: 800px) {
    height: ${utils.remConverter(30)};
    background-color: #ffffff;
  }
`;

export const Subscribed = css`
  flex-shrink: 0;
  margin-left: auto;
  display: flex;
`;

export const Subscribe = (isValid: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: ${utils.remConverter(130)};
  }

  @media (max-width: 480px) {
    max-width: ${utils.remConverter(110)};
  }
`;

export const newsletter = css`
  height: 10vh;
  padding: ${utils.remConverter(12)};
  align-items: center;
  gap: ${utils.remConverter(4)};
  flex: 1 0 0;
  border-radius: ${utils.remConverter(8)};
  background: ${colors.Zeb_Solid_BG_Blue};

  @media (max-width: 768px) {
    height: 10vh;
    padding: ${utils.remConverter(16)};
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: ${utils.remConverter(8)};
  }
`;

export const newsChild = css`
  display: flex;
  height: 20%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;

  @media (max-width: 768px) {
    height: auto;
    padding: ${utils.remConverter(16)};
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: ${utils.remConverter(8)};
  }
`;

export const newsHeader = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

export const heading = css`
  color: ${colors.Zeb_Solid_White};
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: ${utils.remConverter(16)};
  font-style: normal;
  font-weight: 700;
  line-height: ${utils.remConverter(28)};
  letter-spacing: ${utils.remConverter(0.8)};
`;

export const MailIcon = styled.div`
  display: flex;
  width: ${utils.remConverter(72)};
  height: ${utils.remConverter(72)};
  justify-content: center;
  align-items: center;
`;

export const quote = css`
  align-self: stretch;
  color: ${colors.Zeb_Solid_Light_Blue};
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: ${utils.remConverter(14)};
  font-style: normal;
  font-weight: 400;
  line-height: ${utils.remConverter(24)};
  letter-spacing: ${utils.remConverter(0.4)};
`;

export const Form = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${utils.remConverter(8)};
  margin-bottom: ${utils.remConverter(56)};
  padding-top: ${utils.remConverter(16)};

  @media (max-width: 768px) {
    height: auto;
    padding: ${utils.remConverter(16)};
    margin-bottom: ${utils.remConverter(16)} !important;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: ${utils.remConverter(8)};
    margin-bottom: ${utils.remConverter(16)} !important;
  }
`;
