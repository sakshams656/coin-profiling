import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Tabs, Popper, colors, InputDropDown, Icon } from "zebpay-ui";
import { css } from "@emotion/react";
import { header, headerButton, iconButton, icons, tabs } from "./styles";
import NOOB from "@constants/noob";
import Image from "next/image";
import AssetsImg from "@public/images";
import { ToastType } from "@components/Shared/GenerateToast";
import { generateToast } from "@components/Shared";
import NoArticles from "../NoArticles";
import Dropdown from "../Dropdown";

import {
  articleFooter,
  articleImage,
  articleInfo,
  articleTitle,
  Card,
  articleHeader,
} from "../Search/style";
import { getCryptoNews } from "../api/apiService";

interface HeaderProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  coinSymbol: string;
}

export type OptionsType = {
  label: JSX.Element;
  value: string | number;
};

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

const HeaderPage = ({ selectedTab, setSelectedTab, coinSymbol }: HeaderProps) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const shareButtonRef = useRef<HTMLButtonElement>(null);
  const [search, setSearch] = useState("");
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);
  const [clickedArticles, setClickedArticles] = useState<Article[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);
  const [isStarFilled, setIsStarFilled] = useState(false);
  const [displayMode, setDisplayMode] = useState<"search" | "recent" | "trending">("trending");

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/g).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  const toggleShareMenu = () => {
    setIsShareMenuOpen((prev) => !prev);
  };

  const createArticleOption = (article: Article, index: number) => ({
    value: index,
    label: (
      <div
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
              <Image src={AssetsImg.ic_arrow_right} alt="Arrow" />
            )}
          </div>
          <div css={articleFooter}>
            {selectedTab === "news" && (
              <>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={AssetsImg.ic_clock_blue}
                    alt="clock"
                    width={14}
                    height={14}
                    css={icons}
                  />
                  {calculateReadingTime(article.content)} min read
                </span>
                <Image src={AssetsImg.ic_seperator} alt="Separator" />
              </>
            )}
            <span style={{ display: "flex" }}>
              <Icon name="icon icon-calendar" style={icons} />
              {new Date(article.publishedAt)
                .toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                .replace(",", "")}
            </span>
          </div>
        </div>
      </div>
    ),
  });


  useEffect(() => {
    const storedClickedArticles = JSON.parse(
      localStorage.getItem("clickedArticles") || "[]"
    );
    setClickedArticles(storedClickedArticles);

    if (search.trim() !== "") {
      setDisplayMode("search");
      const filtered = articles.filter((article: Article) =>
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        (article.description && article.description.toLowerCase().includes(search.toLowerCase())) ||
        (article.content && article.content.toLowerCase().includes(search.toLowerCase()))
      );
      setFilteredArticles(filtered);
      setDisplayedArticles(filtered);
    } else if (storedClickedArticles.length > 0) {

      setDisplayMode("recent");
      setDisplayedArticles(storedClickedArticles);
    } else {

      setDisplayMode("trending");
      setDisplayedArticles(articles);
    }
  }, [search, articles]);

  const fetchArticles = async () => {
    if (!articles || articles.length === 0) {
      try {
        const data = await getCryptoNews();
        setFilteredArticles(data);
      } catch (error) {
        console.error("Error Fetching Articles", error);
      }
    }
  };

  const handleInputFocus = () => {
    if (filteredArticles.length === 0) {
      fetchArticles();
    }
  };

  const handleStarClick = () => {
    const newState = !isStarFilled;
    setIsStarFilled(newState);

    const toastType = ToastType.success;
    const toastData = {
      title: newState
        ? "Coin added to Favourites!"
        : "Coin removed from Favourites",
      description: newState
        ? `${coinSymbol} has been added to your favourites.`
        : `${coinSymbol} has been removed from your favourites.`,
      type: toastType,
      duration: 3000,
    };
    generateToast(toastData);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        shareMenuRef.current &&
        !shareMenuRef.current.contains(event.target as Node) &&
        shareButtonRef.current &&
        !shareButtonRef.current.contains(event.target as Node)
      ) {
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

  const handleArticleClick = (article: Article) => {
    const updatedClickedArticles = [
      ...clickedArticles.filter((a) => a.title !== article.title),
      article,
    ];
    setClickedArticles(updatedClickedArticles);
    localStorage.setItem(
      "clickedArticles",
      JSON.stringify(updatedClickedArticles)
    );
    window.open(article.url, "_blank");
  };

  const NofilterBlogsWrapper = () => {
    return (
      <div
        style={{ cursor: "default" }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <NoArticles setSearch={setSearch} selectedTab={selectedTab} />
      </div>
    );
  };


  const articleOptions: OptionsType[] = displayedArticles.map(
    (article, index) => createArticleOption(article, index)
  );


  const getContentHeading = () => {
    if (displayedArticles.length === 0) return "";
    
    if (search.trim() !== "") {
      return "Search Results:";
    } else if (clickedArticles.length > 0) {
      return "Recent Search:";
    } else {
      return `Trending ${selectedTab}:`;
    }
  };

  return (
    <div css={header}>
      <div css={tabs}>
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
      <div css={headerButton}>
        {["news", "blogs"].includes(selectedTab) && (
          <InputDropDown
            onDropdownClick={handleInputFocus}
            customStyles={css({
              input: { backgroundColor: colors.Zeb_Solid_Dark_Blue },
              "div>div": {
                backgroundColor: colors.Zeb_Solid_Dark_Blue,
              },
              button: {
                backgroundColor: colors.Zeb_Solid_Dark_Blue,
              },
              zIndex: 1,
              width: "280px",
            })}
            minimumInputDirection="right"
            contentHeading={getContentHeading()}
            toggleInputSearch
            placeholder={`Search ${selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}`}
            options={
              displayedArticles.length > 0
                ? articleOptions
                : [
                    {
                      label: <NofilterBlogsWrapper />,
                      value: "NoFilterBlogs",
                    },
                  ]
            }
            onChange={(value) => {
              if (displayedArticles.length === 0 || value === "NoFilterBlogs") {
                return;
              }
              const selectedArticle = displayedArticles[value];
              handleArticleClick(selectedArticle);
            }}
            maxRows={4}
            search={{
              placeholder: `Select ${selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1).toLowerCase()}`,
              value: search,
              onChange: (value) => setSearch(value),
              onClear: () => setSearch(""),
            }}
            rowHeight={displayedArticles.length > 0 ? 75 : 346}
            customDropDownStyle={{
              width: "450px",
              "& > div": {
                height: "368px",
              },
              ...(displayedArticles.length === 0 && {
                "& div:hover": {
                  backgroundColor: "#181837",
                  borderRadius: ".5rem",
                },
              }),
            }}
            customInputHeight={675}
          />
        )}
        {selectedTab === "overview" && (
          <>
            <button css={iconButton} onClick={handleStarClick}>
              <Image
                src={AssetsImg.ic_header_star}
                alt="Star Icon"
                width={18}
                height={18}
              />
            </button>
            <button
              css={iconButton}
              ref={shareButtonRef}
              onClick={toggleShareMenu}
            >
              <Image
                src={AssetsImg.ic_share}
                alt="Share Icon"
                width={18}
                height={18}
              />
            </button>
          </>
        )}
        <Dropdown
          isOpen={isShareMenuOpen}
          onClose={() => setIsShareMenuOpen(false)}
          shareMenuRef={shareMenuRef}
        />

        <Button onClick={NOOB} size="medium" type="primary">
          TRADE {coinSymbol}
        </Button>
      </div>
    </div>
  );
};

export default HeaderPage;