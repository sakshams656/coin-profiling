/** @jsxImportSource @emotion/react */
"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  main,
  container,
  headerFrame,
  header,
  section,
  news,
  filterAndUpdownFrame,
  filter,
  updown,
  innerDiv,
  innerCard,
  newsletter,
  newsChild,
  newsHeader,
  mailIcon,
  heading,
  quote,
  form,
  tradingBanner,
  topology,
  frame,
  anotherFrame,
  zebpayImageDiv,
  textWrapper,
  title,
  subtitle,
  buttonGroup,
  appButton,
  KYC,
  subSucess,
  subText,
  zebpayZebra,
  filterTagsContainer, filterTag, resetTagButton
} from "./styles"
import { getCryptoNews } from "./APIservice/apiService";
import ArticleCard from "./ArticleCard/ArticleCard";
import FilterSidePanel from "../Shared/SidePanel/FilterSidePanel";
import SkeletonWrapper from "./skeletonWrapper/SkeletonWrapper";
import NoNewsFound from "./NoNewsFound/NoNewsFound";
import EmailSubscription from "./emailSubscription/EmailSubcription";
import { Button } from "zebpay-ui";
import Image from "next/image";
import AssetsImg from "@public/images";

interface Article {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
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

interface Filters {
  publishers: string[];
  durations: string[];
  dateRange: string | null;
}

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNewContent, setShowNewContent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [filters, setFilters] = useState<Filters>({
    publishers: [],
    durations: [],
    dateRange: null,
  });

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
        newFilters.publishers.some((publisher) => articleDomain.toLowerCase().includes(publisher.toLowerCase()));

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
    setFilteredArticles(articles);
  };

  const handleRemoveFilter = (type: keyof Filters, value: string) => {
    setFilters((prev) => {
      if (type === "publishers") {
        return { ...prev, publishers: prev.publishers.filter((p) => p !== value) };
      } else if (type === "durations") {
        return { ...prev, durations: prev.durations.filter((d) => d !== value) };
      } else {
        return { ...prev, dateRange: null };
      }
    });

    handleApplyFilters({
      ...filters,
      [type]: type === "dateRange" ? null : (filters[type] as string[]).filter((v) => v !== value),
    });
  };

  return (
    <div css={main}>
      <div css={container}>
        <div css={headerFrame(isScrolled)}>
          <div css={header}>
            <div css={news}>Crypto News</div>
            <div css={filterAndUpdownFrame}>
              <div css={filter}>
                <FilterSidePanel onApplyFilters={handleApplyFilters} onResetFilters={handleResetFilters} />
              </div>
              <div css={updown}>
                
              </div>
            </div>
          </div>
          {(filters.publishers.length > 0 || filters.durations.length > 0 || filters.dateRange) && (
            <div css={filterTagsContainer}>
              {filters.publishers.map((publisher) => (
                <span key={publisher} css={filterTag}>
                  <img src="/icons/document.svg" alt="Publisher" /> {publisher}{" "}
                  <button onClick={() => handleRemoveFilter("publishers", publisher)}>×</button>
                </span>
              ))}
              {filters.durations.map((duration) => (
                <span key={duration} css={filterTag}>
                  <img src="/icons/clock.png" alt="Duration" /> {duration}{" "}
                  <button onClick={() => handleRemoveFilter("durations", duration)}>×</button>
                </span>
              ))}
              {filters.dateRange && (
                <span css={filterTag}>
                  <img src="/icons/calendar.png" alt="Date" /> {filters.dateRange}{" "}
                  <button onClick={() => handleRemoveFilter("dateRange", filters.dateRange)}>×</button>
                </span>
              )}
              <Button
                size="small"
                type="secondary"
                css={resetTagButton}
                onClick={handleResetFilters}
              >
                RESET
              </Button>
            </div>
          )}
        </div>
        <div css={section} ref={sectionRef}>
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
                <ArticleCard key={index} loading />
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
      <div css={innerDiv}>
        <div css={innerCard}>
          <div css={newsletter}>
            <div css={newsChild}>
              {showNewContent ? (
                <div>
                  <div css={KYC}>
                    <Image src={AssetsImg.ic_kyc} alt="kyc"/>
                  </div>
                  <div css={subSucess}>Subscription Successful!</div>
                  <div css={subText}>
                    Thank you for subscribing! You'll now receive the latest crypto news and updates straight to your inbox
                  </div>
                  <div css={zebpayZebra}>
                    <Image src={AssetsImg.ic_zebra} alt="zebra"/>
                  </div>
                </div>
              ) : (
                <>
                  <div css={newsHeader}>
                    {loading ? (
                      <SkeletonWrapper isLoading={loading} height={80} width={80} borderRadius={4} />
                    ) : (
                      <div css={mailIcon}>
                        <Image src={AssetsImg.ic_mail} alt="mail"/>
                      </div>
                    )}
                    {loading ? (
                      <SkeletonWrapper isLoading={loading} height={28} width={220} borderRadius={4} />
                    ) : (
                      <div css={heading}>ZebPay Weekly Newsletter!</div>
                    )}
                    {loading ? (
                      <SkeletonWrapper isLoading={loading} height={48} width={255} borderRadius={4} />
                    ) : (
                      <div css={quote}>
                        Subscribe for the latest crypto news & stay updated!
                      </div>
                    )}
                  </div>
                  {loading ? (
                    <SkeletonWrapper isLoading={loading} height={20} width={220} borderRadius={4} />
                  ) : (
                    <div css={form}>
                      <EmailSubscription onSubscribe={onSubscribe} />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div css={tradingBanner}>
            <div css={topology}></div>
            <div css={frame}>
              <div css={anotherFrame}>
                {loading ? (
                  <SkeletonWrapper isLoading={loading} height={70} width={70} borderRadius={4} />
                ) : (
                  <div css={zebpayImageDiv}>
                    <Image src={AssetsImg.ic_zebpayCoin} alt="zeb coin"/>
                  </div>
                )}
                <div css={textWrapper}>
                  {loading ? (
                    <SkeletonWrapper isLoading={loading} height={30} width={200} borderRadius={4} />
                  ) : (
                    <div css={title}>Stay Informed, Trade Smart</div>
                  )}
                  {loading ? (
                    <SkeletonWrapper isLoading={loading} height={45} width={300} borderRadius={4} />
                  ) : (
                    <div css={subtitle}>
                      Get real-time crypto updates and trade Crypto on ZebPay. Download now!
                    </div>
                  )}
                </div>
              </div>
              <div css={buttonGroup}>
                {loading ? (
                  <SkeletonWrapper isLoading={loading} height={35} width={140} borderRadius={2} />
                ) : (
                  <button css={appButton}>
                    <Image src={AssetsImg.ic_appstore} alt="playstore"/>
                  </button>
                )}
                {loading ? (
                  <SkeletonWrapper isLoading={loading} height={35} width={140} borderRadius={2} />
                ) : (
                  <button css={appButton}>
                    <Image src={AssetsImg.ic_playstore} alt="playstore"/>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;