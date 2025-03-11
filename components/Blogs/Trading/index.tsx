

import React from "react";
import { css } from "@emotion/react";
import AssetsImg from "@public/images";
import Image from "next/image";
import { Shimmer } from "zebpay-ui";

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
} from "./style";

const Tradingbanner = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div css={tradingBanner}>
      <div css={frame}>
        <div css={anotherFrame}>


          <div css={zebpayImageDiv}>{isLoading?<Shimmer height={60} width={110} typeLightdDark="true" />:
            <Image src={AssetsImg.ic_crypto} alt="Crypto" />}
          </div>
          <div css={textWrapper}>
            {isLoading?<Shimmer height={25} width={240} typeLightdDark="true" />:<div css={title}>Crypto Knowledge Hub</div>}
            {isLoading?<Shimmer height={45} width={280} typeLightdDark="true" />:<div css={subtitle}>
              Stay updated on the latest trends and insights with ZebPay.
              Download now
            </div>}
          </div>
          <div css={buttonGroup}>
            {isLoading?<Shimmer height={30} width={135} typeLightdDark="true" style={{"marginTop":"1rem"}}/>:<a
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
            </a>}

            {isLoading?<Shimmer height={30} width={135} typeLightdDark="true" style={{"marginTop":"1rem"}} />:<a
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
            </a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tradingbanner;
