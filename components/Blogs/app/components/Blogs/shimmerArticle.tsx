/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import SkeletonWrapper from "../SkeletonWrapper/index";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import { utils } from "zebpay-ui";
// interface ArticleCardProps {
//   title: string | JSX.Element;
//   link: string;
//   imageUrl: string | JSX.Element;
//   date: string | JSX.Element;
//   readingTime: string | JSX.Element;
//   domain: string | JSX.Element;
// }

const CardContainer = styled.div`
  display: flex;
  padding: 0.75rem;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  flex: 1 0 0;
  
`;

const InsideFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

const CardImage = styled.div`
  
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
 
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const CardInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const DomainName = styled.div`
  display: flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
`;

const Title = styled.a`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  overflow: hidden;
`;

const Description = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  flex: 1 0 0;
  
`;

const CardInfoFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  align-self: stretch;
`;

const ReadingTime = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ReadingTimeIcon = styled.div`
  width: 12px;
  height: 12px;
`;

const ReadingTimeText = styled.div`
  
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const DateIcon = styled.div`
  width: 12px;
  height: 12px;
`;

const DateText = styled.div`
  
`;

const Shimmer: React.FC = () => {
 
  const [loading, setLoading] = useState(true);

  return (
    <CardContainer>
      <InsideFrame>
        <CardImage>
          <SkeletonWrapper isLoading={loading} height={108} width={205} />
        </CardImage>
        <CardInfo>
          <CardInfoHeader>
            <DomainName>
              <SkeletonWrapper isLoading={loading} height={22} width={120} />
            </DomainName>
            <Title>
              <SkeletonWrapper isLoading={loading} height={24} width={205} />
            </Title>
            <Description>
              <SkeletonWrapper isLoading={loading} height={36} width={205} />
            </Description>
          </CardInfoHeader>
          <CardInfoFooter>
            <ReadingTime>
              <SkeletonWrapper isLoading={loading} height={18} width={80} />
            </ReadingTime>

            <Date>
              <SkeletonWrapper isLoading={loading} height={18} width={80} />
            </Date>
          </CardInfoFooter>
        </CardInfo>
      </InsideFrame>
    </CardContainer>
  );
};

export default Shimmer;
