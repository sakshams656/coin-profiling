import Image from "next/image";
import * as styles from "./styles";
import { dummyCoinData } from "../../Data/DummyCoinData";
import { Button, Divider, Input, InputDropDown, Tabs, Tags, utils } from "zebpay-ui";

import Statistics from "./Statistics";
import AssetsImg from "@public/images";
import CoinInfo from "./CoinInformation/CoinInfo";
import PerformanceGraph from "./Graph";
import CryptoCategories from "./Categories/CryptoCategories";
import NOOB from "@constants/noob";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { useEffect, useState, useRef } from "react";
import { css } from "@emotion/react";
import LoggedOutScreen from "./LoggedOut";
import { data as fetchCoinData, info as fetchCoinInfo, chart as fetchChartInfo} from "@actions/OverviewAPIs";


interface InputTargetProps {
  value: string | number;
  name?: string;
}

interface CoinData {
  name: string;
  symbol: string;
  logo: string;
  price: string;
  change: string;
  isPositive: boolean;
  rank: string;
  stats: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
  marketStats: {
    marketCap: string;
    fullyDilutedCap: string;
    volume24h: string;
    maxSupply: string;
    totalSupply: string;
    circulatingSupply: string;
  };
  trading: any;
  launchDate: string | null;
  description: string;
}

interface ChartStats {
  ltp: string;
  high24h: string;
  low24h: string;
}

interface OverviewProps {
  coinSymbol: string;
}

const Overview: React.FC<OverviewProps> = ({ coinSymbol }) => {
  const [loading, setLoading] = useState(true);
  const [amountInvested, setAmountInvested] = useState<string | number>("");
  const [investmentFrequency, setInvestmentFrequency] = useState<string>("");
  const [timePeriod, setTimePeriod] = useState<string>("6M");
  const LoggedIn = false;
  const [chartStats, setChartStats] = useState<ChartStats>({
    ltp: "0",
    high24h: "0",
    low24h: "0",
  });


  useEffect(() => {
    const fetchChartData = async () => {
      if (!coinSymbol) return;
      try {
        const chartResponse = await fetchChartInfo(
          "1", 
          coinSymbol.toLowerCase(), 
          "inr"
        );
  
        if (chartResponse?.data && chartResponse.data.length > 0) {
          const prices = chartResponse.data.map(point => point.y);
          const stats: ChartStats = {
            ltp: `₹${prices[prices.length - 1].toFixed(2)}`,
            high24h: `₹${Math.max(...prices).toFixed(2)}`,
            low24h: `₹${Math.min(...prices).toFixed(2)}`
          };
  
          setChartStats(stats);
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
  
        setChartStats({
          ltp: `₹${parseFloat(coinData.price.replace('₹', '').replace(',', '')).toFixed(2)}`,
          high24h: "₹0.00",
          low24h: "₹0.00"
        });
      }
    };
  
    if (coinSymbol && !loading) {
      fetchChartData();
    }
  }, [coinSymbol, loading]);
  

  
  

  const [coinData, setCoinData] = useState<CoinData>({
    name: "Unknown Coin",
    symbol: "Unknown",
    logo: AssetsImg.ic_btc_coin,
    price: "₹0.00",
    change: "↑ 0.00%",
    isPositive: true,
    rank: "# 00",
    stats: [
      { icon: AssetsImg.ic_rank, label: "Coin Rating", value: "A+" },
      { icon: AssetsImg.ic_lineschart, label: "Mkt Dominance", value: "0.00%" },
      { icon: AssetsImg.ic_star, label: "Marked as Fav", value: "35.00%" },
    ],
    marketStats: {
      marketCap: "N/A",
      fullyDilutedCap: "N/A",
      volume24h: "N/A",
      maxSupply: "N/A",
      totalSupply: "N/A",
      circulatingSupply: "N/A",
    },
    trading: dummyCoinData.trading,
    launchDate: null,
    description: "No description available",
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!coinSymbol) return;

      try {
        const [infoResponse, dataResponse] = await Promise.all([
          fetchCoinInfo({ symbol: coinSymbol }),
          fetchCoinData({ symbol: coinSymbol }),
        ]);

        const coinInfo = infoResponse.data[coinSymbol]?.[0];
        const coinMeta = dataResponse.data[coinSymbol]?.[0];

        if (!coinInfo || !coinInfo.quote || !coinInfo.quote.INR || !coinMeta) {
          throw new Error("Invalid API response: Missing required data");
        }

        const formatDate = (isoDateString: string | null) => {
          if (!isoDateString) return null;
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
          price: coinInfo.quote.INR.price
            ? `₹${coinInfo.quote.INR.price.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`
            : "₹0.00",
          change: coinInfo.quote.INR.percent_change_24h !== undefined
            ? `${coinInfo.quote.INR.percent_change_24h > 0 ? "↑" : "↓"} ${Math.abs(coinInfo.quote.INR.percent_change_24h).toFixed(2)}%`
            : "↑ 0.00%",
          isPositive: coinInfo.quote.INR.percent_change_24h !== undefined
            ? coinInfo.quote.INR.percent_change_24h > 0
            : true,
          rank: coinInfo.cmc_rank ? `# ${coinInfo.cmc_rank.toString().padStart(2, "0")}` : "# 00",
          stats: [
            { icon: AssetsImg.ic_rank, label: "Coin Rating", value: "A+" },
            {
              icon: AssetsImg.ic_lineschart,
              label: "Mkt Dominance",
              value: coinInfo.quote.INR.market_cap_dominance
                ? `${coinInfo.quote.INR.market_cap_dominance.toFixed(2)}%`
                : "0.00%",
            },
            { icon: AssetsImg.ic_star, label: "Marked as Fav", value: "35.00%" },
          ],
          marketStats: {
            marketCap: coinInfo.quote.INR.market_cap
              ? `₹ ${coinInfo.quote.INR.market_cap.toLocaleString("en-US", { maximumFractionDigits: 2 })}`
              : "N/A",
            fullyDilutedCap: coinInfo.quote.INR.fully_diluted_market_cap
              ? `₹ ${coinInfo.quote.INR.fully_diluted_market_cap.toLocaleString("en-US", { maximumFractionDigits: 2 })}`
              : "N/A",
            volume24h: coinInfo.quote.INR.volume_24h
              ? `₹ ${coinInfo.quote.INR.volume_24h.toLocaleString("en-US", { maximumFractionDigits: 2 })}`
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
          name: "Unknown Coin",
          symbol: "Unknown",
          logo: AssetsImg.ic_btc_coin,
          price: "₹0.00",
          change: "↑ 0.00%",
          isPositive: true,
          rank: "# 00",
          stats: [
            { icon: AssetsImg.ic_rank, label: "Coin Rating", value: "A+" },
            { icon: AssetsImg.ic_lineschart, label: "Mkt Dominance", value: "0.00%" },
            { icon: AssetsImg.ic_star, label: "Marked as Fav", value: "35.00%" },
          ],
          marketStats: {
            marketCap: "N/A",
            fullyDilutedCap: "N/A",
            volume24h: "N/A",
            maxSupply: "N/A",
            totalSupply: "N/A",
            circulatingSupply: "N/A",
          },
          trading: dummyCoinData.trading,
          launchDate: null,
          description: "Unable to load description",
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

  const coinLogo = coinData.logo;

  return (
    <div css={styles.container} ref={containerRef}>
      <div css={styles.coinBanner}>
        <ShimmerWrapper height={60} width={340} isLoading={loading} typeLightdDark>
          <div css={styles.coinInfo}>
            <Image src={coinLogo} alt="coin" width={56} height={56} priority onError={() => console.error("Image failed to load:", coinLogo)} />
            <div css={styles.coinsInfoBox}>
              <span css={styles.coinName}>{coinData.name}</span>
              <div css={styles.priceInfo}>
                <span css={styles.coinPrice}>{coinData.price}</span>
                <Tags
                  isStroke
                  size="medium"
                  style={{
                    name: '1pzk433',
                    styles: 'width:100px'
                  }}
                  type={coinData.isPositive ? "success" : "error"}
                  css={{ borderRadius: utils.remConverter(4) }}
                >
                  {coinData.change}
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
                  {coinData.rank}
                </Tags>
              </div>
            </div>
          </div>
        </ShimmerWrapper>

        <div css={styles.statsContainer}>
          {coinData.stats.map((stat, index) => (
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
        <PerformanceGraph percentageChange24h={coinData.change} coinSymbol={coinSymbol}/>

          <Statistics
            coinLogo={coinLogo}
            marketStats={coinData.marketStats}
            chartStats={chartStats}
          />
          <CoinInfo
            launchDate={coinData.launchDate}
            description={coinData.description}
            symbol={coinData.symbol}
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
              {LoggedIn ? (
                <div css={styles.investmentBox}>
                  <div css={styles.investmentBoxContent}>
                    <div css={styles.percentageBox}>
                      <Image src={AssetsImg.ic_investmentIcon} alt="Investment Icon" width={63} height={63} />
                      <div>
                        <p css={styles.IBlabel}>Current Value</p>
                        <p css={styles.IBvalue}>₹0.00</p>
                      </div>
                    </div>
                    <Tags type={"default"}>- 0.00%</Tags>
                  </div>
                  <Divider spacing={2} />
                  <p css={styles.investedAmountText}>
                    Invested Amount: <span css={styles.investedAmountValue}>₹0.00</span>
                  </p>
                </div>
              ) : (
                <LoggedOutScreen />
              )}
            </ShimmerWrapper>
          </div>
          <div css={styles.returnsButton}>
            <ShimmerWrapper height={34} width={280} isLoading={loading}>
              {LoggedIn ? (
                <Button onClick={NOOB} size="full-width" type="primary">
                  CALCULATE RETURNS
                </Button>
              ) : (
                <div css={styles.loginSignupButtons}>
                  <Button size="medium" type="secondary" onClick={NOOB} style={{width: utils.remConverter(132)}}>LOGIN</Button>
                  <Button size="medium" type="primary" onClick={NOOB} style={{width: utils.remConverter(132)}}>SIGNUP</Button>
                </div>
              )}
            </ShimmerWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;