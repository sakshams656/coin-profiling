/** @jsxImportSource @emotion/react */
import React from "react";
import { CardContainer } from "../../styles/articleStyle";
import { typography, colors, utils, Button } from "zebpay-ui";
import { Heading, Main, subHeading } from "../../styles/NoBlogFoundStyle";
import AssetsImg from "@public/images";
import Image from "next/image";

interface NoBlogsFoundProps {
  onReset: () => void;  
}

const NoBlogsFound: React.FC<NoBlogsFoundProps> = ({ onReset }) => {
  const handleReset = () => {
    if (onReset) {
      onReset();  
    }
  };

  return (
    <div
      css={Main}
    >
      <Image
        src={AssetsImg.ic_no_blogs_found}
        alt="No Blogs Found"
        css={{
          maxWidth: "200px",
          marginBottom: "1rem",
        }}
      />
      <div
        css={Heading}
      >
        No Blogs Found
      </div>
      <div
        css={subHeading}
      >
        Blogs not available for the selected filters.
      </div>
      <Button
        onClick={handleReset}
        size="full-width"
        type="secondary"
      >
        RESET
      </Button>
    </div>
  );
};

export default NoBlogsFound;