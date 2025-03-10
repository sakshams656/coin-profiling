/** @jsxImportSource @emotion/react */
import Image from "next/image";
import AssetsImg from "@public/images";
import { Button } from "zebpay-ui";
import * as styles from "./styles";

const NoFilterNews = ({ setSearch }: { setSearch: (value: string) => void }) => {
  return (
    <div css={styles.container}>
      <Image
        src={AssetsImg.ic_no_search}
        alt="No search results"
        width={100}
        height={100}
      />
      <div css={styles.noNews}>No News Found</div>
        <div css={styles.noNewsText}>
          Try searching with a different term.
        </div>
      <Button onClick={() => setSearch("")} size="medium" type="secondary">
        <div css={styles.buttonText}>
        RESET SEARCH
        </div>
      </Button>
    </div>
  );
};

export default NoFilterNews;