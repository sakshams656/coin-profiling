/** @jsxImportSource @emotion/react */
import React from "react";
import { Icon } from "zebpay-ui";
import SkeletonWrapper from "../skeletonWrapper/SkeletonWrapper";
import {
  cardContainerStyle,
  insideFrameStyle,
  cardImageStyle,
  cardInfoStyle,
  domainNameStyle,
  titleStyle,
  readingTimeStyle,
  iconSeparatorStyle,
  dateStyle,
  dateIconStyle,
  dateTextStyle,
  textReadingTime,
  infoHeaderStyle,
  infoFooterStyle,
  readingTimeIcon
} from "./styles";

interface ArticleCardProps {
  loading?: boolean;
  title?: string;
  link?: string;
  imageUrl?: string;
  date?: string;
  readingTime?: string;
  domain?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  loading = false,
  title,
  link,
  imageUrl,
  date,
  readingTime,
  domain,
}) => {
  // Domain processing only when not loading
  const isDomainString = !loading && typeof domain === "string";
  const shortDomain = isDomainString && domain.startsWith("www.") 
    ? domain.slice(4) 
    : domain;
  const isZebpay = isDomainString && shortDomain.toLowerCase() === "zebpay";

  return (
    <div css={cardContainerStyle}>
      <div css={insideFrameStyle}>
        <div css={cardImageStyle}>
          {loading ? (
            <SkeletonWrapper isLoading={true} height={200} width="100%" />
          ) : imageUrl ? (
            <img src={imageUrl} alt={title || "Article Image"} />
          ) : null}
        </div>
        
        <div css={cardInfoStyle}>
          <div css={infoHeaderStyle}>
            {loading ? (
              <SkeletonWrapper isLoading={true} height={20} width={120} />
            ) : (
              <div css={domainNameStyle(isZebpay)}>{shortDomain}</div>
            )}

            {loading ? (
              <SkeletonWrapper isLoading={true} height={24} count={2} />
            ) : (
              <a
                href={link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                css={titleStyle}
              >
                {title}
              </a>
            )}
          </div>

          <div css={infoFooterStyle}>
            {loading ? (
              <SkeletonWrapper isLoading={true} height={20} width={100} />
            ) : (
              <div css={readingTimeStyle}>
                <div css={readingTimeIcon}>
                  <Icon name="term" />
                </div>
                <div css={textReadingTime}>{readingTime}</div>
              </div>
            )}
            
            <div css={iconSeparatorStyle}></div>

            {loading ? (
              <SkeletonWrapper isLoading={true} height={20} width={80} />
            ) : (
              <div css={dateStyle}>
                <div css={dateIconStyle}>
                  <Icon name="calendar" />
                </div>
                <div css={dateTextStyle}>{date}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;