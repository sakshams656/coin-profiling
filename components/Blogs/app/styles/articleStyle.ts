/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";



export const CardContainer = css`
  display: flex;
  height:36.8vh;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;  // 12px
  border-radius: 0.5rem;  // 8px
  background: ${colors.Zeb_Solid_BG_Blue};
  // height: 272px;  // Fixed height
  overflow: hidden;

  flex: 1 1 27%;  
  max-width: 33%; 
  
  &:hover {
    border: 1px solid ${colors.Zeb_Solid_Bright_Blue};
    box-shadow: 0px 0.5rem 0.5rem -0.25rem #0c0c1d;
  }

  @media (max-width: 1024px) {
    flex: 1 1 45%;
    max-width: 45%;
  }

  @media (max-width: 768px) {
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
  gap: 0.6rem;  // 12px
`;


export const CardImage = css`
  display: flex;
  height: 14vh;  // 108px
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;  // 4px
  align-self: stretch;
  border-radius: 0.25rem;  // 4px

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;  // 4px
  }
`;


export const CardInfo = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;  // 16px
  align-self: stretch;
  flex-grow: 1;  
  justify-content: space-between; 
`;


export const CardInfoHeader = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;  // 8px
  align-self: stretch;
`;


export const DomainName = css`
  display: flex;
  padding: 0.125rem 0.25rem;  // 2px 4px
  justify-content: center;
  align-items: center;
  gap: 0.25rem;  // 4px
  color: ${colors.Zeb_Solid_Light_Blue};
  border-radius: 0.25rem;  // 4px
  background: rgba(192, 192, 238, 0.2);  
`;


export const Title = css`
  height: 18px;
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
  max-width: 40ch;  
  line-height: 1;
`;


export const Description = css`
  font-size:0.9rem;
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
  align-items: center;
  gap: 1.25rem;  // 20px
  align-self: stretch;
  margin-top: auto; 
  // margin-bottom:6rem;
`;


export const ReadingTime = css`
  display: flex;
  align-items: center;
  gap: 0.375rem;  // 6px
`;


export const ReadingTimeIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.75rem;  // 12px
  height: 0.75rem;  // 12px
`;


export const ReadingTimeText = css`
  color: ${colors.Zeb_Solid_Light_Blue};
`;


export const Date = css`
  display: flex;
  align-items: center;
  gap: 0.375rem;  // 6px
`;


export const DateIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.75rem;  // 12px
  height: 0.75rem;  // 12px
`;


export const DateText = css`
  font-size: 0.875rem;  // 14px
  line-height: 1;
  color: ${colors.Zeb_Solid_Light_Blue};
`;
