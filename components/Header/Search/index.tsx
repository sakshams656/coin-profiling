import { useState } from "react";
import { Card, articleFooter, articleHeader, articleImage, articleInfo, articleTitle } from "./style";
import Image from "next/image";
import AssetsImg from "@public/images";

interface Article {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  category: string;
  totalViews: string;
}

export type OptionsType = {
  label: JSX.Element;
  value: string | number;
};

interface ArticleOptionsProps {
  filteredArticles: Article[];
  handleArticleClick: (article: Article) => void;
}

const ArticleOptions = ({ filteredArticles, handleArticleClick }: ArticleOptionsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return filteredArticles.map((article, index) => ({
    value: index,
    label: (
      <div
        css={Card}
        key={index}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => handleArticleClick(article)}
      >
        <img src={article.urlToImage} alt={article.title} css={articleImage} />
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
                {new Date(article.publishedAt)
                  .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  .replace(",", "")}
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
};

export default ArticleOptions;
