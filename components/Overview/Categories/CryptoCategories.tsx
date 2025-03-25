import React, { useState, useEffect } from "react";
import { Tabs, Tags, utils } from "zebpay-ui";
import Image from "next/image";
import * as styles from "./styles";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { css } from "@emotion/react";
import AssetsImg from "@public/images";
import { info } from "@actions/OverviewAPIs";
import { fetchZebstageCategories } from "@actions/OverviewAPIs";

interface CoinQuote {
  USD: {
    price: number;
    percent_change_24h: number;
  };
}

interface Coin {
  id: number;
  name: string;
  symbol: string;
  quote: CoinQuote;
}

interface TradePair {
  tradePairName: string;
  tradeCurrency: string;
  quoteCurrency: string;
  currencyName: string;
  categories: number[] | null;
  coinIcon: string;
}

interface ZebstageResponse {
  data: {
    tradePairs: TradePair[];
  };
}

interface CryptoCoin {
  name: string;
  fullName: string;
  price: string;
  change: number;
  isPositive: boolean;
  icon: string;
  categoryIds: number[];
  coinIcon: string;
}

const categoryMap: { [key: number]: string } = {
  10: "UTILITY",
  5: "SMART CONTRACTS",
  9: "DEFI",
  8: "GAMING AND METAVERSE",
};

const defaultCoinQuote: CoinQuote = {
  USD: {
    price: 0,
    percent_change_24h: 0,
  },
};

const defaultZebstageData: ZebstageResponse = {
  data: {
    tradePairs: [],
  },
};

const CryptoCategories: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("UTILITY");
  const [cryptoData, setCryptoData] = useState<CryptoCoin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const zebstageResponse = (await fetchZebstageCategories()) as ZebstageResponse;
        const zebstageData = zebstageResponse?.data?.tradePairs ? zebstageResponse : defaultZebstageData;

        const uniqueSymbols = Array.from(
          new Set(zebstageData.data.tradePairs.map((pair) => pair.tradeCurrency))
        );
        const symbols = uniqueSymbols.join(",");

        if (!symbols) {
          console.warn("No valid symbols found in Zebstage data, using empty list");
          setCryptoData([]);
          setLoading(false);
          return;
        }

        const coinData = await info({ symbol: symbols });

        const processedData: CryptoCoin[] = uniqueSymbols
          .map((symbol) => {
            const coin = coinData.data[symbol];
            if (!coin) {
              return null;
            }

            const quote = coin.quote || defaultCoinQuote;

            const tradePairs = zebstageData.data.tradePairs.filter(
              (pair) => pair.tradeCurrency === symbol
            );

            const categories = tradePairs
              .flatMap((pair) => pair.categories || [])
              .filter((id, index, self) => self.indexOf(id) === index);
            const coinIcon = tradePairs[0]?.coinIcon || "";

            return {
              name: coin.symbol || symbol,
              fullName: coin.name || tradePairs[0]?.currencyName || "Unknown",
              price: `₹ ${quote.USD.price.toFixed(2)}`,
              change: quote.USD.percent_change_24h,
              isPositive: quote.USD.percent_change_24h > 0,
              icon: `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`,
              categoryIds: categories.length ? categories : [4],
              coinIcon,
            };
          })
          .filter(Boolean) as CryptoCoin[];

        setCryptoData(processedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setCryptoData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCoins = cryptoData
    .filter((coin) => coin.categoryIds.some((id) => categoryMap[id] === activeCategory))
    .slice(0, 6);

  return (
    <div css={styles.cryptoCategoriesContainer}>
      <ShimmerWrapper
        isLoading={loading}
        height={28}
        width={200}
        mode="dark"
        style={css({ marginBottom: "1rem" })}
      >
        <span css={styles.title}>Other Categories</span>
      </ShimmerWrapper>
      <ShimmerWrapper
        isLoading={loading}
        height={28}
        width={800}
        mode="dark"
        style={css({ marginBottom: "1rem" })}
      >
        <div css={styles.categoryButtons}>
          <Tabs
            onChange={(tab) => setActiveCategory(tab)}
            selectedTab={activeCategory}
            tabsList={[
              { tab: "UTILITY", title: <>UTILITY</> },
              { tab: "SMART CONTRACTS", title: "SMART CONTRACTS" },
              { tab: "DEFI", title: "DEFI" },
              { tab: "GAMING AND METAVERSE", title: "GAMING AND METAVERSE" },
            ]}
            type="secondary"
          />
        </div>
      </ShimmerWrapper>
      <div css={styles.cryptoCardsContainer}>
        {loading ? (
          // Display 6 shimmer placeholders instead of "loading..."
          Array.from({ length: 6 }).map((_, index) => (
            <ShimmerWrapper
              width={316}
              height={146}
              isLoading={loading}
              mode="dark"           
              />
          ))
        ) : filteredCoins.length === 0 ? (
          <div>No coins available for {activeCategory}</div>
        ) : (
          filteredCoins.map((crypto, index) => (
            <div key={index} css={styles.cryptoCard}>
              <div css={{ display: "flex", justifyContent: "space-between" }}>
                <div css={{ display: "flex", flexDirection: "column" }}>
                  <span css={{ fontSize: utils.remConverter(16), fontWeight: 700 }}>
                    {crypto.name}
                  </span>
                  <span css={styles.cryptoName}>{crypto.fullName}</span>
                </div>
                <Image
                  src={crypto.coinIcon || crypto.icon}
                  alt={crypto.name}
                  width={40}
                  height={40}
                />
              </div>
              <div
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: utils.remConverter(16),
                }}
              >
                <div css={{ display: "flex", flexDirection: "column" }}>
                  <span css={styles.cryptoPrice}>{crypto.price}</span>
                  <Tags
                    size="medium"
                    type={crypto.isPositive ? "success" : "error"}
                    css={styles.cryptoChange}
                  >
                    {crypto.isPositive ? "↑" : "↓"} {Math.abs(crypto.change).toFixed(2)}%
                  </Tags>
                </div>
                <button css={styles.viewMoreButton}>
                  <Image
                    src={AssetsImg.ic_arrow_right}
                    alt="arrow right"
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CryptoCategories;