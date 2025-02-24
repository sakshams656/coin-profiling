/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { typography, colors, utils, Button } from "zebpay-ui";
import AssetsImg from "@public/images";
import Image from "next/image";

const NoNewsFound = ({ onResetFilters }) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        minHeight: "50vh",
        textAlign: "center",
        padding: "2rem",
        color: "#ffffff",
      }}
    >
      <Image src={AssetsImg.ic_NoNews} alt="no news" width={190} height={190}/>
      <div
        css={{
          ...typography.h3,
          fontFamily: "Lato",
          fontWeight: "700",
          fontSize: "32px",
          lineHeight: "48px",
          letterSpacing: "0.8px",
          marginBottom: "1rem",
        }}
      >
        No News Found
      </div>
      <div
        css={{
          fontFamily: "Lato",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "30px",
          letterSpacing: "0.4px",
          textAlign: "center",
          color: "#C0C0EE",
          marginBottom: "3rem",
        }}
      >
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