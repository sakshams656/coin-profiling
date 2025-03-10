import React from "react";
import { Icon } from "zebpay-ui";
import Image from "next/image";
import ShimmerWrapper from "../../Shared/ShimmerWrapper/ShimmerWrapper";
import * as styles from "./styles"; 
import AssetsImg from "@public/images";

interface ArticleCardProps {
  loading?: boolean;
  title: string;
  link: string;
  imageUrl: string;
  date: string;
  readingTime: string;
  domain: string;
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
  const shortDomain = isDomainString && domain.startsWith("www.") ? domain.slice(4) : domain;
  const isZebpay = isDomainString && shortDomain.toLowerCase() === "zebpay";

  return (
    <div css={styles.cardContainerStyle}>
      <div css={styles.insideFrameStyle}>
        <div css={styles.cardImageStyle}>
          <ShimmerWrapper isLoading={loading} height={108} width={100}>
            {imageUrl && (
              <img src={imageUrl} alt={title || "Article Image"} />
            )}
          </ShimmerWrapper>
        </div>

        <div css={styles.cardInfoStyle}>
          <div css={styles.infoHeaderStyle}>
            <ShimmerWrapper isLoading={loading} height={22} width={120}>
              <div css={styles.domainNameStyle(isZebpay)}>{shortDomain}</div>
            </ShimmerWrapper>

            <ShimmerWrapper isLoading={loading} height={50} width={300}>
              <a
                href={link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                css={styles.titleStyle}
              >
                {title}
              </a>
            </ShimmerWrapper>
          </div>

          <div css={styles.infoFooterStyle}>
            <ShimmerWrapper isLoading={loading} height={20} width={80}>
              <div css={styles.readingTimeStyle}>
                <div css={styles.readingTimeIcon}>
                  <Icon name="term" />
                </div>
                <div css={styles.textReadingTime}>{readingTime}</div>
              </div>
            </ShimmerWrapper>

            <div>
              <Image src={AssetsImg.ic_seperator} alt="" width={16} height={16} />
            </div>

            <ShimmerWrapper isLoading={loading} height={20} width={80}>
              <div css={styles.dateStyle}>
                <div css={styles.dateIconStyle}>
                  <Icon name="calendar" />
                </div>
                <div css={styles.dateTextStyle}>{date}</div>
              </div>
            </ShimmerWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;