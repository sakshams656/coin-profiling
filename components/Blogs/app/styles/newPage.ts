/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { typography, colors } from "zebpay-ui";
import { css } from "@emotion/react";

export const main = css({
  fontFamily: "Lato",
  display: "inline-flex",
  alignItems: "flex-start",
  gap: "1.25rem",
  width: "100%",
  marginTop:"10px",
  padding: "0 2rem",
  height: "calc(100vh - 5.5rem)",
  overflowY:"hidden",
  flexShrink: 0,
  alignSelf: "stretch",
  background: colors.Zeb_Solid_BG_Blue,
  boxShadow: "0px 7px 7px -2px rgba(97, 79, 79, 0.14)",
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
});

export const container = css({
  display: "flex",
  width: "76%",
  height: "100%",
  paddingBottom: "1rem",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "8px",
  background: colors.Zeb_Solid_Dark_Blue,
  "@media (max-width: 768px)": {
    width: "100%",
    // height: "39.75rem",
    height:"100%"
  },
});

export const headerFrame = (isScrolled: boolean, hasFilters: boolean) =>
  css({
    display: "flex",
    paddingTop: "1rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    width: "100%",
    alignSelf: "stretch",
    background: colors.Zeb_Solid_Dark_Blue,
    position: "sticky",
    top: 0,
    borderRadius: "8px",
    ...(isScrolled
      ? {
          paddingBottom: "0.6rem",
          boxShadow: "0px 8px 8px -4px #0C0C1D",
        }
      : hasFilters
      ? {
          paddingBottom: "0.6rem",
          borderBottom: `1px solid #222245`, // Divider
        }
      : {}),
    "@media (max-width: 768px)": {
      gap: "0.5rem",
    },
  });


export const header = css({
  display: "flex",
  justifyContent: "space-between",
  // padding: "0 1rem",
  paddingLeft:"1rem",
  alignItems: "center",
  alignSelf: "stretch",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "0.5rem",
    padding: "0 0.5rem",
  },
});

export const section = css({
  display: "flex",
  // border: "2px solid red", // Outline to see section
  flexWrap: "wrap",
  // height: "39.75rem",
  height:"100%",
  width: "100%",
  padding: "1rem",
  paddingBottom: "1rem",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "0.25rem",
  background: colors.Zeb_Solid_Dark_Blue,
  overflowY: "auto",
  overflowX: "hidden",
  paddingRight: "0.75rem", 

  "&::-webkit-scrollbar": {
    width: "0.25rem",
  },

  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },

  "&::-webkit-scrollbar-thumb": {
    background: colors.Zeb_Solid_Dark_Grey,
    borderRadius: "1.125rem",
  },

  "@media (max-width: 768px)": {
    width: "100%",
    height: "inherit",
  },
});

export const news = css({
  display: "flex",
  width: "auto",
  alignItems: "center",
  gap: "8px",
  color: colors.Zeb_Solid_White,
  ...typography.h6_16_bold,
});

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem; /* 20px */
`;

export const innerCard = css({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
  flexShrink: "0",
  "@media (max-width: 768px)": {
    width: "25%",
    // height: "39.75rem",
    height:"100%"
  },
});

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
    // height: "39.75rem",
    height:"100%"
  },
  // "@media (min-width: 768px)": {
  //   width: "25%;"
  // }
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
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.025rem;
`;

export const InsideSection = css({
  
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  width: "100%",
});

export const topology = css({
  width: "16.75513rem",
  height: "16.39394rem",
  transform: "rotate(44.59deg)",
  position: "absolute",
  right: "-11.12863rem",
  top: "-11rem",
  "@media (max-width: 768px)": {
    width: "12rem",
    height: "12rem",
    right: "-8rem",
    top: "-8rem",
  },
});

export const appButton = css({
  backgroundColor: colors.Zeb_Solid_BG_Blue,
  borderRadius: "0.25rem",
  width: "100%",
  border: "1px solid #A6A6A6",
});

export const button = css({
  height: "2rem",
  flex: "1 0 0",
  "@media (max-width: 768px)": {
    height: "1.75rem",
  },
});

// Button Component
export const Button = styled.button`
  height: 2rem;
  flex: 1 0 0;

  @media (max-width: 768px) {
    height: 1.75rem;
  }
`;

export const headerBelow = css({
  display:"flex",
  paddingLeft:"1rem",
  overflowX:"auto",
  whiteSpace:"nowrap",
  overflowY:"hidden",
  width: "100%",
  scrollbarWidth:"none",
  alignItems:"stretch",
  justifyContent:"space-between",
  paddingRight:"1.1rem"

  
});

export const categoryWrapper = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const selectedCategoriesContainer = css`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap; 
  padding-bottom: 5px;
  // scrollbar-width: thin;
  whiteSpace: "nowrap", 
  overflowX: "auto",
  scrollbarWidth:"none"
`;

export const categoryButton = css`
  display: flex;
  align-items: center;
  background: ${colors.Zeb_Solid_Dark_Grey};
  color: white;
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  scrollbarWidth:"none";
  
`;

export const clockIcon = css`
  margin-right: 5px;
`;

export const categoryText = css`
  flex-grow: 1;
  text-align: center;
`;

export const closeIcon = css`
  margin-left: 5px;
  cursor: pointer;
  flex-grow:1;
`;

