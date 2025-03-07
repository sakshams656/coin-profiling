import React, { useState } from "react";
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
} from "./articleStyle";
import { Shimmer } from "zebpay-ui";

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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleClick = () => window.open(link, "_blank", "noopener,noreferrer");

  return (
    <div css={CardContainer} className={isImageLoaded? "hover-active" : ""} onClick={handleClick} style={{ cursor: "pointer" }}>
      <div css={InsideFrame}>
        <div css={CardImage}>
          {!isImageLoaded && (
            <Shimmer
              height={120} 
              width={300}  
            />
          )}
          <img
            src={imageUrl}
            alt={title}
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setIsImageLoaded(false)} 
            style={{ display: isImageLoaded ? "block" : "none"}}
          />
        </div>

        <div css={CardInfo}>
          <div css={CardInfoHeader}>
            <div css={DomainName}  style={!isImageLoaded ? {} : { background: "rgba(192, 192, 238, 0.2)",padding: "0.125rem 0.25rem"  }}>{category}</div>
            <div css={Title}>{title}</div>
            {description && <div css={Description}>{description}</div>}
          </div>

          <div css={CardInfoFooter}>
            <div css={Date}>
              {isImageLoaded &&  <div css={DateIcon}>
                <Image src={AssetsImg.ic_calendar} alt="Calendar" width={14} height={14} />
              </div>}
              <div css={DateText}>{date}</div>
            </div>

            {isImageLoaded &&<Image src={AssetsImg.ic_seperator} alt="Separator" width={16} height={16} />}

            <div css={ReadingTime}>
              {isImageLoaded  &&  <div css={ReadingTimeIcon}>
                <Image src={AssetsImg.ic_views} alt="Show" width={16} height={16} />
              </div>}
              <div css={ReadingTimeText}>{totalViews}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
