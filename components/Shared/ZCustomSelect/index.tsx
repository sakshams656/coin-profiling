import AssetsImg from "@public/images";
import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import * as styles from "./styles";

import { css, SerializedStyles } from "@emotion/react";

import { SearchBlankSlate, SearchInput } from "@components/Shared";

import { IZCustomSelectOption } from "@typings/api/shared";

import { useCustomSelect } from "@hooks/useCustomSelect";
import { useIsScrolled } from "@hooks/useIsScrolled";
import { useOnClickOutside } from "@hooks/useOnClickOutside";

import * as externalStyles from "@styles/sidebar";
import { colors, Icon, Tooltip, utils } from "zebpay-ui";

interface IZCustomSelectData {
  value: string | null | undefined;
  list: IZCustomSelectOption[];
  emptySearchOptions?: IZCustomSelectOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  invalid?: boolean;
  label?: string;
  additionalActionComponent?: React.ReactNode;
  hasCustomSelectedComponent?: boolean;
  customContainerStyles?: SerializedStyles | string;
  customListStyles?: SerializedStyles;
  containerListStyles?: SerializedStyles;
  placeholderStyles?: SerializedStyles;
  customInputStyles?: SerializedStyles;
  small?: boolean;
  hideArrow?: boolean;
  noSearch?: boolean;
  withInput?: boolean;
  selectedValueNoWidth?: boolean;
  smallSearch?: boolean;
  inputError?: string;
  inputPlaceholder?: string;
  inputName?: string;
  inputType?: string;
  inputValue?: string | number;
  extraMessage?: string;
  isFocused?: boolean;
  onChange: (value: string) => void;
  onChangeInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onToggle?: (value: boolean) => void;
  isMobile?: boolean;
  customComponentSelectStyling?: SerializedStyles;
  icButton?: boolean;
  customErrorButton?: string;
  customErrorButtonhandleClick?: () => void;
  onICButtonClick?: (multiplier: number) => void;
  showErrorOnFocus?: boolean;
  searchOptions?: {
    type: string;
    limit: number;
  };
}

