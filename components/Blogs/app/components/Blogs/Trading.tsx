/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import crypto from "../../images/crypto.svg";
import { css } from "@emotion/react";
import googlePlay from "../../images/googlePlay.svg";
import appStore from "../../images/appStore.svg";
import {
  ButtonStyle,
  Image,
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
            <img src={crypto.src} alt="Crypto" />
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
                <img
                  src={appStore.src}
                  alt="Get it on Google Play"
                  css={Image}
                />
              </button>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=zebpay.Application&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button css={ButtonStyle}>
                <img
                  src={googlePlay.src}
                  alt="Get it on Google Play"
                  css={Image}
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
