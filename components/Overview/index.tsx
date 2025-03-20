import Image from "next/image";
import * as styles from "./styles"; 
import { dummyCoinData } from "../../Data/DummyCoinData"; 
import { Button, Divider, Input, InputDropDown, Tabs, Tags, utils } from "zebpay-ui";
import Statistics from "./Statistics/Statistics";
import AssetsImg from "@public/images";
import CoinInfo from "./CoinInformation/CoinInfo"; 
import PerformanceGraph from "./Graph/PerformanceGraph"; 
import CryptoCategories from "./Categories/CryptoCategories"; 
import NOOB from "@constants/noob";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { useEffect, useState, useRef } from "react";
import { css } from "@emotion/react";
import { data as fetchCoinData, info as fetchCoinInfo } from "@actions/OverviewAPIs";

interface InputTargetProps {
  value: string | number;
  name?: string;
}

interface OverviewProps {
  coinSymbol: string; 
}

const Overview: React.FC<OverviewProps> = ({ coinSymbol }) => {
  const [loading, setLoading] = useState(true);
  const [amountInvested, setAmountInvested] = useState<string | number>("");
  const [investmentFrequency, setInvestmentFrequency] = useState<string>("");
  const [timePeriod, setTimePeriod] = useState<string>("6M");
  const [coinData, setCoinData] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!coinSymbol) return;

      try {
        const [infoResponse, dataResponse] = await Promise.all([
          fetchCoinInfo({ symbol: coinSymbol }),
          fetchCoinData({ symbol: coinSymbol }),
        ]);

        console.log("CoinMarketCap Quotes Response:", JSON.stringify(infoResponse.data, null, 2));
        console.log("CoinMarketCap Info Response:", JSON.stringify(dataResponse.data, null, 2));

        const coinInfo = infoResponse.data?.[coinSymbol]?.[0];
        const coinMeta = dataResponse.data?.[coinSymbol]?.[0];

        //console.log("coinInfo:", JSON.stringify(coinInfo, null, 2));
        //console.log("coinMeta:", JSON.stringify(coinMeta, null, 2));

        if (!coinInfo || !coinInfo.quote || !coinInfo.quote.USD || !coinMeta) {
          throw new Error("Invalid API response: Missing required data");
        }

        const formatDate = (isoDateString: string) => {
          if (!isoDateString) return "N/A";
          const date = new Date(isoDateString);
          const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
          ];
          const day = date.getDate().toString().padStart(2, "0");
          const month = months[date.getMonth()];
          const year = date.getFullYear();
          return `${day} ${month} ${year}`;
        };

        setCoinData({
          name: coinMeta.name || "Unknown Coin",
          symbol: coinMeta.symbol || "Unknown",
          logo: coinMeta.logo || AssetsImg.ic_btc_coin,
          price: coinInfo.quote.USD.price
            ? `₹${coinInfo.quote.USD.price.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`
            : "₹0.00",
          change: coinInfo.quote.USD.percent_change_24h !== undefined
            ? `${coinInfo.quote.USD.percent_change_24h > 0 ? "↑" : "↓"} ${Math.abs(coinInfo.quote.USD.percent_change_24h).toFixed(2)}%`
            : "↑ 0.00%",
          rank: coinInfo.cmc_rank ? `# ${coinInfo.cmc_rank.toString().padStart(2, "0")}` : "# 00",
          stats: [
            { icon: AssetsImg.ic_rank, label: "Coin Rating", value: "A+" },
            {
              icon: AssetsImg.ic_lineschart,
              label: "Mkt Dominance",
              value: coinInfo.quote.USD.market_cap_dominance
                ? `${coinInfo.quote.USD.market_cap_dominance.toFixed(2)}%`
                : "0.00%",
            },
            { icon: AssetsImg.ic_star, label: "Marked as Fav", value: "35.00%" },
          ],
          marketStats: {
            marketCap: coinInfo.quote.USD.market_cap
              ? `$${coinInfo.quote.USD.market_cap.toLocaleString("en-US", { maximumFractionDigits: 2 })}`
              : "N/A",
            fullyDilutedCap: coinInfo.quote.USD.fully_diluted_market_cap
              ? `$${coinInfo.quote.USD.fully_diluted_market_cap.toLocaleString("en-US", { maximumFractionDigits: 2 })}`
              : "N/A",
            volume24h: coinInfo.quote.USD.volume_24h
              ? `$${coinInfo.quote.USD.volume_24h.toLocaleString("en-US", { maximumFractionDigits: 2 })}`
              : "N/A",
            maxSupply: coinInfo.max_supply
              ? coinInfo.max_supply.toLocaleString("en-US")
              : "N/A",
            totalSupply: coinInfo.total_supply
              ? coinInfo.total_supply.toLocaleString("en-US")
              : "N/A",
            circulatingSupply: coinInfo.circulating_supply
              ? coinInfo.circulating_supply.toLocaleString("en-US")
              : "N/A",
          },
          trading: dummyCoinData.trading,
          launchDate: formatDate(coinMeta.date_launched),
          description: coinMeta.description || "No description available",
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching coin data:", error);
        setCoinData({
          ...dummyCoinData,
          logo: AssetsImg.ic_btc_coin,
          launchDate: "N/A",
          description: "Unable to load description",
          symbol: "Unknown",
        });
        setLoading(false);
      }
    };

    fetchData();
  }, [coinSymbol]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        if (container.scrollTop > 0) {
          container.classList.add("scrolled");
        } else {
          container.classList.remove("scrolled");
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleAmountChange = (target: InputTargetProps) => {
    setAmountInvested(target.value);
  };

  const handleFrequencyChange = (value: string) => {
    setInvestmentFrequency(value);
  };

  const handleTimePeriodChange = (tab: string) => {
    setTimePeriod(tab);
  };

  const coinLogo = coinData?.logo || AssetsImg.ic_btc_coin;

  return (
    <div css={styles.container} ref={containerRef}>
      <div css={styles.coinBanner}>
        <ShimmerWrapper height={60} width={340} isLoading={loading} typeLightdDark>
          <div css={styles.coinInfo}>
            <Image src={coinLogo} alt="coin" width={56} height={56} onError={() => console.error("Image failed to load:", coinLogo)} />
            <div css={styles.coinsInfoBox}>
              <span css={styles.coinName}>{coinData?.name}</span>
              <div css={styles.priceInfo}>
                <span css={styles.coinPrice}>{coinData?.price || "₹0.00"}</span>
                <Tags
                  isStroke
                  size="medium"
                  style={{
                    name: '1pzk433',
                    styles: 'width:100px'
                  }}
                  type="success"
                  css={{borderRadius: utils.remConverter(4)}}
                >
                  {coinData?.change}
                </Tags>
                <Tags
                  isStroke
                  size="medium"
                  style={{
                    name: '1pzk433',
                    styles: 'width:100px'
                  }}
                  type="default"
                  css={{borderRadius: utils.remConverter(4)}}
                >
                  {coinData?.rank || "#00"}
                </Tags>
              </div>
            </div>
          </div>
        </ShimmerWrapper>

        <div css={styles.statsContainer}>
          {coinData?.stats?.map((stat: any, index: number) => (
            <ShimmerWrapper height={70} width={166} isLoading={loading} typeLightdDark key={index}>
              <div css={styles.statCard}>
                <Image src={stat.icon} alt={stat.label} width={44} height={44} />
                <div css={styles.statInfo}>
                  <span>{stat.label}</span>
                  <span css={styles.statValue}>{stat.value}</span>
                </div>
              </div>
            </ShimmerWrapper>
          ))}
        </div>
      </div>

      <div css={styles.contentWrapper}>
        <div css={styles.leftContainer}>
          <PerformanceGraph />
          <Statistics
            coinLogo={coinLogo}
            marketStats={coinData?.marketStats || dummyCoinData.marketStats}
          />
          <CoinInfo
            launchDate={coinData?.launchDate || "N/A"}
            description={coinData?.description || "No description available"}
            symbol={coinData?.symbol || "Unknown"}
          />
          <CryptoCategories />
        </div>
        <div css={styles.rightContainer}>
          <div>
            <ShimmerWrapper height={24} width={150} isLoading={loading}>
              <div css={styles.returnsTitle}>Returns Calculator</div>
            </ShimmerWrapper>
            <div css={styles.formContainer}>
              <ShimmerWrapper height={40} width={245} isLoading={loading} style={styles.inputMarginBottom}>
                <Input
                  label="Amount Invested"
                  placeholder="Enter Amount"
                  type="number"
                  value={amountInvested}
                  onChange={handleAmountChange}
                  appendItem="INR"
                  style={css({ marginBottom: utils.remConverter(16) })}
                />
              </ShimmerWrapper>

              <ShimmerWrapper height={24} width={140} isLoading={loading} style={styles.labelMarginBottom}>
                <span css={styles.investmentFrequencyLabel}>Investment Frequency</span>
              </ShimmerWrapper>

              <ShimmerWrapper height={40} width={245} isLoading={loading} style={styles.labelMarginBottom}>
                <InputDropDown
                  placeholder="Select Frequency"
                  options={[
                    { label: "Daily", value: "Daily" },
                    { label: "Weekly", value: "Weekly" },
                    { label: "Monthly", value: "Monthly" },
                    { label: "Yearly", value: "Yearly" },
                  ]}
                  selected={investmentFrequency}
                  onChange={handleFrequencyChange}
                  rowHeight={40}
                  maxRows={4}
                  enableSearch={false}
                  search={{ placeholder: "", value: "", onChange: () => {} }}
                  style={styles.dropdownMargin}
                />
              </ShimmerWrapper>

              <div css={{ marginTop: utils.remConverter(16) }}>
                <ShimmerWrapper height={24} width={140} isLoading={loading} style={styles.labelMarginBottom}>
                  <span css={styles.overThePastLabel}>Over the Past</span>
                </ShimmerWrapper>

                <ShimmerWrapper height={26} width={245} isLoading={loading}>
                  <Tabs
                    onChange={handleTimePeriodChange}
                    selectedTab={timePeriod}
                    tabsList={[
                      { tab: "6M", title: <>6M</> },
                      { tab: "1Y", title: "1Y" },
                      { tab: "2Y", title: "2Y" },
                      { tab: "3Y", title: "3Y" },
                    ]}
                    type="secondary"
                    style={styles.tabsMargin}
                  />
                </ShimmerWrapper>
              </div>
            </div>

            <ShimmerWrapper height={106} width={280} isLoading={loading} style={styles.labelMarginBottom}>
              <div css={styles.investmentBox}>
                <div css={styles.investmentBoxContent}>
                  <Image src={AssetsImg.ic_investmentIcon} alt="Investment Icon" width={63} height={63} />
                  <div>
                    <p css={styles.IBlabel}>Current Value</p>
                    <p css={styles.IBvalue}>₹0.00</p>
                  </div>
                  <div css={styles.percentageBox}>- 0.00%</div>
                </div>
                <Divider spacing={2} />
                <p css={styles.investedAmountText}>
                  Invested Amount: <span css={styles.investedAmountValue}>₹0.00</span>
                </p>
              </div>
            </ShimmerWrapper>
          </div>
          <div css={styles.returnsButton}>
            <ShimmerWrapper height={34} width={280} isLoading={loading}>
              <Button onClick={NOOB} size="full-width" type="primary">
                CALCULATE RETURNS
              </Button>
            </ShimmerWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;