/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";
import AssetsImg from "@public/images";

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
    <div css={CardContainer} onClick={handleClick} style={{ cursor: "pointer" }}>
      <div css={InsideFrame}>
        <div css={CardImage}>
          <img src={imageUrl} alt={title} />
        </div>

        <div css={CardInfo}>
          <div css={CardInfoHeader}>
            <div css={DomainName}>{category}</div>
            <div css={Title}>{title}</div>
            {description && <div css={Description}>{description}</div>}
          </div>

          <div css={CardInfoFooter}>
            <div css={Date}>
              <div css={DateIcon}>
                <Image src={AssetsImg.ic_calendar} alt="Calendar" width={14} height={14} />
              </div>
              <div css={DateText}>{date}</div>
            </div>

            <Image src={AssetsImg.ic_seperator} alt="Separator" width={16} height={16} />

            <div css={ReadingTime}>
              <div css={ReadingTimeIcon}>
                <Image src={AssetsImg.ic_views} alt="Show" width={16} height={16} />
              </div>
              <div css={ReadingTimeText}>{totalViews}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
