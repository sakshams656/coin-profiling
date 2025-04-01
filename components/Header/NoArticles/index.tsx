/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import AssetsImg from "@public/images";
import { Button } from "zebpay-ui";
import { noResultsContainer,noResultsTitle,noResultsSubtitle } from "./style";

const NoFilterBlogs = ({ setSearch ,selectedTab}: { setSearch: (value: string) => void ,selectedTab:string}) => {
  return (
    <div css={noResultsContainer}>
      <Image
        src={AssetsImg.ic_no_search}
        alt="No search results"
        width={100}
        height={100}
      />
      <div css={noResultsTitle}>No {selectedTab.slice(0,1).toUpperCase()+selectedTab.slice(1)} Found</div>
      <div css={noResultsSubtitle}>Try searching with a different term</div>
      <Button onClick={() => {setSearch("")}} size="medium" type="secondary">
        RESET SEARCH
      </Button>
    </div>
  );
};

export default NoFilterBlogs;
