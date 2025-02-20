import { SerializedStyles } from "@emotion/utils";
import AssetsImg from "@public/images";
import { useEffect, useRef, useState } from "react";
import * as styles from "./styles";

interface SearchInputProps {
  placeholder?: string;
  noAnimation?: boolean;
  resetInput?: boolean;
  focusInput?: boolean;
  smallSearch?: boolean;
  testPattern?: RegExp;
  inputStyles?: SerializedStyles;
  onChange: (value: string) => void;
  onToggleSearch?: (value: boolean) => void;
  value?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  isMobile?: boolean;
  type?: string;
}

const ESCAPE_KEY_NAME = "Escape";

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  noAnimation,
  resetInput,
  focusInput,
  smallSearch,
  testPattern,
  onChange,
  inputStyles,
  onToggleSearch,
  value,
  onKeyDown,
  isMobile,
  type
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(value || "");
  const theme = isMobile ? "light" : "dark";
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value && onToggleSearch) {
      setInputValue(value);
      onToggleSearch(true);
      setIsOpened(true);
      setIsFocused(true);
    }
  }, [value]);
  useEffect(() => {
    if (resetInput) onToggleInput(false);
  }, [resetInput]);

  useEffect(() => {
    if (focusInput) onToggleInput(true);
  }, [focusInput]);

  const onToggleInput = (open: boolean) => {
    setIsOpened(open);
    if (open) inputRef?.current?.focus();
    else resetInputField();
    setIsFocused(open);
    onToggleSearch && onToggleSearch(open);
  };

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (testPattern && !testPattern?.test(value)) return;

    setInputValue(value);
    onChange(value);
  };

  const resetInputField = () => {
    setInputValue("");
    onChange("");
  };

  const onBlurInput = () => {
    if (!noAnimation && !inputValue) {
      setIsFocused(false);
      setIsOpened(false);
      onToggleSearch && onToggleSearch(false);
    }
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ESCAPE_KEY_NAME) {
      setIsFocused(false);
      setIsOpened(false);
      onToggleSearch && onToggleSearch(false);
      resetInputField();
      inputRef?.current?.blur();
    }
    if (onKeyDown) onKeyDown(event);
  };

  return (
    <div
      css={[
        styles.searchInputContainer,
        noAnimation && styles.searchInputContainerWithBackground
      ]}
    >
      <div>
        <img
          data-test-id="searchCoinIcon"
          onClick={() => {
            if (!isOpened) onToggleInput(true);
          }}
          css={[
            styles.searchInputIcon,
            noAnimation && styles.searchInputLowerIcon,
            smallSearch && styles.searchInputSmallLowerIcon
          ]}
          src={
            theme === "light" ? AssetsImg.ic_search_grey : AssetsImg.ic_search
          }
          alt="Search icon"
        />
        <input
          data-test-id="coinSearchBar"
          ref={inputRef}
          css={[
            styles.searchInput,
            isOpened && !noAnimation && styles.searchInputUnfolded,
            isFocused && styles.searchInputFocused(theme),
            noAnimation && styles.searchInputNoAnimation(theme),
            smallSearch && styles.searchInputNoAnimationSmallPadding,
            inputStyles
          ]}
          type={type || "text"}
          placeholder={placeholder}
          value={value}
          onBlur={onBlurInput}
          onChange={onChangeInputValue}
          onKeyDown={onKeyPress}
          disabled={!isOpened}
        />
      </div>
      <button
        css={[
          styles.searchInputCloseIcon,
          noAnimation && styles.searchInputCloseLowerIcon,
          isOpened && styles.searchInputCloseIconVisible,
          smallSearch && styles.searchInputSmallCloseLowerIcon
        ]}
        onClick={() => onToggleInput(false)}
        type="button"
      >
        <img
          data-test-id="closeSearchBar"
          src={AssetsImg.ic_cross}
          alt="Close icon"
        />
      </button>
    </div>
  );
};

export default SearchInput;
