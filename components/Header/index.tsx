import { useState, useRef, useEffect } from "react";
import { Button, Tabs, colors, InputDropDown, utils, Icon } from "zebpay-ui";
import { css } from "@emotion/react";
import * as styles from "./styles";
import * as searchStyles from "./SearchStyle";
import NOOB from "@constants/noob";
import Image from "next/image";
import AssetsImg from "@public/images";
import { getCryptoNews } from "@components/News/APIservice/apiService";
import NofilterNews from "./NoNews/NoFilterNews";
import Dropdown from "./Dropdown/Dropdown";
import { generateToast } from "@components/Shared";
import { ToastType } from "@components/Shared/GenerateToast";

interface HeaderProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  coinSymbol: string; 
}

export type OptionsType = {
  label: JSX.Element;
  value: string | number;
};

interface NewsArticle {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: {
    name: string;
  };
}

const Header = ({ selectedTab, setSelectedTab, coinSymbol }: HeaderProps) => {
  const [, setIsPopperOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState<Article[]>(dummyArticles);
  const [filteredArticles, setFilteredArticles] =
    useState<Article[]>(dummyArticles);
  const [clickedArticles, setClickedArticles] = useState<Article[]>([]);
  // const [isDropDownOpen,setIsDropDownOpen]=useState(false);

  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [recentArticles, setRecentArticles] = useState<NewsArticle[]>([]);
  const [trendingArticles, setTrendingArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isStarFilled, setIsStarFilled] = useState(false);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);
  const shareButtonRef = useRef<HTMLButtonElement>(null);

  const articleOptions: OptionsType[] = filteredArticles.map(
    (article, index) => ({
      value: index,
      label: (
        <div
          // style={{paddingRight:"10px"}}
          css={Card}
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={article.urlToImage}
            alt={article.title}
            css={articleImage}
          />
          <div css={articleInfo}>
            <div css={articleHeader}>
              <div css={articleTitle} title={article.title}>
                {article.title}
              </div>
              {hoveredIndex === index && (
                <>
                  <Image src={AssetsImg.ic_arrow_right} alt="Arrow" />
                </>
              )}
            </div>
            <div css={articleFooter}>
              <span style={{ display: "flex" }}>
                <Icon
                  name="icon icon-calendar"
                  style={{ marginRight: "0.5rem" }}
                />
                {new Date(article.publishedAt)
                  .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  .replace(",", "")}
              </span>
              <Image src={AssetsImg.ic_seperator} alt="Separator" />
              <Image src={AssetsImg.ic_views} alt="Views" />
              <span> {article.totalViews} </span>
            </div>
          </div>
        </div>
      </div>
    ),
  });

  const articleOptions: OptionsType[] = filteredArticles.map((article, index) =>
    createArticleLabel(article, index)
  );

  const handleArticleClick = (article: NewsArticle) => {
    const updatedRecentArticles = [
      article,
      ...recentArticles.filter((a) => a.url !== article.url),
    ].slice(0, 10); // only last 10 recent articles
    
    setRecentArticles(updatedRecentArticles);
    localStorage.setItem("recentNews", JSON.stringify(updatedRecentArticles));
    window.open(article.url, "_blank");
  };

  const NofilterBlogsWrapper = () => {
    return (
      <div
        style={{ cursor: "default" }}
        onClick={(e) => {
          e.stopPropagation();
          // setIsDropDownOpen(true);
        }}
      >
        <NofilterBlogs setSearch={setSearch} />
      </div>
    );
  };

  const getContentHeading = () => {
    if (error) return "Error";
    if (search.trim()) return "Search Results:";
    if (recentArticles.length > 0 && filteredArticles === trendingArticles) 
      return "Recent Search:";
    return "Trending News:";
  };

  const noFilterOption: OptionsType[] = [{
    label: (
      <NofilterNews
        setSearch={setSearch}
        css={{ height: utils.remConverter(400) }}
      />
    ),
    value: "NoFilterNews",
  }];

  const getDisplayArticles = () => {
    if (error) return [{ label: <div>{error}</div>, value: "error" }];
    
    if (search.trim()) {
      return filteredArticles.length > 0 ? articleOptions : noFilterOption;
    }
    
    if (!search.trim() && recentArticles.length > 0) {
      const recentOptions = recentArticles.map((article, index) =>
        createArticleLabel(article, index)
      );
      return recentOptions.length > 0 ? recentOptions : noFilterOption;
    }
    
    return trendingArticles.length > 0 ? articleOptions : noFilterOption;
  };

  return (
    <div css={styles.header}>
      <div css={styles.tabs}>
        <Tabs
          dropdownPlaceHolder="Select a Tab"
          onChange={(tab: string) => setSelectedTab(tab)}
          selectedTab={selectedTab}
          tabsCount={4}
          tabsList={[
            { tab: "overview", title: "OVERVIEW" },
            { tab: "pricePredictor", title: "PRICE PREDICTOR" },
            { tab: "news", title: "NEWS" },
            { tab: "blogs", title: "BLOGS" },
          ]}
          theme="dark"
          type="primary"
        />
      </div>

      <div css={styles.headerButton}>
        {["news"].includes(selectedTab) && (
          <InputDropDown
            customStyles={css({
              input: { backgroundColor: colors.Zeb_Solid_Dark_Blue },
              "div>div": {
                backgroundColor: colors.Zeb_Solid_Dark_Blue,
                maxHeight: utils.remConverter(450),
                overflowY: "auto",
              },
              width: utils.remConverter(280),
              button: {
                backgroundColor: colors.Zeb_Solid_Dark_Blue,
              },
            })}
            minimumInputDirection="right"
            contentHeading={getContentHeading()}
            toggleInputSearch
            placeholder="Search Blogs"
            options={
              filteredArticles.length > 0
                ? articleOptions
                : [
                    {
                      label: <NofilterBlogsWrapper />,
                      value: "NoFilterBlogs",
                    },
                  ]
            }
            onChange={(value) => {
              if (filteredArticles.length === 0 || value === "NoFilterBlogs") {
                return;
              }
              // setIsDropDownOpen(true);
              const selectedArticle = filteredArticles[value];
              handleArticleClick(selectedArticle);
              if (typeof value === "number") {
                const selectedArticle = filteredArticles[value] || recentArticles[value];
                if (selectedArticle) {
                  handleArticleClick(selectedArticle);
                }
              }
            }}
            maxRows={4}
            search={{
              placeholder: "Search News",
              value: search,
              onChange: (value) => setSearch(value),
              onClear: () => setSearch(""),
            }}
            rowHeight={filteredArticles.length > 0 ? 75 : 346}
            customDropDownStyle={{
              width: "450px",
              "& > div": {
                height: "368px",
                overflowY: "auto",
                scrollbarColor: "black transparent",
              },
              // "& > div > div": {
              //   paddingRight: "19px",
              // },

              // "&>div::-webkit-scrollbar":{
              //   width:"8px",
              // },
              // "&>div::-webkit-scrollbar-thumb":{
              //   backgroundColor:"black",
              //   borderRadius:"4px",
              // },
              // "&>div::-webkit-scrollbar-track":{
              //   backgroundColor:"transparent",
              // },

              ...(filteredArticles.length === 0 && {
                "& div:hover": {
                  backgroundColor: "#181837",
                  borderRadius: ".5rem",
                },
              }),
            })}
          />
        )}
        {selectedTab === "overview" && (
          <>
            <button css={styles.iconButton} onClick={handleStarClick}>
              <Image
                src={isStarFilled ? AssetsImg.ic_star_filled : AssetsImg.ic_header_star}
                alt="Star Icon"
                width={18}
                height={18}
                css={css`fill: ${isStarFilled ? colors.Zeb_Solid_White : "none"};`}
              />
            </button>
            <button css={styles.iconButton} ref={shareButtonRef} onClick={toggleShareMenu}>
              <Image src={AssetsImg.ic_share} alt="Share Icon" width={18} height={18} />
            </button>
          </>
        )}

        <Dropdown
          isOpen={isShareMenuOpen}
          onClose={() => setIsShareMenuOpen(false)}
          shareMenuRef={shareMenuRef}
        />

        <Button onClick={NOOB} size="small" type="primary" width={150}>
          {`TRADE ${coinSymbol}`}
        </Button>
      </div>
    </div>
  );
};

export default Header;