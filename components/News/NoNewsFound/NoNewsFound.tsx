/** @jsxImportSource @emotion/react */
import { Button } from "zebpay-ui";
import AssetsImg from "@public/images";
import Image from "next/image";
import * as styles from "./styles";

const NoNewsFound = ({ onResetFilters }) => {
  return (
    <div css={styles.container}>
      <Image src={AssetsImg.ic_NoNews} alt="no news" width={190} height={190}/>
      <div css={styles.noNewsTitle}>
        No News Found
      </div>
      <div css={styles.noNewsHeadline}>
        News not available for the selected filters.
      </div>
      <div css={{width: "50%"}}>
        <Button
            onClick={onResetFilters} 
            size="full-width"
            type="secondary"
        >
            RESET FILTER
        </Button>
      </div>
    </div>
  );
};

export default NoNewsFound;