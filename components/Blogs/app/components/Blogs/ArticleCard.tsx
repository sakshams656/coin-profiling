/** @jsxImportSource @emotion/react */
import React from "react";
import calendar from "../../images/calendar.svg";
import show from "../../images/show.svg";
import seperator from "../../images/seperator.svg";
import Image from "next/image";

import {
  CardContainer,
  InsideFrame,
  CardImage,
  CardInfo,
  CardInfoHeader,
  DomainName,
  Title,
  Description,
  CardInfoFooter,
  ReadingTime,
  ReadingTimeIcon,
  ReadingTimeText,
  Date,
  DateIcon,
  DateText,
} from "../../styles/articleStyle";

interface ArticleCardProps {
  title: string;
  link: string;
  imageUrl: string;
  date: string;
  totalViews: number;
  category: string;
  description?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  link,
  imageUrl,
  date,
  totalViews,
  category,
  description,
}) => {

  const handleClick = () => window.open(link, "_blank", "noopener,noreferrer");

  return (
    <CardContainer onClick={handleClick} style={{ cursor: "pointer" }}>
      <InsideFrame>
        <CardImage>
          <img src={imageUrl} alt={title} />
        </CardImage>

        <CardInfo>
          <CardInfoHeader>
            <DomainName>{category}</DomainName>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </CardInfoHeader>

          <CardInfoFooter>
            <Date>
              <DateIcon>
                <Image src={calendar.src} alt="Calendar" width={14} height={14} />
              </DateIcon>
              <DateText>{date}</DateText>
            </Date>

            <Image src={seperator.src} alt="Separator" width={16} height={16} />

            <ReadingTime>
              <ReadingTimeIcon>
                <Image src={show.src} alt="Show" width={16} height={16} />
              </ReadingTimeIcon>
              <ReadingTimeText>{totalViews}</ReadingTimeText>
            </ReadingTime>
          </CardInfoFooter>
        </CardInfo>
      </InsideFrame>
    </CardContainer>
  );
};

export default ArticleCard;
