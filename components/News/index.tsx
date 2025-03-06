/** @jsxImportSource @emotion/react */
"use client";

import React, { useEffect, useState, useRef } from "react";
import * as styles from "./styles";
import { getCryptoNews } from "./APIservice/apiService";
import ArticleCard from "./ArticleCard/ArticleCard";
import FilterSidePanel from "../Shared/SidePanel/FilterSidePanel";
import ShimmerWrapper from "../Shared/ShimmerWrapper/ShimmerWrapper";
import NoNewsFound from "./NoNewsFound/NoNewsFound";
import EmailSubscription from "./emailSubscription/EmailSubcription";
import {Button} from "zebpay-ui";
import Image from "next/image";
import AssetsImg from "@public/images";

interface Article {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface DateRange {
  startDate: string;
  endDate: string;
}

interface Filters {
  publishers: string[];
  durations: string[];
  dateRange: string | null;
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
    case "01-05 Mins":
      return minutes >= 1 && minutes <= 5;
    case "05-10 Mins":
      return minutes > 5 && minutes <= 10;
    case "10-20 Mins":
      return minutes > 10 && minutes <= 20;
    case "20+ Mins":
      return minutes > 20;
    default:
      return false;
  }
};

const isInDateRange = (publishedAt: string, range: string | null) => {
  const articleDate = new Date(publishedAt);
  const now = new Date();

  if (!range || !isValidDate(publishedAt)) return true;

  if (range.includes(" - ")) {
    const [startDate, endDate] = range.split(" - ").map((d) => new Date(d));
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

  // Lifted state from FilterSidePanel
  const [filters, setFilters] = useState<Filters>({
    publishers: [],
    durations: [],
    dateRange: null,
  }); 
  const [accordionStates, setAccordionStates] = useState({
    publishedBy: false,
    duration: false,
    dateRange: false,
  });
  const [customDateRange, setCustomDateRange] = useState<DateRange | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

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
      if (sectionRef.current) {
        setIsScrolled(sectionRef.current.scrollTop > 0);
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

  const handleApplyFilters = (newFilters: Filters) => {
    setFilters(newFilters);

    const filtered = articles.filter((article) => {
      const articleDomain = getDomain(article.url);
      const readingTimeMinutes = calculateReadingTime(article.content);

      const matchesPublisher =
        newFilters.publishers.length === 0 ||
        newFilters.publishers.some((publisher) =>
          articleDomain.toLowerCase().includes(publisher.toLowerCase())
        );

      const matchesDuration =
        newFilters.durations.length === 0 ||
        newFilters.durations.some((duration) => isInDurationRange(readingTimeMinutes, duration));

      const matchesDateRange = isInDateRange(article.publishedAt, newFilters.dateRange);

      return matchesPublisher && matchesDuration && matchesDateRange;
    });

    setFilteredArticles(filtered);
  };

  const handleResetFilters = () => {
    setFilters({ publishers: [], durations: [], dateRange: null });
    setAccordionStates({ publishedBy: false, duration: false, dateRange: false });
    setCustomDateRange(null);
    setSearchTerm("");
    setFilteredArticles(articles);
  };

  const handleRemoveFilter = (type: keyof Filters, value: string) => {
    setFilters((prev) => {
      if (type === "publishers") {
        return { ...prev, publishers: prev.publishers.filter((p) => p !== value) };
      } else if (type === "durations") {
        return { ...prev, durations: prev.durations.filter((d) => d !== value) };
      } else {
        return { ...prev, dateRange: null, customDateRange: null };
      }
    });

    handleApplyFilters({
      ...filters,
      [type]: type === "dateRange" ? null : (filters[type] as string[]).filter((v) => v !== value),
    });
  };

  // Handle sort option selection
  const handleSortSelect = (option: string) => {
    setSelectedSort(option);
    setIsSorterOpen(false);
    // Apply sorting logic here based on the selected option
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

  // Close dropdown when clicking outside
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
                  filters={filters}
                  setFilters={setFilters}
                  accordionStates={accordionStates}
                  setAccordionStates={setAccordionStates}
                  customDateRange={customDateRange}
                  setCustomDateRange={setCustomDateRange}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
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
                  <div
                    css={styles.sorterDropdown}
                    ref={sorterRef}
                  >
                    {["Latest", "Trending", "Duration - Short to Long"].map((option) => (
                      <button
                        key={option}
                        css={styles.sorterItem}
                        onClick={() => handleSortSelect(option)}
                      >
                        <span>{option}</span>
                        {selectedSort === option && (
                          <span
                            css={styles.sorterCheckmark}
                          >
                            <Image src={AssetsImg.ic_tick} alt="tick" height={16} width={16}></Image>
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          {(filters.publishers.length > 0 || filters.durations.length > 0 || filters.dateRange) && (
            <div css={styles.filterTagsContainer}>
              {filters.publishers.map((publisher) => (
                <span key={publisher} css={styles.filterTag}>
                  <Image src={AssetsImg.ic_document} alt="doc" /> {publisher}{" "}
                  <button onClick={() => handleRemoveFilter("publishers", publisher)}>
                    <Image src={AssetsImg.ic_cross} alt="cross" width={16} height={16} />
                  </button>
                </span>
              ))}
              {filters.durations.map((duration) => (
                <span key={duration} css={styles.filterTag}>
                  <Image src={AssetsImg.ic_clock} alt="doc" /> {duration}{" "}
                  <button onClick={() => handleRemoveFilter("durations", duration)}>
                    <Image src={AssetsImg.ic_cross} alt="cross" width={16} height={16} />
                  </button>
                </span>
              ))}
              {filters.dateRange && (
                <span css={styles.filterTag}>
                  <Image src={AssetsImg.ic_calendar} alt="doc" /> {filters.dateRange}{" "}
                  <button onClick={() => handleRemoveFilter("dateRange", filters.dateRange)}>
                    <Image src={AssetsImg.ic_cross} alt="cross" width={16} height={16} />
                  </button>
                </span>
              )}
              <div css={{ marginLeft: "auto", borderRadius: "0.2rem" }}>
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
            {/* <Image src={AssetsImg.ic_tb_gradient} alt={"gradient"}></Image> */}
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
                  <ShimmerWrapper isLoading={loading} height={45} width={300} typeLightdDark>
                    <div css={styles.subtitle}>
                      Get real-time crypto updates and trade Crypto on ZebPay. Download now!
                    </div>
                  </ShimmerWrapper>
                </div>
              </div>
              <div css={styles.buttonGroup}>
                <ShimmerWrapper isLoading={loading} height={35} width={140} typeLightdDark>
                  <button css={styles.appButton}>
                    <Image src={AssetsImg.ic_appstore} alt="playstore" />
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