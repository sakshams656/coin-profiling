/** @jsxImportSource @emotion/react */
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

const Header = ({ selectedTab, setSelectedTab, coinSymbol }: HeaderProps) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const shareButtonRef = useRef<HTMLButtonElement>(null);
  const [search, setSearch] = useState("");
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [clickedArticles, setClickedArticles] = useState<Article[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);
  const [isStarFilled, setIsStarFilled] = useState(false);
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

  const articleOptions: OptionsType[] = filteredArticles.map(
    (article, index) => ({
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
    })
  );

  useEffect(() => {
    const fetchArticles = async () => {
      if (selectedTab === "news" || selectedTab === "blogs") {
        if (!articles || articles.length === 0) {
          try {
            const data = await getCryptoNews();
            dispatch({ type: "SET_ARTICLES", payload: data });
            setFilteredArticles(data);
          } catch (error) {
            console.error("Error fetching articles:", error);
          }
        } else {
          setFilteredArticles(articles);
        }
      }
    };

    fetchArticles();
  }, [dispatch, selectedTab]);

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

  useEffect(() => {
    const storedClickedArticles = JSON.parse(
      localStorage.getItem("clickedArticles") || "[]"
    );
    setClickedArticles(storedClickedArticles);
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      if (search.trim() === "") {
        if (clickedArticles.length > 0) {
          setFilteredArticles(clickedArticles);
        } else if (articles && articles.length > 0) {
          setFilteredArticles(articles);
        }
      } else {
        try {
          const fetchedArticles = await getCryptoNews(search);
          setFilteredArticles(fetchedArticles);
        } catch (error) {
          console.error("Error fetching articles:", error);
        }
      }
    };

    fetchArticles();
  }, [search, clickedArticles, articles]);

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
            contentHeading={
              filteredArticles.length > 0
                ? search.trim() !== ""
                  ? "Search Results:"
                  : clickedArticles.length > 0
                    ? "Recent Search:"
                    : `Trending ${selectedTab}:`
                : ""
            }
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
              const selectedArticle = filteredArticles[value];
              handleArticleClick(selectedArticle);
            }}
            maxRows={4}
            search={{
              placeholder: `Select ${selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1).toLowerCase()}`,
              value: search,
              onChange: (value) => setSearch(value),
              onClear: () => setSearch(""),
            }}
            rowHeight={filteredArticles.length > 0 ? 75 : 346}
            customDropDownStyle={{
              width: "450px",
              "& > div": {
                height: "368px",
              },
              ...(filteredArticles.length === 0 && {
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
          TRADE COIN_NAME
        </Button>
      </div>
    </div>
  );
};
export default Header;
