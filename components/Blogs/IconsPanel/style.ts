/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";
import { SidePanel } from "zebpay-ui";

export const StyledSidePanel = styled(SidePanel)`
  background-color: ${colors.Zeb_Solid_Dark_Blue};
  color: ${colors.Zeb_Solid_Black};
  border-radius: ${utils.remConverter(8)};
  padding: ${utils.remConverter(32)};
  font-family: "Lato", Noto-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    max-width: ${utils.remConverter(400)};
    text-align: left;
  }
`;

export const InsidePanel = css`
  color: white;
  font-size: ${utils.remConverter(12)};
  display: flex;
  flex-direction: column;
  gap: ${utils.remConverter(3)};
  padding: ${utils.remConverter(16)} ${utils.remConverter(16)}
    ${utils.remConverter(16)};
    
`;

export const Title = (isDateRangeOpen: boolean) => css`
  font-size: ${utils.remConverter(12)};
  line-height: ${utils.remConverter(18)};
  letter-spacing: ${utils.remConverter(0.4)};
  color: ${isDateRangeOpen ? "white" : colors.Zeb_Solid_Light_Blue};
  font-family: "Lato", "Noto-serif";
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonGroup = css`
  position: absolute;
  bottom: ${utils.remConverter(16)};
  right: ${utils.remConverter(16)};
  display: flex;
  gap: ${utils.remConverter(12)};
  margin-right: ${utils.remConverter(16)};
`;

export const Added = css`
  font-size: ${utils.remConverter(14)};
  color: white;
  margin-left: ${utils.remConverter(8)};
`;

export const filterAndUpdownFrame = css`
  display: flex;
  align-items: center;
  gap: ${utils.remConverter(20)};

  @media (max-width: 768px) {
    gap: ${utils.remConverter(8)};
  }
`;

export const icon = css`
  padding: ${utils.remConverter(8)};
  border-radius: ${utils.remConverter(8)};
  background: ${colors.Zeb_Solid_BG_Blue};
`;

export const AccordionStyle = css`
  marginBottom: ${utils.remConverter(9.6)};
  marginLeft: ${utils.remConverter(16)};
  marginRight: ${utils.remConverter(16)};
`;
