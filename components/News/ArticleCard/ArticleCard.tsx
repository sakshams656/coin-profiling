/** @jsxImportSource @emotion/react */
import React from "react";
import { Icon } from "zebpay-ui"; 

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
  title: string | JSX.Element;
  link: string | JSX.Element;
  imageUrl: string | JSX.Element;
  date: string | JSX.Element;
  readingTime: string | JSX.Element;
  domain: string | JSX.Element;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  link,
  imageUrl,
  date,
  readingTime,
  domain,
}) => {
  // Check if domain is a string
  const isDomainString = typeof domain === "string";
  const shortDomain =
    isDomainString && domain.startsWith("www.") ? domain.slice(4) : domain;

  // Check if shortDomain is a string to avoid errors
  const isZebpay =
    isDomainString &&
    typeof shortDomain === "string" &&
    shortDomain.toLowerCase() === "zebpay";

  return (
    <div css={cardContainerStyle}>
      <div css={insideFrameStyle}>
        <div css={cardImageStyle}>
          {typeof imageUrl === "string" ? (
            <img
              src={imageUrl}
              alt={typeof title === "string" ? title : "Article Image"}
            />
          ) : (
            imageUrl
          )}
        </div>
        <div css={cardInfoStyle}>
          <div css={infoHeaderStyle}>
            {typeof shortDomain === "string" ? (
              <div css={domainNameStyle(isZebpay)}>{shortDomain}</div>
            ) : (
              domain
            )}

            {typeof shortDomain === "string" ? (
              <a
                href={typeof link === "string" ? link : "#"}
                target="_blank"
                rel="noopener noreferrer"
                css={titleStyle}
              >
                {title}
              </a>
            ) : (
              title
            )}
          </div>

          <div css={infoFooterStyle}>
            {typeof shortDomain === "string" ? (
              <div css={readingTimeStyle}>
                <div css={readingTimeIcon}>
                  <Icon name="term" />
                </div>
                <div css={textReadingTime}>{readingTime}</div>
              </div>
            ) : (
              readingTime
            )}
            <div css={iconSeparatorStyle}></div>

            {typeof shortDomain === "string" ? (
              <div css={dateStyle}>
                <div css={dateIconStyle}>
                  <Icon name="calendar" />
                </div>
                <div css={dateTextStyle}>{date}</div>
              </div>
            ) : (
              date
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;