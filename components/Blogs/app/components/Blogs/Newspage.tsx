/** @jsxImportSource @emotion/react */
"use client";

import React, { useEffect, useState, useRef } from "react";
import ArticleCard from "./ArticleCard";
import SkeletonWrapper from "../SkeletonWrapper";
import IconsPanel from "./IconsPanel";
import dummyArticles from "../../data/dummyArticles";
import NewsLetter from "./Newsletter";
import Tradingbanner from "./Trading";
import NoBlogsFound from "./NoBlogsFound";
import { Button, Divider } from "zebpay-ui";
import Image from "next/image";

import {
  main,
  container,
  headerFrame,
  header,
  section,
  news,
  innerDiv,
  innerCard,
  NoBlogFound,
  InsideSection,
  selectedCategoriesContainer,
  categoryButton,
  clockIcon,
  categoryText,
  closeIcon,
  headerBelow,
} from "../../styles/newPage";
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

const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  return `${Math.ceil(minutes)} min read`;
};

const isValidDate = (date: string): boolean => !isNaN(Date.parse(date));

const isWithinDateRange = (date: string, range: string): boolean => {
  const currentDate = new Date();
  const articleDate = new Date(date);
  const timeDifference = currentDate.getTime() - articleDate.getTime();
  const dayInMilliseconds = 24 * 60 * 60 * 1000;

  switch (range) {
    case "7d":
      return timeDifference <= 7 * dayInMilliseconds;
    case "1m":
      return timeDifference <= 30 * dayInMilliseconds;
    case "3m":
      return timeDifference <= 90 * dayInMilliseconds;
    case "1y":
      return timeDifference <= 365 * dayInMilliseconds;
    default:
      return true;
  }
};

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [resetTrigger, setResetTrigger] = useState(0);
  const [iconsPanelKey, setIconsPanelKey] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handleDurationChange = (durations: string[]) => {
    setSelectedDurations(durations);
  };

  const handleDateRangeChange = (range: string) => {
    setDateRange(range);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setArticles(dummyArticles);
        setFilteredArticles(dummyArticles);
        setTimeout(()=>setLoading(false),6000)
        
      } catch (err) {
        console.error("Error fetching cryptocurrency news:", err);
        setError("Failed to fetch news.");
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const handleScroll = () => {
      if (sectionElement) {
        // const headerHeight = 110; 
        const isSectionScrolled = sectionElement.scrollTop > 0;
        setIsScrolled(isSectionScrolled);
      }
    };

    if (sectionElement) {
      sectionElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  
  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedDurations([]);
    setDateRange("");
    setSortBy("");
    setFilteredArticles(articles);

    setIconsPanelKey((prev) => prev + 1);
  };

  useEffect(() => {
    let filtered = articles.filter((article) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(article.category);

      const readingTime = calculateReadingTime(article.content);
      const matchesDuration =
        selectedDurations.length === 0 ||
        selectedDurations.some((duration) => {
          if (duration === "1-5 mins") {
            return parseInt(readingTime) <= 5;
          } else if (duration === "5-10 mins") {
            return parseInt(readingTime) > 5 && parseInt(readingTime) <= 10;
          } else if (duration === "10-20 mins") {
            return parseInt(readingTime) > 10 && parseInt(readingTime) <= 20;
          } else if (duration === "20+ mins") {
            return parseInt(readingTime) > 20;
          }
          return false;
        });

      const matchesDateRange =
        dateRange === "" || isWithinDateRange(article.publishedAt, dateRange);

      return matchesCategory && matchesDuration && matchesDateRange;
    });

    if (sortBy === "Latest") {
      filtered = [...filtered].sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return dateB - dateA;
      });
    } else if (sortBy === "Trending") {
      filtered = [...filtered].sort((a, b) => {
        const viewsA = parseInt(a.totalViews) || 0;
        const viewsB = parseInt(b.totalViews) || 0;
        return viewsB - viewsA;
      });
    }

    setFilteredArticles(filtered);
  }, [selectedCategories, selectedDurations, dateRange, articles, sortBy]);

  const handleRemoveCategory = (categoryToRemove: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.filter((category) => category !== categoryToRemove)
    );
  };

  const handleRemoveDuration = (durationToRemove: string) => {
    setSelectedDurations((prevDurations) =>
      prevDurations.filter((duration) => duration !== durationToRemove)
    );
  };

  const handleRemoveDate = (dateToRemove: string) => {
    setDateRange("");
  };

  return (
    <div css={main}>
      <div css={container}>
      <div css={headerFrame(isScrolled, selectedCategories.length > 0 || selectedDurations.length > 0 || dateRange !== "")}>

          <div css={header}>
            <div css={news}>Crypto Blogs</div>
            <IconsPanel
              key={iconsPanelKey}
              onCategoryChange={handleCategoryChange}
              onDurationChange={handleDurationChange}
              onDateRangeChange={handleDateRangeChange}
              onSortChange={handleSortChange}
              onReset={handleReset}
              selectedCategories={selectedCategories}
              selectedDurations={selectedDurations}
              selectedDateRange={dateRange}
            />
          </div>
          {(selectedCategories.length > 0 ||
            selectedDurations.length > 0 ||
            dateRange) && (
            <div css={headerBelow}>
              <div css={selectedCategoriesContainer}>
              
                {selectedCategories.map((category) => (
                  <button key={category} css={categoryButton}>
                    <Image src={AssetsImg.ic_category_white} css={clockIcon} />
                    <span css={categoryText}>{category}</span>
                    <Image
                      src={AssetsImg.ic_cross_blue}
                      css={closeIcon}
                      onClick={() => handleRemoveCategory(category)}
                    />
                  </button>
                ))}
                {selectedDurations.map((duration) => (
                  <button key={duration} css={categoryButton}>
                    <Image src={AssetsImg.ic_clock_white} css={clockIcon} />
                    <span css={categoryText}>{duration}</span>
                    <Image
                      src={AssetsImg.ic_cross_blue}
                      css={closeIcon}
                      onClick={() => handleRemoveDuration(duration)}
                    />
                  </button>
                ))}
                {dateRange && (
                  <button key={dateRange} css={categoryButton}>
                    <i className="icon icon-calendar" css={clockIcon} />
                    <span css={categoryText}>{dateRange}</span>
                    <Image
                      src={AssetsImg.ic_cross_blue}
                      css={closeIcon}
                      onClick={() => handleRemoveDate(dateRange)}
                    />
                  </button>
                )}
              </div>
              <Button
                onClick={handleReset}
                size="small"
                type="secondary"
                style={{ marginLeft: "1rem" }}
              >
                Reset
              </Button>
              
            </div>
          )}
          
        </div>
        <div css={section} ref={sectionRef} >
          {error ? (
            <div>{error}</div>
          ) : (
            <div css={InsideSection} >
              {loading ? (
                Array.from({ length: 12 }).map((_, index) => (
                  <ArticleCard
                    key={index}

                    
                    title={
                      <SkeletonWrapper
                        isLoading={loading}
                        height={18}
                        width={300}
                      />
                    }
                    link={
                      <SkeletonWrapper
                        isLoading={loading}
                        height={22}
                        width={205}
                      />
                    }
                    imageUrl={
                      <SkeletonWrapper
                        isLoading={loading}
                        height={110}
                        width={205}
                      />
                    }
                    date={
                      <SkeletonWrapper
                        isLoading={loading}
                        height={20}
                        width={120}
                      />
                    }
                    totalViews={
                      <SkeletonWrapper
                        isLoading={loading}
                        height={20}
                        width={120}
                      />
                    }
                    category={
                      <SkeletonWrapper
                        isLoading={loading}
                        height={24}
                        width={150}
                      />
                    }
                    description={
                      <SkeletonWrapper
                        isLoading={loading}
                        height={38}
                        width={300}
                      />
                    }
                  />
                ))
              ) : filteredArticles.length === 0 ? (
                <div css={NoBlogFound}>
                  <NoBlogsFound onReset={handleReset} />
                </div>
              ) : (
                filteredArticles.map((article, index) => (
                  <ArticleCard
                    key={index}
                    title={article.title}
                    link={article.url}
                    imageUrl={article.urlToImage}
                    date={
                      isValidDate(article.publishedAt)
                        ? new Date(article.publishedAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "Unknown Date"
                    }
                    
                    totalViews={article.totalViews}
                    category={article.category}
                    description={article.content}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
      <div css={innerDiv}>
        <div css={innerCard}>
          <NewsLetter isLoading={loading}/>
          <Tradingbanner isLoading={loading}/>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;