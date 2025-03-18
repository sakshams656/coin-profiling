/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";

export const ButtonStyle = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${utils.remConverter(160)};
  height: auto;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: ${utils.remConverter(130)};
  }

  @media (max-width: 480px) {
    max-width: ${utils.remConverter(110)};
  }
`;

export const image = css`
  height: ${utils.remConverter(48)};
  width: 100%;
  max-width: 100%;

  @media (max-width: 768px) {
    height: ${utils.remConverter(30)};
  }

  @media (max-width: 480px) {
    height: ${utils.remConverter(24)};
  }
`;

export const tradingBanner = css`
  display: flex;
  height: auto;
  min-height: ${utils.remConverter(192)};
  padding: ${utils.remConverter(12)};
  flex-direction: column;
  align-items: flex-start;
  border-radius: ${utils.remConverter(8)};
  background: ${colors.Zeb_Gradient_Dark_Blue};

  @media (max-width: 768px) {
    padding: ${utils.remConverter(16)};
    min-height: ${utils.remConverter(160)};
  }

  @media (max-width: 480px) {
    align-items: center;
    min-height: ${utils.remConverter(144)};
  }
`;

export const frame = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  min-height: 100%;
`;

export const anotherFrame = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${utils.remConverter(6)};

  @media (max-width: 768px), (max-width: 480px) {
    gap: ${utils.remConverter(2)};
  }
`;

export const zebpayImageDiv = css`
  display: flex;
  width: clamp(2.5rem, 5vw, 4rem);
  height: clamp(2.5rem, 5vw, 4rem);
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: clamp(2rem, 4vw, 3rem);
    height: clamp(1rem, 3vw, 2rem);
  }

  @media (max-width: 480px) {
    width: clamp(1.8rem, 3.5vw, 2.5rem);
    height: clamp(1rem, 3vw, 2rem);
  }
`;

export const textWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${utils.remConverter(3)};
`;

export const title = css`
  width: 100%;
  color: ${colors.Zeb_Solid_White};
  font-feature-settings: "liga" off, "clig" off;
  font-size: clamp(0.5rem, 1.2vw, 1.25rem);
  line-height: clamp(1.5rem, 2.5vw, 1.75rem);

  @media (max-width: 768px) {
    font-size: ${utils.remConverter(14)};
    line-height: ${utils.remConverter(24)};
  }
`;

export const subtitle = css`
  width: 100%;
  color: ${colors.Zeb_Solid_Light_Blue};
  font-feature-settings: "liga" off, "clig" off;
  font-size: clamp(0.625rem, 1.2vw, 0.9rem);
  line-height: clamp(1rem, 2.2vw, 1.5rem);
  font-weight: 400;
  letter-spacing: ${utils.remConverter(0.4)};

  @media (max-width: 768px) {
    font-size: ${utils.remConverter(12)};
    line-height: ${utils.remConverter(20)};
  }
`;

export const buttonGroup = css`
  display: flex;
  justify-content: center;
  gap: ${utils.remConverter(12)};
  align-self: stretch;

  @media (max-width: 768px) {
    gap: ${utils.remConverter(8)};
    justify-content: center;
  }
`;
