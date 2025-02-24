/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";



export const CardContainer = styled.div`
  display: flex;
  height:39vh;
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



export const InsideFrame = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;  // 12px
`;


export const CardImage = styled.div`
  display: flex;
  height: 6.75rem;  // 108px
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


export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;  // 16px
  align-self: stretch;
  flex-grow: 1;  
  justify-content: space-between; 
`;


export const CardInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;  // 8px
  align-self: stretch;
`;


export const DomainName = styled.div`
  display: flex;
  padding: 0.125rem 0.25rem;  // 2px 4px
  justify-content: center;
  align-items: center;
  gap: 0.25rem;  // 4px
  color: ${colors.Zeb_Solid_Light_Blue};
  border-radius: 0.25rem;  // 4px
  background: rgba(192, 192, 238, 0.2);  
`;


export const Title = styled.div`
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


export const Description = styled.div`
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


export const CardInfoFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;  // 20px
  align-self: stretch;
  margin-top: auto; 
  // margin-bottom:6rem;
`;


export const ReadingTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;  // 6px
`;


export const ReadingTimeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.75rem;  // 12px
  height: 0.75rem;  // 12px
`;


export const ReadingTimeText = styled.div`
  color: ${colors.Zeb_Solid_Light_Blue};
`;


export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;  // 6px
`;


export const DateIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.75rem;  // 12px
  height: 0.75rem;  // 12px
`;


export const DateText = styled.div`
  font-size: 0.875rem;  // 14px
  line-height: 1;
  color: ${colors.Zeb_Solid_Light_Blue};
`;
