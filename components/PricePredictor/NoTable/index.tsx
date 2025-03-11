import React from "react";
import AssetsImg from "@public/images";
import { heading,subHeading,image,container } from "./style";
import Image from "next/image";

const NoDataDisplay: React.FC = () => {
  return (
    <div
      css={container}
    >
      <Image
        src={AssetsImg.ic_no_data}
        alt="No Data"
        css={image}
      />

      <h2 css={heading}>No data to display</h2>

      <p css={subHeading}>
        Input values in the calculator to display your coin projections here.
      </p>
    </div>
  );
};

export default NoDataDisplay;
