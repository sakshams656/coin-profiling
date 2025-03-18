/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { typography, colors,utils } from "zebpay-ui";
import { css } from "@emotion/react";

export const main = css`
  font-family: Lato;
  display: inline-flex;
  align-items: flex-start;
  gap: ${utils.remConverter(20)};
  width: 100%;
  margin-top: ${utils.remConverter(10)};
  padding: 0 ${utils.remConverter(32)};
  height: calc(100vh - ${utils.remConverter(89.6)});
  overflow-y: hidden;
  flex-shrink: 0;
  align-self: stretch;
  background: ${colors.Zeb_Solid_BG_Blue};
  box-shadow: 0px ${utils.remConverter(7)} ${utils.remConverter(7)} -${utils.remConverter(2)} rgba(97, 79, 79, 0.14);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const container = css`
  display: flex;
  width: 76%;
  height: 100%;
  padding-bottom: ${utils.remConverter(16)};
  flex-direction: column;
  align-items: center;
  border-radius: ${utils.remConverter(8)};
  background: ${colors.Zeb_Solid_Dark_Blue};
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const headerFrame = (isScrolled, hasFilters) => css`
  display: flex;
  padding-top: ${utils.remConverter(16)};
  flex-direction: column;
  align-items: flex-start;
  gap: ${utils.remConverter(16)};
  width: 100%;
  align-self: stretch;
  background: ${colors.Zeb_Solid_Dark_Blue};
  position: sticky;
  top: 0;
  border-radius: ${utils.remConverter(8)};
  
  ${isScrolled
    ? `
      padding-bottom: ${utils.remConverter(9.6)};
      box-shadow: 0px ${utils.remConverter(8)} ${utils.remConverter(8)} -${utils.remConverter(4)} #0C0C1D;
    `
    : hasFilters
    ? `
      padding-bottom: ${utils.remConverter(9.6)};
      border-bottom: ${utils.remConverter(1)} solid #222245;
    `
    : ''}
  
  @media (max-width: 768px) {
    gap: ${utils.remConverter(8)};
  }
`;


export const header = css`
  display: flex;
  justify-content: space-between;
  padding-left: ${utils.remConverter(16)};
  align-items: center;
  align-self: stretch;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${utils.remConverter(8)};
    padding: 0 ${utils.remConverter(8)};
  }
`;

export const section = css`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  padding: ${utils.remConverter(16)};
  padding-bottom: ${utils.remConverter(16)};
  flex-direction: column;
  align-items: center;
  border-radius: ${utils.remConverter(4)};
  background: ${colors.Zeb_Solid_Dark_Blue};
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: ${utils.remConverter(12)};
  
  &::-webkit-scrollbar {
    width: ${utils.remConverter(4)};
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${colors.Zeb_Solid_Dark_Grey};
    border-radius: ${utils.remConverter(18)};
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: inherit;
  }
`;

export const news = css`
  display: flex;
  width: auto;
  align-items: center;
  gap: ${utils.remConverter(8)};
  color: ${colors.Zeb_Solid_White};
  ${typography.h6_16_bold};
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: ${utils.remConverter(20)};
`;

export const innerCard = css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: ${utils.remConverter(16)};
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 25%;
    height: 100%;
  }
`;


export const innerDiv = css({
  display: "flex",
  width: "23%",
  height: "100%",
  padding: "1rem",
  fontFamily: "Lato",
  color: colors.Zeb_Solid_White,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  borderRadius: "8px",
  background: colors.Zeb_Solid_Dark_Blue,
  "@media (max-width: 768px)": {
    width: "25%",
    height:"100%"
  },
});

export const NoBlogFound = css({
  width: "100%",
  minHeight: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Email = styled.input`
  flex: 1 0 0;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: ${utils.remConverter(14)};
  font-style: normal;
  font-weight: 400;
  line-height: ${utils.remConverter(24)};
  letter-spacing: ${utils.remConverter(0.4)};
`;

export const InsideSection = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${utils.remConverter(16)};
  width: 100%;
`;

// export const topology = css({
//   width: "16.75513rem",
//   height: "16.39394rem",
//   transform: "rotate(44.59deg)",
//   position: "absolute",
//   right: "-11.12863rem",
//   top: "-11rem",
//   "@media (max-width: 768px)": {
//     width: "12rem",
//     height: "12rem",
//     right: "-8rem",
//     top: "-8rem",
//   },
// });

export const appButton = css`
  background-color: ${colors.Zeb_Solid_BG_Blue};
  border-radius: ${utils.remConverter(4)};
  width: 100%;
  border: ${utils.remConverter(1)} solid #A6A6A6;
`;

export const button = css`
  height: ${utils.remConverter(32)};
  flex: 1 0 0;
  
  @media (max-width: 768px) {
    height: ${utils.remConverter(28)};
  }
`;

export const Button = styled.button`
  height: ${utils.remConverter(32)};
  flex: 1 0 0;
  
  @media (max-width: 768px) {
    height: ${utils.remConverter(28)};
  }
`;

export const headerBelow = css`
  display: flex;
  padding-left: ${utils.remConverter(16)};
  overflow-x: hidden;
  white-space: nowrap;
  overflow-y: hidden;
  width: 100%;
  scrollbar-width: none;
  align-items: stretch;
  justify-content: space-between;
  padding-right: ${utils.remConverter(17.6)};
`;

export const categoryWrapper = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: ${utils.remConverter(10)};
`;

export const selectedCategoriesContainer = css`
  display: flex;
  gap: ${utils.remConverter(10)};
  padding-bottom: ${utils.remConverter(5)};
  overflow: hidden;
  // width:100%;
`;

export const categoryButton = css`
  display: flex;
  align-items: center;
  background: ${colors.Zeb_Solid_Dark_Grey};
  color: white;
  padding: ${utils.remConverter(5)} ${utils.remConverter(12)};
  border-radius: ${utils.remConverter(6)};
  font-size: ${utils.remConverter(14)};
  font-weight: 500;
  border: none;
  cursor: pointer;
  scrollbar-width: none;
`;

export const clockIcon = css`
  margin-right: ${utils.remConverter(5)};
`;

export const categoryText = css`
  flex-grow: 1;
  text-align: center;
`;

export const closeIcon = css`
  margin-left: ${utils.remConverter(5)};
  cursor: pointer;
  flex-grow: 1;
`;
