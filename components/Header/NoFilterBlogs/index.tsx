/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import AssetsImg from "@public/images";
import { Button } from "zebpay-ui";
import { noResultsContainer,noResultsTitle,noResultsSubtitle } from "./style";

const NoFilterBlogs = ({ setSearch }: { setSearch: (value: string) => void }) => {
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
      <Button onClick={() => {setSearch("")}} size="medium" type="secondary">
        RESET SEARCH
      </Button>
    </div>
  );
};

export default NoFilterBlogs;
