import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import ArticleCard from "../ArticleCard";
import IconsPanel from "../IconsPanel";
import dummyArticles from "../dummyData/dummyArticles";
import NewsLetter from "../BlogsLetter";
import Tradingbanner from "../Trading";
import NoBlogsFound from "../NoBlogsFound";
import { Button, Shimmer } from "zebpay-ui";
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
} from "./style";
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

interface FilterItem {
  type: "category" | "duration" | "date";
  value: string;
  icon: string | null;
  onRemove: () => void;
}

const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  return `${Math.ceil(minutes)} min read`;
};

const isValidDate = (date: string): boolean => !isNaN(Date.parse(date));

const isWithinDateRange = (date: string, range: string): boolean => {
  const articleDate = new Date(date);
  if (isNaN(articleDate.getTime())) return false;

  const currentDate = new Date();
  switch (range) {
    case "Last 7 Days":
      return (
        articleDate >= new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)
      );
    case "Last Month":
      return (
        articleDate >= new Date(new Date().setMonth(currentDate.getMonth() - 1))
      );
    case "Last 3 Months":
      return (
        articleDate >= new Date(new Date().setMonth(currentDate.getMonth() - 3))
      );
    case "Last 1 Year":
      return (
        articleDate >=
        new Date(new Date().setFullYear(currentDate.getFullYear() - 1))
      );
    default:
      break;
  }

  if (range.includes(" - ")) {
    const [startDateStr, endDateStr] = range.split(" - ");
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return false;

    endDate.setHours(23, 59, 59, 999);

    return articleDate >= startDate && articleDate <= endDate;
  }

  return true;
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

  const [visibleTags, setVisibleTags] = useState(0);
  const [overflowCount, setOverflowCount] = useState(0);
  const filtersContainerRef = useRef<HTMLDivElement>(null);

  const formatDateWithSuffix = (dateStr: string) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "Invalid Date";

    const day = date.getDate();
    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
          ? "nd"
          : day === 3 || day === 23
            ? "rd"
            : "th";

    return `${day}${suffix} ${date.toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
    })}`;
  };


  const allFilters: FilterItem[] = [
    ...selectedCategories.map((category) => ({
      type: "category" as const,
      type: "category" as const,
      value: category,
      icon: AssetsImg.ic_category_white,
      onRemove: () => handleRemoveCategory(category),
    })),
    ...selectedDurations.map((duration) => ({
      type: "duration" as const,
      type: "duration" as const,
      value: duration,
      icon: AssetsImg.ic_clock_white,
      onRemove: () => handleRemoveDuration(duration),
    })),
    ...(dateRange
      ? [
          {
            type: "date" as const,
            type: "date" as const,
            value: dateRange.includes(" - ")
              ? dateRange
                  .split(" - ")
                  .map((date) => formatDateWithSuffix(date))
                  .join(" - ")
              : dateRange,
            icon: null,
            onRemove: () => handleRemoveDate(),
          },
        ]
      : []),
  ];



  useLayoutEffect(() => {
    const container = filtersContainerRef.current;
    if (!container || allFilters.length === 0) {
      setVisibleTags(0);
      setOverflowCount(0);
      return;
    }

    const resetButton = container.querySelector("[data-reset-button]");
    const resetButtonWidth = resetButton?.getBoundingClientRect().width || 0;

    const containerStyle = window.getComputedStyle(container);
    const padding =
      parseFloat(containerStyle.paddingLeft) +
      parseFloat(containerStyle.paddingRight);
    const gap = parseFloat(containerStyle.gap) || 8;

    const availableWidth =
      container.clientWidth - padding - resetButtonWidth - gap * 2;
    let totalWidth = 0;
    let visibleCount = 0;

    const tempDiv = document.createElement("div");
    tempDiv.style.visibility = "hidden";
    tempDiv.style.position = "absolute";
    document.body.appendChild(tempDiv);

    allFilters.forEach((filter) => {
      const tag = document.createElement("div");
      tag.style.display = "flex";
      tag.style.alignItems = "center";
      tag.style.padding = "4px 10px";
      tag.style.gap = "12px";
      tag.innerHTML = `
        <span>${filter.value}</span>
        <button >
          <img src="${AssetsImg.ic_cross_blue}" width="16" height="16" />
        </button>
      `;
      tempDiv.appendChild(tag);
      const width = tag.getBoundingClientRect().width + gap;
      if (totalWidth + width <= availableWidth) {
        totalWidth += width;
        visibleCount++;
      }
    });

    document.body.removeChild(tempDiv);
    const remaining = allFilters.length - visibleCount;
    setVisibleTags(remaining > 0 ? visibleCount : allFilters.length);
    setOverflowCount(remaining > 0 ? remaining : 0);
  }, [allFilters.length, selectedCategories, selectedDurations, dateRange]);

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

  const handleRemoveDate = () => {
    setDateRange("");
  };

  const handleRemoveHiddenFilters = () => {
    const hiddenFilters = allFilters.slice(visibleTags);

    hiddenFilters.forEach((filter) => {
      if (filter.type === "category") {
        handleRemoveCategory(filter.value);
      } else if (filter.type === "duration") {
        handleRemoveDuration(filter.value);
      } else if (filter.type === "date") {
        handleRemoveDate();
      }
    });
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setArticles(dummyArticles);
        setFilteredArticles(dummyArticles);
        setTimeout(() => setLoading(false), 1000);
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
          if (duration === "01 - 05 Mins") {
            return parseInt(readingTime) <= 5;
          } else if (duration === "05 - 10 Mins") {
            return parseInt(readingTime) > 5 && parseInt(readingTime) <= 10;
          } else if (duration === "10 - 20 Mins") {
            return parseInt(readingTime) > 10 && parseInt(readingTime) <= 20;
          } else if (duration === "20+ Mins") {
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

  return (
    <div css={main}>
      <div css={container}>
        <div css={headerFrame(isScrolled, allFilters.length > 0)}>
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
          {allFilters.length > 0 && (
            <div css={headerBelow} ref={filtersContainerRef}>
              <div css={selectedCategoriesContainer}>
                {allFilters.slice(0, visibleTags).map((filter, index) => (
                  <button
                    key={`${filter.type}-${filter.value}-${index}`}
                    css={categoryButton}
                  >
                    {filter.icon ? (
                      <Image
                        src={filter.icon}
                        css={clockIcon}
                        alt={filter.type}
                      />
                    ) : (
                      <i className="icon icon-calendar" css={clockIcon} />
                    )}
                    <span css={categoryText}>{filter.value}</span>
                    <Image
                      src={AssetsImg.ic_cross_blue}
                      css={closeIcon}
                      onClick={filter.onRemove}
                      alt="remove"
                    />
                  </button>
                ))}

                {overflowCount > 0 && (
                  <button
                    css={categoryButton}
                    onClick={handleRemoveHiddenFilters}
                  >
                    +{overflowCount} More
                    <Image
                      src={AssetsImg.ic_cross_blue}
                      css={closeIcon}
                      alt="remove"
                    />
                  </button>
                )}
                <div data-reset-button style={{marginLeft:"auto"}} >
                  <Button onClick={handleReset} size="small" type="secondary">
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div css={section} ref={sectionRef}>
          {error ? (
            <div>{error}</div>
          ) : (
            <div css={InsideSection}>
              {loading ? (
                Array.from({ length: 12 }).map((_, index) => (
                  <ArticleCard
                    key={index}
                    title={<Shimmer height={18} width={300} />}
                    link=""
                    imageUrl=""
                    date={<Shimmer height={20} width={120} />}
                    totalViews={<Shimmer height={20} width={120} />}
                    category={<Shimmer height={24} width={150} />}
                    description={<Shimmer height={38} width={300} />}
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
                        ? new Date(article.publishedAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )
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
          <NewsLetter isLoading={loading} />
          <Tradingbanner isLoading={loading} />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
