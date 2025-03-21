
import React from "react";
import {  Button } from "zebpay-ui";
import { Heading, Main, subHeading } from "./style";
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