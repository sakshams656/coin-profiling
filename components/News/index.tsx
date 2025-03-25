import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import * as styles from "./styles";
import { getCryptoNews } from "./APIservice/apiService";
import ArticleCard from "./ArticleCard/ArticleCard";
import FilterSidePanel from "../Shared/SidePanel";
import ShimmerWrapper from "../Shared/ShimmerWrapper/ShimmerWrapper";
import NoNewsFound from "./NoNewsFound/NoNewsFound";
import EmailSubscription from "./emailSubscription/EmailSubcription";
import { Button, utils } from "zebpay-ui";
import Image from "next/image";
import AssetsImg from "@public/images";

interface Article {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Filters {
  publishers: string[];
  durations: string[];
  dateRange: string | null;
}

interface FilterItem {
  type: keyof Filters;
  value: string;
}

const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  return Math.ceil(minutes);
};

const getDomain = (url: string) => {
  try {
    const { hostname } = new URL(url);
    return hostname.startsWith("www.") ? hostname.slice(4) : hostname;
  } catch {
    return "Unknown";
  }
};

const isInDurationRange = (minutes: number, range: string) => {
  switch (range) {
    case "01 - 05 Mins":
      return minutes >= 1 && minutes <= 5;
    case "05 - 10 Mins":
      return minutes > 5 && minutes <= 10;
    case "10 - 20 Mins":
      return minutes > 10 && minutes <= 20;
    case "20+ Mins":
      return minutes > 20;
    default:
      return false;
  }
};

const parseCustomDateRange = (range: string): { startDate: Date; endDate: Date } => {
  const [start, end] = range.split(" - ");
  const parseDate = (dateStr: string): Date => {
    const [dayStr, monthStr, yearStr] = dateStr.split(" ");
    const day = parseInt(dayStr.replace(/[^0-9]/g, ""), 10);
    const month = new Date(`${monthStr} 1`).getMonth();
    const year = parseInt(`20${yearStr}`, 10);
    return new Date(year, month, day);
  };
  return {
    startDate: parseDate(start),
    endDate: parseDate(end),
  };
};

const isInDateRange = (publishedAt: string, range: string | null) => {
  const articleDate = new Date(publishedAt);
  const now = new Date();

  if (!range || !isValidDate(publishedAt)) return true;

  if (range.includes(" - ")) {
    const { startDate, endDate } = parseCustomDateRange(range);
    return articleDate >= startDate && articleDate <= endDate;
  }

  switch (range) {
    case "Last 7 Days":
      return articleDate > new Date(now.setDate(now.getDate() - 7));
    case "Last 1 Month":
      return articleDate > new Date(now.setMonth(now.getMonth() - 1));
    case "Last 3 Months":
      return articleDate > new Date(now.setMonth(now.getMonth() - 3));
    case "Last 1 Year":
      return articleDate > new Date(now.setFullYear(now.getFullYear() - 1));
    default:
      return true;
  }
};

