/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import AssetsImg from "@public/images";

const noResultsContainer = css`
  text-align: center;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const noResultsTitle = css`
  font-size: 18px;
  font-weight: bold;
`;

const noResultsSubtitle = css`
  font-size: 14px;
  color: #b0b0b0;
`;

const NoResults = () => {
  return (
    <div css={noResultsContainer}>
      <Image
        src={AssetsImg.ic_no_search}
        alt="No search results"
        width={100} 
        height={100}
      />
      <div css={noResultsTitle}>No Blogs Found</div>
      <div css={noResultsSubtitle}>Try searching with a different term</div>
    </div>
  );
};

export default NoResults;