const ZCustomSelect: React.FC<IZCustomSelectData> = ({
  value,
  list,
  emptySearchOptions,
  placeholder,
  searchPlaceholder = "Search",
  invalid,
  label,
  small,
  hideArrow,
  noSearch,
  additionalActionComponent,
  hasCustomSelectedComponent,
  selectedValueNoWidth,
  customListStyles,
  customContainerStyles,
  containerListStyles,
  placeholderStyles,
  customInputStyles,
  withInput,
  inputError,
  inputPlaceholder,
  inputName,
  inputType,
  inputValue,
  extraMessage,
  smallSearch,
  isFocused,
  onChange,
  onChangeInput,
  onToggle,
  isMobile = false,
  customComponentSelectStyling,
  icButton,
  customErrorButton,
  customErrorButtonhandleClick,
  onICButtonClick,
  showErrorOnFocus = false,
  searchOptions
}) => {
  const optionsRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const theme = isMobile ? "light" : "dark";
  const [search, setSearch] = useState<string>("");
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [inputPlaceholderText, setInputPlaceholderText] = useState<
    string | undefined
  >(inputPlaceholder);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setInputPlaceholderText(inputPlaceholder);
  }, [inputPlaceholder]);
  const { isOnTop } = useIsScrolled(!noSearch ? optionsRef?.current : null);

  useOnClickOutside(wrapperRef, () => {
    toggleSelect(false);
    setSearch("");
  });

  const {
    isOpen,
    listData,
    selectedValueComponent,
    toggleSelect,
    handleChange,
    handleSearch
  } = useCustomSelect({
    value,
    list,
    onChange,
    hasCustomSelectedComponent,
    search,
    onToggle
  });

  const dataToList = listData.length
    ? listData
    : emptySearchOptions?.length
    ? emptySearchOptions
    : [];

  const hideSelectDropdown = useMemo(() => list.length <= 1, [list.length]);

  const onFocusInput = () => {
    setInputFocused(true);
  };

  const onBlurInput = () => {
    setInputFocused(false);
  };

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
      onFocusInput();
    }
  }, [isFocused]);

  return (
    <div
      ref={wrapperRef}
      css={[styles.customComponentSelectContainer, customContainerStyles]}
    >
      <div css={styles.labelContainer}>
        {label && (
          <span
            css={[
              styles.label,
              isOpen && styles.labelFocused,
              (!showErrorOnFocus || inputFocused) &&
                inputError &&
                styles.invalidText
            ]}
          >
            {label}
          </span>
        )}
        {additionalActionComponent}
      </div>
      <div
        css={
          icButton
            ? {
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: utils.remConverter(12)
              }
            : {}
        }
      >
        <div
          css={[
            icButton ? { width: "inherit", zIndex: 999 } : {},
            styles.inputContainer,
            withInput && styles.formContainer,
            isOpen || inputFocused ? styles.focused : undefined,
            (!showErrorOnFocus || inputFocused) && !!inputError
              ? styles.invalid
              : undefined
          ]}
        >
          {withInput && (
            <input
              data-test-id={`${label}Field`}
              ref={inputRef}
              onWheel={(e: any) => {
                e.target?.blur();
                e.stopPropagation();
                setTimeout(() => {
                  e.target?.focus();
                }, 0);
              }}
              type={inputType}
              name={inputName}
              placeholder={inputPlaceholderText}
              value={inputValue}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (inputType === "number" && ["e", "+", "-"].includes(e.key))
                  e.preventDefault();
              }}
              onChange={onChangeInput}
              onFocus={onFocusInput}
              onBlur={onBlurInput}
              css={[styles.input(theme), customInputStyles]}
            />
          )}
          {isOpen && (
            <div
              css={styles.selectOverlay}
              onClick={() => {
                toggleSelect(false);
                setSearch("");
              }}
            />
          )}
          <button
            data-test-id={"zCustomSelectButton"}
            css={[
              styles.customComponentSelect(theme),
              withInput && styles.customSelectSharpLeftCorners,
              !selectedValueNoWidth && styles.customComponentSelectFullWidth,
              !withInput && styles.selectWithPointerEvents,
              small && styles.smallCustomComponentSelect,
              isOpen && !withInput && styles.focused,
              invalid && styles.invalid,
              customComponentSelectStyling
            ]}
            onClick={event => {
              !hideSelectDropdown && toggleSelect(!isOpen);
              event.preventDefault();
            }}
          >
            {selectedValueComponent && (
              <div
                css={[
                  styles.valueComponent,
                  selectedValueNoWidth && styles.valueComponentFixedHeight
                ]}
              >
                {React.cloneElement(
                  selectedValueComponent as React.ReactElement<any>,
                  { isOpen }
                )}
              </div>
            )}
            {!selectedValueComponent && placeholder && (
              <div
                css={[
                  styles.customComponentSelectPlaceholder,
                  placeholderStyles
                ]}
              >
                {placeholder}
              </div>
            )}
            {!hideArrow && !hideSelectDropdown && (
              <Icon
                name={"arrow-down"}
                style={css([
                  styles.selectIndicatorImg,
                  isOpen && styles.openSelectIndicatorImg,
                  {
                    color:
                      theme === "light" ? "black" : colors.Zeb_Solid_Light_Blue
                  }
                ])}
              />
            )}
          </button>
          {!hideSelectDropdown && isOpen && (
            <div
              css={[
                styles.customComponentSelectList(theme),
                styles.openCustomComponentSelectList,
                containerListStyles
              ]}
            >
              {!noSearch && (
                <div
                  css={[
                    styles.searchInputContainer(theme),
                    !isOnTop && styles.searchInputWithBoxShadow
                  ]}
                >
                  <SearchInput
                    type={searchOptions?.type}
                    placeholder={searchPlaceholder}
                    resetInput={!isOpen}
                    focusInput={isOpen}
                    smallSearch={smallSearch}
                    value={search}
                    onChange={value => {
                      if (searchOptions) {
                        if (
                          !value.includes(".") &&
                          value.length <= searchOptions.limit
                        ) {
                          setSearch(value);
                          handleSearch(value);
                        }
                      } else {
                        setSearch(value);
                        handleSearch(value);
                      }
                    }}
                    noAnimation
                    inputStyles={styles.searchInput(theme)}
                    isMobile={isMobile}
                  />
                </div>
              )}
              {dataToList?.length ? (
                <div
                  ref={optionsRef}
                  css={[
                    styles.selectListContainer,
                    externalStyles.sidebarElementsScrollbar,
                    customListStyles
                  ]}
                >
                  {dataToList?.map((data, index) => (
                    <div
                      css={styles.customComponentOption(theme, isMobile)}
                      key={data.value}
                      onClick={event => {
                        handleChange(data);
                        setSearch("");
                        event.preventDefault();
                      }}
                      data-test-id={"tradeCoin"}
                    >
                      {data.component}
                      {data.value === value && (
                        <img
                          css={styles.selectedIcon(theme === "light")}
                          src={
                            theme === "light"
                              ? AssetsImg.ic_tick_blue.src
                              : AssetsImg.ic_tick.src
                          }
                          alt="Selected icon"
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <SearchBlankSlate smallSearch searchValue={search} />
              )}
            </div>
          )}
        </div>
        {Boolean(icButton) ? (
          <div
            css={{ display: "flex", gap: utils.remConverter(8), zIndex: 999 }}
          >
            <Tooltip
              content={"Decrease value by 1%"}
              isStroke
              contentStyle={styles.tooltip}
              position="top-start"
            >
              <p
                css={styles.valueChangeButton}
                onClick={() => {
                  // if (inputError) onFocusInput();
                  onICButtonClick?.(-0.01);
                }}
              >
                - 1%
              </p>
            </Tooltip>
            <Tooltip
              content={"Increase value by 1%"}
              isStroke
              contentStyle={styles.tooltip}
              position="top-start"
            >
              <p
                css={styles.valueChangeButton}
                onClick={() => {
                  // if (inputError) onFocusInput();
                  onICButtonClick?.(0.01);
                }}
              >
                + 1%
              </p>
            </Tooltip>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          width: icButton
            ? `calc(100% - ${utils.remConverter(120)})`
            : "inherit",
          marginTop: utils.remConverter(4),
          gap: utils.remConverter(4),
          transition: "all 0.2s ease-out",
          maxHeight: !showErrorOnFocus || inputFocused ? "50px" : "0px",
          opacity: !showErrorOnFocus || inputFocused ? "1" : "0"
        }}
      >
        <p css={[styles.invalidText]}>{inputError}</p>

        {customErrorButton ? (
          <p
            css={styles.customButton}
            onClick={() => {
              customErrorButtonhandleClick?.();
            }}
          >
            {customErrorButton}
          </p>
        ) : (
          <></>
        )}
      </div>
      <p
        css={[
          styles.extraMessage,
          icButton ? { width: `calc(100% - ${utils.remConverter(120)})` } : null
        ]}
      >
        {extraMessage}
      </p>
    </div>
  );
};

export default ZCustomSelect;
