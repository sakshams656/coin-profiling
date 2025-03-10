/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from "react";
import { Button, Tabs, colors, InputDropDown, utils } from "zebpay-ui";
import { css } from "@emotion/react";
import * as styles from "./styles";
import * as searchStyles from "./SearchStyle"; 
import NOOB from "@constants/noob";
import Image from "next/image";
import AssetsImg from "@public/images";
import { getCryptoNews } from "@components/News/APIservice/apiService";
import NofilterNews from "./NoNews/NoFilterNews";
import Dropdown from "./Dropdown/Dropdown" ;
import { generateToast } from "@components/Shared";
import { ToastType } from "@components/Shared/GenerateToast";

interface HeaderProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
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

const Header = ({ selectedTab, setSelectedTab }: HeaderProps) => {
  const [, setIsPopperOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [clickedArticles, setClickedArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isStarFilled, setIsStarFilled] = useState(false); 
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);
  const shareButtonRef = useRef<HTMLButtonElement>(null);

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/g).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).replace(",", "");
  };

  const toggleShareMenu = () => {
    setIsShareMenuOpen((prev) => {
      console.log("Toggling share menu to:", !prev);
      return !prev;
    });
  };

  const handleStarClick = () => {
    setIsStarFilled((prev) => {
      const newState = !prev;
      console.log(`Star state changing from ${prev} to ${newState}`); 
      const toastType = newState ? ToastType.success : ToastType.success;
      const toastData = {
        title: newState ? "Coin added to Favourites!" : "Coin removed from Favourites",
        description: newState
          ? "Bitcoin has been added to your favourites."
          : "Bitcoin has been removed from your favourites.",
        type: toastType,
      };
      generateToast(toastData);
      return newState;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        shareMenuRef.current &&
        !shareMenuRef.current.contains(event.target as Node) &&
        shareButtonRef.current &&
        !shareButtonRef.current.contains(event.target as Node)
      ) {
        console.log("Clicked outside, closing menu");
        setIsShareMenuOpen(false);
      }
    };

    if (isShareMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShareMenuOpen]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const data = await getCryptoNews(search);
        setArticles(data);
        setFilteredArticles(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch news articles");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      if (search.trim()) {
        fetchNews();
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [search]);

  useEffect(() => {
    const storedClickedArticles = JSON.parse(
      localStorage.getItem("clickedNews") || "[]"
    );
    setClickedArticles(storedClickedArticles);
  }, []);

  const articleOptions: OptionsType[] = filteredArticles.map((article, index) => ({
    value: index,
    label: (
      <div
        css={searchStyles.Card}
        key={index}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <img
          src={article.urlToImage}
          alt={article.title}
          css={searchStyles.articleImage}
        />
        <div css={searchStyles.articleInfo}>
          <div css={searchStyles.articleHeader}>
            <div css={searchStyles.articleTitle} title={article.title}>
              {article.title}
            </div>
            {hoveredIndex === index && (
              <div>
                <Image src={AssetsImg.ic_arrow_right} alt="Arrow" />
              </div>
            )}
          </div>
          <div css={searchStyles.articleFooter}>
            <span css={searchStyles.articleFooterSpan}>
              <Image src={AssetsImg.ic_clock_blue} alt="clock" width={14} height={14} css/>
              {calculateReadingTime(article.content)} min read
            </span>
            <Image src={AssetsImg.ic_seperator} alt="Separator" height={16} width={16} />
            <span css={searchStyles.articleFooterSpan}>
              <Image src={AssetsImg.ic_calendar} alt="calendar" width={14} height={14} />
              {formatDate(article.publishedAt)}
            </span>
          </div>
        </div>
      </div>
    ),
  }));

  const handleArticleClick = (article: NewsArticle) => {
    const updatedClickedArticles = [
      ...clickedArticles.filter((a) => a.url !== article.url),
      article,
    ];
    setClickedArticles(updatedClickedArticles);
    localStorage.setItem("clickedNews", JSON.stringify(updatedClickedArticles));
    window.open(article.url, "_blank");
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
      <div css={css(styles.headerButton)}>
        {["news", "blogs"].includes(selectedTab) && (
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
                backgroundColor: colors.Zeb_Solid_Dark_Blue
              }
            })}
            minimumInputDirection="right"
            contentHeading={
              filteredArticles.length > 0
                ? search.trim()
                  ? "Search Results:"
                  : clickedArticles.length > 0
                  ? "Recent News:"
                  : "Trending News:"
                : ""
            }
            toggleInputSearch
            placeholder="Search News"
            options={
              error
                ? [
                    {
                      label: (
                        <div>{error}</div>
                      ),
                      value: "error",
                    },
                  ]
                : filteredArticles.length > 0
                ? articleOptions
                : [
                    {
                      label: (
                        <NofilterNews
                          setSearch={setSearch}
                          css={{ height: utils.remConverter(400) }}
                        />
                      ),
                      value: "NoFilterNews",
                    },
                  ]
            }
            onChange={(value) => {
              if (typeof value === "number") {
                const selectedArticle = filteredArticles[value];
                handleArticleClick(selectedArticle);
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
              width: utils.remConverter(450),
              height: utils.remConverter(400),
              ...(filteredArticles.length === 0 && {
                "& div:hover": {
                  backgroundColor: "#181837",
                  borderRadius: "0.5rem",
                },
              }),
            }}
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

        <Button onClick={NOOB} size="medium" type="primary">
          TRADE COIN_NAME
        </Button>
      </div>
    </div>
  );
};

export default Header;