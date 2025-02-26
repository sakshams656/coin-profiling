/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import { css } from "@emotion/react";
import AssetsImg from "@public/images";
import Image from "next/image";

import {
  ButtonStyle,
  image,
  tradingBanner,
  frame,
  anotherFrame,
  zebpayImageDiv,
  textWrapper,
  title,
  subtitle,
  buttonGroup,
} from "../../styles/TradingStyle";

const Tradingbanner = () => {
  return (
    <div css={tradingBanner}>
      <div css={frame}>
        <div css={anotherFrame}>
          <div css={zebpayImageDiv}>
            <Image src={AssetsImg.ic_crypto} alt="Crypto" />
          </div>
          <div css={textWrapper}>
            <div css={title}>Crypto Knowledge Hub</div>
            <div css={subtitle}>
              Stay updated on the latest trends and insights with ZebPay.
              Download now
            </div>
          </div>
          <div css={buttonGroup}>
            <a
              href="https://apps.apple.com/in/app/zebpay-buy-bitcoin-crypto/id944854686"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button css={ButtonStyle}>
                <Image
                  src={AssetsImg.ic_app_store}
                  alt="Get it on App Store"
                  css={image}
                />
              </button>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=zebpay.Application&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button css={ButtonStyle}>
                <Image
                  src={AssetsImg.ic_google_play}
                  alt="Get it on Google Play"
                  css={image}
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tradingbanner;
