/** @jsxImportSource @emotion/react */
import React, { useState } from "react";

import { Tabs, Tags, utils } from "zebpay-ui";
import AssetsImg from "@public/images";
import Image from "next/image";
import { categoryButtons, cryptoCard, cryptoCardsContainer, cryptoCategoriesContainer, cryptoChange, cryptoName, cryptoPrice, title, viewMoreButton } from "./styles";

const CryptoCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("TRENDING");

  const cryptoData = [
    { name: "PEPE", fullName: "Pepe", price: "₹1,21,29,05,59,875...", change: 90.31, icon: AssetsImg.ic_pepe, isPositive: true },
    { name: "PSG", fullName: "Paris Saint Germain Fan Token", price: "₹1,21,298.88", change: -12.66, icon: AssetsImg.ic_pepe, isPositive: false },
    { name: "ETH", fullName: "Ethereum", price: "₹1,89,613.00", change: 14.31, icon: AssetsImg.ic_pepe, isPositive: true },
    { name: "AAVE", fullName: "Aave", price: "₹1,21,298.88", change: 100.31, icon: AssetsImg.ic_pepe, isPositive: true },
    { name: "BNB", fullName: "Binance", price: "₹1,21,298.88", change: 0.31, icon: AssetsImg.ic_pepe, isPositive: true },
    { name: "USDT", fullName: "Tether", price: "₹313.26", change: -1.66, icon: AssetsImg.ic_pepe, isPositive: false },
  ];

  return (
    <div css={cryptoCategoriesContainer}>
      <span css={title}>Other Categories</span>
      <div css={categoryButtons}>
        <Tabs
            onChange={(tab) => setActiveCategory(tab)}
            selectedTab={activeCategory}
            tabsList={[
            { tab: "TRENDING", title: <>TRENDING</> },
            { tab: "WATCHLIST", title: "WATCHLIST" },
            { tab: "TOP GAINERS", title: "TOP GAINERS" },
            { tab: "TOP LOSERS", title: "TOP LOSERS" },
            ]}
            type="secondary"
        />
      </div>
      <div css={cryptoCardsContainer}>
        {cryptoData.map((crypto, index) => (
          <div key={index} css={cryptoCard}>
            <div css={{display: "flex", justifyContent: "space-between"}}>
                <div css={{display: "flex", flexDirection: "column"}}>
                    <span css={{fontsize: utils.remConverter(16), fontWeight: 700}}>{crypto.name}</span>
                    <span css={cryptoName}>{crypto.fullName}</span>
                </div>
                <Image src={crypto.icon} alt={crypto.name} width={40} height={40} />
            </div>
            <div css={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
                <div css={{display: "flex", flexDirection: "column"}}>
                    <span css={cryptoPrice}>{crypto.price}</span>
                    <span css={[cryptoChange, crypto.isPositive ? "positive" : "negative"]}>
                        <Tags
                            size="medium"
                            style={{
                                name: '1pzk433',
                                styles: 'width:100px'
                            }}
                            type="success"
                            >
                            {crypto.isPositive ? "↑" : "↓"} {Math.abs(crypto.change)}
                        </Tags>
                    </span>
                </div>
                <button css={viewMoreButton}>
                    <Image src={AssetsImg.ic_arrow_right} alt="arrow right" width={18} height={18}/>
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCategories;