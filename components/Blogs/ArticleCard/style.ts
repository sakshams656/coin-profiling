/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";

export const CardContainer = css`
  display: flex;
  height: 40vh;
  flex-direction: column;
  align-items: center;
  padding: ${utils.remConverter(12)};
  border-radius: ${utils.remConverter(8)};
  background: ${colors.Zeb_Solid_BG_Blue};
  overflow: hidden;
  flex: 1 1 27%;
  max-width: 33%;

  &.hover-active:hover {
    border: ${utils.remConverter(1)} solid ${colors.Zeb_Solid_Bright_Blue};
    box-shadow: 0px ${utils.remConverter(8)} ${utils.remConverter(8)} ${utils.remConverter(-4)} #0c0c1d;
  }

  @media (max-width: ${utils.remConverter(1024)}) {
    flex: 1 1 45%;
    max-width: 45%;
  }

  @media (max-width: ${utils.remConverter(768)}) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

export const InsideFrame = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${utils.remConverter(9.6)};
`;

export const CardImage = css`
  display: flex;
  height: 17vh; 
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: ${utils.remConverter(4)};
  align-self: stretch;
  border-radius: ${utils.remConverter(4)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${utils.remConverter(4)};
  }
`;

export const CardInfo = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${utils.remConverter(11.2)};
  align-self: stretch;
  flex-grow: 1;
  justify-content: space-between;
`;

export const CardInfoHeader = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${utils.remConverter(8)};
  align-self: stretch;
`;

export const DomainName = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${utils.remConverter(4)};
  color: ${colors.Zeb_Solid_Light_Blue};
  border-radius: ${utils.remConverter(4)};
`;

export const Title = css`
  gap: ${utils.remConverter(18)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  color: ${colors.Zeb_Solid_White};
  text-decoration: none;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1;
`;

export const Description = css`
  font-size: ${utils.remConverter(14.4)};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-width: 100%;
  line-height: 1.5;
  color: ${colors.Zeb_Solid_Light_Blue};
`;

export const CardInfoFooter = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${utils.remConverter(9.6)};
  align-self: stretch;
`;

export const ReadingTime = css`
  display: flex;
  align-items: center;
  gap: ${utils.remConverter(6)};
`;

export const ReadingTimeIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${utils.remConverter(12)};
  height: ${utils.remConverter(12)};
`;

export const ReadingTimeText = css`
  color: ${colors.Zeb_Solid_Light_Blue};
  font-size: ${utils.remConverter(14)};
  line-height: 1;
`;

export const Date = css`
  display: flex;
  align-items: center;
  gap: ${utils.remConverter(6)};
`;

export const DateIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateText = css`
  font-size: ${utils.remConverter(14)};
  line-height: 1;
  color: ${colors.Zeb_Solid_Light_Blue};
`;
