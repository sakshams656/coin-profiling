import { useSelector } from "react-redux";
import * as styles from "./styles";

interface SearchBlankSlateProps {
  smallSearch?: boolean;
  searchValue?: string;
  isMobile?: boolean
}

const SearchBlankSlate: React.FC<SearchBlankSlateProps> = ({
  smallSearch,
  searchValue,
  isMobile = false
}) => {
  const theme: "light" | "dark" = isMobile ? "light" : "dark";
  return (
    <div css={[styles.container, smallSearch && styles.smallContainer]}>
      <span css={styles.title(isMobile, theme)}>
        {searchValue
          ? `No results found for "${searchValue}"`
          : "No results found!"}
      </span>
      <span css={styles.text(isMobile, theme)}>
        Try searching for something else
      </span>
    </div>
  );
};

export default SearchBlankSlate;
