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
  quote?: CoinQuote;
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
  change: number | null;
  isPositive: boolean | null;
  icon: string;
  categoryIds: number[];
  coinIcon: string;
}

const categoryMap: { [key: number]: string } = {
  4: "LAYER 1",
  5: "SMART CONTRACTS",
  9: "DEFI",
  8: "GAMING AND METAVERSE",
};

const CryptoCategories: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("LAYER 1");
  const [cryptoData, setCryptoData] = useState<CryptoCoin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const zebstageData = (await fetchZebstageCategories()) as ZebstageResponse;
        //console.log("Zebstage Data:", JSON.stringify(zebstageData, null, 2));

        const uniqueSymbols = Array.from(
          new Set(zebstageData.data.tradePairs.map((pair) => pair.tradeCurrency))
        );
        const symbols = uniqueSymbols.join(",");
        //console.log("Symbols:", symbols);

        if (!symbols) {
          throw new Error("No valid symbols found in Zebstage data");
        }

        const coinData = await info({ symbol: symbols });
        //console.log("Raw CoinMarketCap Data:", JSON.stringify(coinData, null, 2));

        const processedData: CryptoCoin[] = uniqueSymbols
          .map((symbol) => {
            const coin = coinData.data[symbol];
            if (!coin) {
              //console.log(`No coin data for symbol: ${symbol}`);
              return null;
            }

            const quote = coin.quote?.USD;
            if (!quote) {
              //console.log(`No USD quote for symbol: ${symbol}`, coin);
            }

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
              price: quote ? `$${quote.price.toFixed(2)}` : "N/A",
              change: quote ? quote.percent_change_24h : null,
              isPositive: quote ? quote.percent_change_24h > 0 : null,
              icon: `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`,
              categoryIds: categories.length ? categories : [4], 
              coinIcon,
            };
          })
          .filter(Boolean) as CryptoCoin[];

        setCryptoData(processedData);
        //console.log("Processed Data:", JSON.stringify(processedData, null, 2));
      } catch (error) {
        //console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCoins = cryptoData
    .filter((coin) => coin.categoryIds.some((id) => categoryMap[id] === activeCategory))
    .slice(0, 6);

  //console.log("Filtered Coins:", JSON.stringify(filteredCoins, null, 2));

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
              { tab: "LAYER 1", title: <>LAYER 1</> },
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
          <div>Loading...</div>
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
                  {crypto.change !== null && crypto.isPositive !== null ? (
                    <span
                      css={[
                        styles.cryptoChange,
                        crypto.isPositive ? "positive" : "negative",
                      ]}
                    >
                      <Tags
                        size="medium"
                        style={{ name: "1pzk433", styles: "width:100px" }}
                        type="success"
                      >
                        {crypto.isPositive ? "↑" : "↓"} {Math.abs(crypto.change)}%
                      </Tags>
                    </span>
                  ) : (
                    <span css={styles.cryptoChange}>N/A</span>
                  )}
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