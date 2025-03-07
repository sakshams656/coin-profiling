/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from "react";
import { Button, Tabs, Popper, colors, InputDropDown } from "zebpay-ui";
import { css } from "@emotion/react";
import { header, headerButton, iconButton, tabs } from "./styles";
import NOOB from "@constants/noob";
import Image from "next/image";
import AssetsImg from "@public/images";
import dummyArticles from "@components/Blogs/app/data/dummyArticles";
import NofilterBlogs from "./NoFilterBlogs";
import {
  articleFooter,
  articleImage,
  articleInfo,
  articleTitle,
  Card,
  articleHeader,
} from "./SearchStyle";

interface HeaderProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

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

const Header = ({ selectedTab, setSelectedTab }: HeaderProps) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const shareButtonRef = useRef<HTMLButtonElement>(null);
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState<Article[]>(dummyArticles);
  const [filteredArticles, setFilteredArticles] =
    useState<Article[]>(dummyArticles);
  const [clickedArticles, setClickedArticles] = useState<Article[]>([]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
                <div>
                  <Image src={AssetsImg.ic_arrow_right} alt="Arrow" />
                </div>
              )}
            </div>
            <div css={articleFooter}>
                <span style={{ justifyContent: "center" }}>
                  <i
                    className="icon icon-calendar"
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
      ),
    })
  );

  useEffect(() => {
    setArticles(dummyArticles);
  }, []);

  useEffect(() => {
    const storedClickedArticles = JSON.parse(
      localStorage.getItem("clickedArticles") || "[]"
    );
    setClickedArticles(storedClickedArticles);
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      if (clickedArticles.length > 0) {
        setFilteredArticles(clickedArticles);
      } else {
        setFilteredArticles(
          [...dummyArticles].sort(
            (a, b) => Number(b.totalViews) - Number(a.totalViews)
          )
        );
      }
    } else {
      const filtered = dummyArticles.filter((article) =>
        article.content.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredArticles(filtered);
    }
  }, [search, clickedArticles]);

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
                    : "Trending Blogs:"
                : ""
            }
            // disableTick
            toggleInputSearch
            placeholder="Search Blogs"
            options={
              filteredArticles.length > 0
                ? articleOptions
                : [
                    {
                      label: <NofilterBlogs setSearch={setSearch} />,
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
              ...(filteredArticles.length === 0 && {
                "& div:hover": {
                  backgroundColor: "#181837",
                  borderRadius:"0.5rem"
                },
              }),
            }}
            customInputHeight={675}
          />
        )}
        {selectedTab === "overview" && (
          <>
            <button css={iconButton} onClick={NOOB}>
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
              onClick={() => setIsPopperOpen((prev) => !prev)}
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
        <Button onClick={NOOB} size="medium" type="primary">
          TRADE COIN_NAME
        </Button>
      </div>
    </div>
  );
};

export default Header;
