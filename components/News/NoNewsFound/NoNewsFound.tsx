/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { typography, colors, utils, Button } from "zebpay-ui";
import AssetsImg from "@public/images";
import Image from "next/image";
import { container, noNewsTitle, noNewsHeadline } from "./styles";

const NoNewsFound = ({ onResetFilters }) => {
  return (
    <div css={container}>
      <Image src={AssetsImg.ic_NoNews} alt="no news" width={190} height={190}/>
      <div css={noNewsTitle}>
        No News Found
      </div>
      <div css={noNewsHeadline}>
        News not available for the selected filters.
      </div>
      <div css={{width: "50%"}}>
        <Button
            onClick={onResetFilters} // Use the passed onResetFilters function
            size="full-width"
            type="secondary"
        >
            RESET
        </Button>
      </div>
    </div>
  );
};

export default NoNewsFound;