const isValidDate = (date: string): boolean => !isNaN(Date.parse(date));

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNewContent, setShowNewContent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleTags, setVisibleTags] = useState(0);
  const [overflowCount, setOverflowCount] = useState(0);

  const [activeFilters, setActiveFilters] = useState<Filters>({
    publishers: [],
    durations: [],
    dateRange: null,
  });

  const activeFiltersArray: FilterItem[] = [
    ...activeFilters.publishers.map((value) => ({ type: "publishers" as const, value })),
    ...activeFilters.durations.map((value) => ({ type: "durations" as const, value })),
    ...(activeFilters.dateRange ? [{ type: "dateRange" as const, value: activeFilters.dateRange }] : []),
  ];

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || activeFiltersArray.length === 0) {
      setVisibleTags(0);
      setOverflowCount(0);
      return;
    }

    const resetButton = container.querySelector('[data-reset-button]');
    const resetButtonWidth = resetButton?.getBoundingClientRect().width || 0;

    const containerStyle = window.getComputedStyle(container);
    const padding = parseFloat(containerStyle.paddingLeft) + parseFloat(containerStyle.paddingRight);
    const gap = parseFloat(containerStyle.gap) || 8;

    const availableWidth = container.clientWidth - padding - resetButtonWidth - gap;
    let totalWidth = 0;
    let visibleCount = 0;

    const tempDiv = document.createElement("div");
    tempDiv.style.visibility = "hidden";
    tempDiv.style.position = "absolute";
    tempDiv.style.display = "flex";
    tempDiv.style.gap = `${gap}px`;
    document.body.appendChild(tempDiv);

    const moreTag = document.createElement("div");
    moreTag.style.display = "flex";
    moreTag.style.alignItems = "center";
    moreTag.style.padding = `${utils.remConverter(6)} ${utils.remConverter(10)}`;
    moreTag.style.gap = utils.remConverter(6);
    moreTag.style.whiteSpace = "nowrap";
    moreTag.innerHTML = `
      <span>+X More</span>
      <button style="margin-left: ${utils.remConverter(6)};">
        <img src="${AssetsImg.ic_cross}" width="16" height="16" />
      </button>
    `;
    tempDiv.appendChild(moreTag);
    const moreTagWidth = moreTag.getBoundingClientRect().width + gap;

    for (const filter of activeFiltersArray) {
      const tag = document.createElement("div");
      tag.style.display = "flex";
      tag.style.alignItems = "center";
      tag.style.padding = `${utils.remConverter(6)} ${utils.remConverter(10)}`;
      tag.style.gap = utils.remConverter(6);
      tag.style.whiteSpace = "nowrap";
      tag.innerHTML = `
        <img src="${
          filter.type === "publishers"
            ? AssetsImg.ic_document
            : filter.type === "durations"
            ? AssetsImg.ic_clock
            : AssetsImg.ic_calendar
        }" width="16" height="16" />
        <span>${filter.value}</span>
        <button style="margin-left: ${utils.remConverter(6)};">
          <img src="${AssetsImg.ic_cross}" width="16" height="16" />
        </button>
      `;
      tempDiv.appendChild(tag);
      const tagWidth = tag.getBoundingClientRect().width + gap;

      const remainingTags = activeFiltersArray.length - (visibleCount + 1);
      const widthWithMore = totalWidth + tagWidth + (remainingTags > 0 ? moreTagWidth : 0);
      if (widthWithMore <= availableWidth) {
        totalWidth += tagWidth - 46;
        visibleCount++;
      } else {
        break;
      }
    }

    document.body.removeChild(tempDiv);

    const remaining = activeFiltersArray.length - visibleCount;
    const finalVisibleCount = remaining > 0 ? Math.max(0, visibleCount - 1) : visibleCount;
    setVisibleTags(finalVisibleCount);
    setOverflowCount(remaining > 0 ? remaining + (visibleCount > 0 ? 1 : 0) : 0);
  }, [activeFiltersArray.length]);

  const [resetTrigger, setResetTrigger] = useState(0);

  const [isSorterOpen, setIsSorterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Latest");
  const sorterRef = useRef<HTMLDivElement>(null);
  const sorterButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedArticles = await getCryptoNews();
        setArticles(fetchedArticles);
        setFilteredArticles(fetchedArticles);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching cryptocurrency news:", err);
        setError("Failed to fetch news.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = sectionRef.current;
      if (element) {
        if (element.scrollTop > 0) {
          element.classList.add("scrolled");
        } else {
          element.classList.remove("scrolled");
        }
      }
    };

    const sectionElement = sectionRef.current;
    sectionElement?.addEventListener("scroll", handleScroll);

    return () => {
      sectionElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onSubscribe = () => {
    setShowNewContent(true);
  };

  const applyFilters = (filters: Filters) => {
    const filtered = articles.filter((article) => {
      const articleDomain = getDomain(article.url);
      const readingTimeMinutes = calculateReadingTime(article.content);

      const matchesPublisher =
        filters.publishers.length === 0 ||
        filters.publishers.some((publisher) =>
          articleDomain.toLowerCase().includes(publisher.toLowerCase())
        );

      const matchesDuration =
        filters.durations.length === 0 ||
        filters.durations.some((duration) => isInDurationRange(readingTimeMinutes, duration));

      const matchesDateRange = isInDateRange(article.publishedAt, filters.dateRange);

      return matchesPublisher && matchesDuration && matchesDateRange;
    });

    setFilteredArticles(filtered);
  };

  const handleApplyFilters = (newFilters: Filters) => {
    setActiveFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleResetFilters = () => {
    const resetFilters: Filters = { publishers: [], durations: [], dateRange: null };
    setActiveFilters(resetFilters);
    setFilteredArticles(articles); // Reset filtered articles to original list
    setResetTrigger((prev) => prev + 1); // Trigger reset in FilterSidePanel
  };

  const handleRemoveFilter = (type: keyof Filters, value: string) => {
    const updatedFilters = {
      ...activeFilters,
      [type]: type === "dateRange" ? null : activeFilters[type].filter((v) => v !== value),
    };
    setActiveFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const handleRemoveHiddenFilters = () => {
    const hiddenFilters = activeFiltersArray.slice(visibleTags);
    const updatedFilters = { ...activeFilters };

    hiddenFilters.forEach((filter) => {
      if (filter.type === "publishers") {
        updatedFilters.publishers = updatedFilters.publishers.filter((v) => v !== filter.value);
      } else if (filter.type === "durations") {
        updatedFilters.durations = updatedFilters.durations.filter((v) => v !== filter.value);
      } else if (filter.type === "dateRange") {
        updatedFilters.dateRange = null;
      }
    });

    setActiveFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const handleSortSelect = (option: string) => {
    setSelectedSort(option);
    setIsSorterOpen(false);
    let sortedArticles = [...filteredArticles];
    switch (option) {
      case "Latest":
        sortedArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case "Trending":
        sortedArticles.sort((a, b) => b.title.length - a.title.length);
        break;
      case "Duration - Short to Long":
        sortedArticles.sort((a, b) => calculateReadingTime(a.content) - calculateReadingTime(b.content));
        break;
      default:
        break;
    }
    setFilteredArticles(sortedArticles);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sorterRef.current &&
        !sorterRef.current.contains(event.target as Node) &&
        sorterButtonRef.current &&
        !sorterButtonRef.current.contains(event.target as Node)
      ) {
        setIsSorterOpen(false);
      }
    };

    if (isSorterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSorterOpen]);

  return (
    <div css={styles.main}>
      <div css={styles.container}>
        <div css={styles.headerFrame(isScrolled)}>
          <div css={styles.header}>
            <div css={styles.news}>Crypto News</div>
            <div css={styles.filterAndUpdownFrame}>
              <div css={styles.filter}>
                <FilterSidePanel
                  onApplyFilters={handleApplyFilters}
                  onResetFilters={handleResetFilters}
                  resetTrigger={resetTrigger}
                />
              </div>
              <div css={styles.updown}>
                <button
                  css={styles.sorterIcon}
                  ref={sorterButtonRef}
                  onClick={() => setIsSorterOpen((prev) => !prev)}
                >
                  <Image src={AssetsImg.ic_sorter} alt="sorter" height={16} width={16} />
                </button>
                {isSorterOpen && (
                  <div css={styles.sorterDropdown} ref={sorterRef}>
                    {["Latest", "Trending", "Duration - Short to Long"].map((option) => (
                      <button
                        key={option}
                        css={styles.sorterItem}
                        onClick={() => handleSortSelect(option)}
                      >
                        <span>{option}</span>
                        {selectedSort === option && (
                          <span css={styles.sorterCheckmark}>
                            <Image src={AssetsImg.ic_tick} alt="tick" height={16} width={16} />
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          {activeFiltersArray.length > 0 && (
            <div css={styles.filterTagsContainer} ref={containerRef}>
              <div css={styles.tagsWrapper}>
                {activeFiltersArray.slice(0, visibleTags).map((filter) => (
                  <span key={`${filter.type}-${filter.value}`} css={styles.filterTag}>
                    <Image
                      src={
                        filter.type === "publishers"
                          ? AssetsImg.ic_document
                          : filter.type === "durations"
                          ? AssetsImg.ic_clock
                          : AssetsImg.ic_calendar
                      }
                      alt="icon"
                      width={16}
                      height={16}
                    />
                    {filter.value}
                    <button onClick={() => handleRemoveFilter(filter.type, filter.value)}>
                      <Image src={AssetsImg.ic_cross} alt="cross" width={16} height={16} />
                    </button>
                  </span>
                ))}
                {overflowCount > 0 && (
                  <span css={styles.filterTag}>
                    +{overflowCount} More
                    <button onClick={handleRemoveHiddenFilters}>
                      <Image src={AssetsImg.ic_cross} alt="cross" width={16} height={16} />
                    </button>
                  </span>
                )}
              </div>
              <div data-reset-button css={styles.resetTagButton}>
                <Button
                  size="small"
                  type="secondary"
                  css={styles.resetTagButton}
                  onClick={handleResetFilters}
                >
                  RESET
                </Button>
              </div>
            </div>
          )}
        </div>
        <div css={styles.section} ref={sectionRef}>
          {error ? (
            <div>{error}</div>
          ) : loading ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridAutoRows: "auto",
                gap: "1rem",
                width: "100%",
              }}
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <ArticleCard
                  key={index}
                  loading={loading}
                  title=""
                  link=""
                  imageUrl=""
                  date=""
                  readingTime=""
                  domain=""
                />
              ))}
            </div>
          ) : filteredArticles.length === 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                minHeight: "50vh",
                width: "100%",
              }}
            >
              <NoNewsFound onResetFilters={handleResetFilters} />
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridAutoRows: "auto",
                gap: "1rem",
                width: "100%",
              }}
            >
              {filteredArticles.map((article, index) => (
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
                          year: "2-digit",
                        })
                      : "Unknown Date"
                  }
                  readingTime={`${calculateReadingTime(article.content)} min read`}
                  domain={getDomain(article.url)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div css={styles.innerDiv}>
        <div css={styles.innerCard}>
          <div css={styles.newsletter}>
            <div css={styles.newsChild}>
              {showNewContent ? (
                <div>
                  <ShimmerWrapper isLoading={loading} height={104} width={100} mode="dark">
                    <div css={styles.KYC}>
                      <Image src={AssetsImg.ic_kyc} alt="kyc" />
                    </div>
                  </ShimmerWrapper>
                  <ShimmerWrapper isLoading={loading} height={20} width={200} mode="dark">
                    <div css={styles.subSucess}>Subscription Successful!</div>
                  </ShimmerWrapper>
                  <ShimmerWrapper isLoading={loading} height={48} width={300} mode="dark">
                    <div css={styles.subText}>
                      Thank you for subscribing! You'll now receive the latest crypto news and updates straight to your inbox
                    </div>
                  </ShimmerWrapper>
                  <ShimmerWrapper isLoading={loading} height={120} width={120} mode="dark">
                    <div css={styles.zebpayZebra}>
                      <Image src={AssetsImg.ic_zebra} alt="zebra" />
                    </div>
                  </ShimmerWrapper>
                </div>
              ) : (
                <>
                  <div css={styles.newsHeader}>
                    <ShimmerWrapper isLoading={loading} height={80} width={80} mode="dark">
                      <div css={styles.mailIcon}>
                        <Image src={AssetsImg.ic_mail} alt="mail" />
                      </div>
                    </ShimmerWrapper>
                    <ShimmerWrapper isLoading={loading} height={28} width={220} mode="dark">
                      <div css={styles.heading}>ZebPay Weekly Newsletter!</div>
                    </ShimmerWrapper>
                    <ShimmerWrapper isLoading={loading} height={48} width={255} mode="dark">
                      <div css={styles.quote}>
                        Subscribe for the latest crypto news & stay updated!
                      </div>
                    </ShimmerWrapper>
                  </div>
                  <ShimmerWrapper isLoading={loading} height={34} width={255} mode="dark">
                    <div css={styles.form}>
                      <EmailSubscription onSubscribe={onSubscribe} />
                    </div>
                  </ShimmerWrapper>
                </>
              )}
            </div>
          </div>
          <div css={styles.tradingBanner}>
            <div></div>
            <div css={styles.frame}>
              <div css={styles.anotherFrame}>
                <ShimmerWrapper isLoading={loading} height={70} width={70} typeLightdDark>
                  <div css={styles.zebpayImageDiv}>
                    <Image src={AssetsImg.ic_zebpayCoin} alt="zeb coin" />
                  </div>
                </ShimmerWrapper>
                <div css={styles.textWrapper}>
                  <ShimmerWrapper isLoading={loading} height={30} width={220} typeLightdDark>
                    <div css={styles.title}>Stay Informed, Trade Smart</div>
                  </ShimmerWrapper>
                  <ShimmerWrapper isLoading={loading} height={45} width={280} typeLightdDark>
                    <div css={styles.subtitle}>
                      Get real-time crypto updates and trade Crypto on ZebPay. Download now!
                    </div>
                  </ShimmerWrapper>
                </div>
              </div>
              <div css={styles.buttonGroup}>
                <ShimmerWrapper isLoading={loading} height={35} width={140} typeLightdDark>
                  <button css={styles.appButton}>
                    <Image src={AssetsImg.ic_appstore} alt="appstore" />
                  </button>
                </ShimmerWrapper>
                <ShimmerWrapper isLoading={loading} height={35} width={140} typeLightdDark>
                  <button css={styles.appButton}>
                    <Image src={AssetsImg.ic_playstore} alt="playstore" />
                  </button>
                </ShimmerWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;