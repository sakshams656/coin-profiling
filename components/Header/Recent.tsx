/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import AssetsImg from "@public/images";
import { articleFooter, articleImage, articleInfo, articleTitle, Card, articleHeader } from "./SearchStyle";

export type OptionsType = {
  label: JSX.Element;
  value: string | number;
};

interface Article {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  category: string;
  totalViews: string;
}

interface RecentProps {
  filteredArticles: Article[];
  setHoveredIndex: (index: number | null) => void;
  hoveredIndex: number | null;
}

const Recent = ({ filteredArticles, setHoveredIndex, hoveredIndex }: RecentProps) => {
  const articleOptions: OptionsType[] = filteredArticles.map((article, index) => ({
    value: index,
    label: (
      <div
        css={Card}
        key={index}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div>
          <img src={article.urlToImage} alt={article.title} css={articleImage} />
        </div>
        <div css={articleInfo}>
          <div css={articleHeader}>
            <div css={articleTitle} title={article.title}>
              {article.title}
            </div>
            {hoveredIndex === index && (
              <div>
                <Image src={AssetsImg.ic_arrow_right} alt="Arrow" />
              </div>
            )}
          </div>
          <div css={articleFooter}>
            <div>
              <span style={{ justifyContent: "center" }}>
                <i className="icon icon-calendar" style={{ marginRight: "0.5rem" }} />
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
            </div>
            <div>
              <Image src={AssetsImg.ic_seperator} alt="Separator" />
            </div>
            <div>
              <Image src={AssetsImg.ic_views} alt="Views" />
              <span> {article.totalViews} </span>
            </div>
          </div>
        </div>
      </div>
    ),
  }));

  return articleOptions;
};

export default Recent;
