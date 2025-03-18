import React, { useReducer, useEffect } from "react";
import {
  SidePanel,
  Button,
  Accordion,
  Divider,
  Checkbox,
  Radio,
  Icon,
} from "zebpay-ui";

import {
  added,
  buttonGroup,
  insidePanel,
  title,
  filterAndUpdownFrame,
  iconBox,
  icon,
  accordionTitle,
  accordion_option,
  accordion_option_inside,
  box,
  customDate,
  calendar_icon,
} from "./style";
import { css } from "@emotion/react";
import Dropdown from "../DropDown";
import AssetsImg from "@public/images";
import Image from "next/image";

import { DateRangePicker } from "@components/Shared";
import { DateRange } from "@components/Shared/DateRangePicker";

interface IconsPanelProps {
  onCategoryChange: (categories: string[]) => void;
  onDurationChange: (durations: string[]) => void;
  onDateRangeChange: (dateRange: string) => void;
  onSortChange: (sortBy: string) => void;
  onReset?: () => void;
  selectedCategories: string[];
  selectedDurations: string[];
  selectedDateRange: string;
}


interface State {
  isPanelOpen: boolean;
  tempCategories: string[];
  tempDurations: string[];
  tempDateRange: string;
  isCategoryOpen: boolean;
  isDurationOpen: boolean;
  isDateRangeOpen: boolean;
  isCustomDate: boolean;
  customDateRange: DateRange | null;
}


type Action =
  | { type: "TOGGLE_PANEL"; payload: boolean }
  | { type: "SET_TEMP_CATEGORIES"; payload: string[] }
  | { type: "SET_TEMP_DURATIONS"; payload: string[] }
  | { type: "SET_TEMP_DATE_RANGE"; payload: string }
  | { type: "TOGGLE_ACCORDION"; payload: "category" | "duration" | "dateRange" }
  | { type: "TOGGLE_CUSTOM_DATE"; payload: boolean }
  | { type: "SET_CUSTOM_DATE_RANGE"; payload: DateRange | null }
  | { type: "HANDLE_CATEGORY_SELECT"; payload: string }
  | { type: "HANDLE_DURATION_SELECT"; payload: string }
  | { type: "HANDLE_DATE_RANGE_SELECT"; payload: string }
  | { type: "RESET_FILTERS" }
  | { type: "SELECT_ALL_CATEGORIES"; payload: boolean };


const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_PANEL":
      return { ...state, isPanelOpen: action.payload };
    case "SET_TEMP_CATEGORIES":
      return { ...state, tempCategories: action.payload };
    case "SET_TEMP_DURATIONS":
      return { ...state, tempDurations: action.payload };
    case "SET_TEMP_DATE_RANGE":
      return { ...state, tempDateRange: action.payload };
    case "TOGGLE_ACCORDION":
      return {
        ...state,
        isCategoryOpen:
          action.payload === "category" ? !state.isCategoryOpen : false,
        isDurationOpen:
          action.payload === "duration" ? !state.isDurationOpen : false,
        isDateRangeOpen:
          action.payload === "dateRange" ? !state.isDateRangeOpen : false,
      };
    case "TOGGLE_CUSTOM_DATE":
      return { ...state, isCustomDate: action.payload };
    case "SET_CUSTOM_DATE_RANGE":
      return { ...state, customDateRange: action.payload };
    case "HANDLE_CATEGORY_SELECT":
      return {
        ...state,
        tempCategories: state.tempCategories.includes(action.payload)
          ? state.tempCategories.filter((cat) => cat !== action.payload)
          : [...state.tempCategories, action.payload],
      };
    case "HANDLE_DURATION_SELECT":
      return {
        ...state,
        tempDurations: state.tempDurations.includes(action.payload)
          ? state.tempDurations.filter((dur) => dur !== action.payload)
          : [...state.tempDurations, action.payload],
      };
    case "HANDLE_DATE_RANGE_SELECT":
      if (action.payload === "custom") {
        return {
          ...state,
          isCustomDate: true,
          tempDateRange: "",
          customDateRange: null,
        };
      } else {
        return {
          ...state,
          isCustomDate: false,
          tempDateRange: action.payload,
        };
      }
    case "RESET_FILTERS":
      return {
        ...state,
        tempCategories: [],
        tempDurations: [],
        tempDateRange: "",
        customDateRange: null,
        isCustomDate: false,
      };
    case "SELECT_ALL_CATEGORIES":
      return {
        ...state,
        tempCategories: action.payload
          ? [
              "Announcement",
              "Coin Prediction",
              "Crypto",
              "Market Analysis",
              "Others",
            ]
          : [],
      };
    default:
      return state;
  }
};

const IconsPanel: React.FC<IconsPanelProps> = ({
  onCategoryChange,
  onDurationChange,
  onDateRangeChange,
  onSortChange,
  onReset,
  selectedCategories,
  selectedDurations,
  selectedDateRange,
}) => {
  const initialState: State = {
    isPanelOpen: false,
    tempCategories: selectedCategories,
    tempDurations: selectedDurations,
    tempDateRange: selectedDateRange,
    isCategoryOpen: false,
    isDurationOpen: false,
    isDateRangeOpen: false,
    isCustomDate: false,
    customDateRange: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    dispatch({ type: "SET_TEMP_CATEGORIES", payload: selectedCategories });
  }, [selectedCategories]);

  useEffect(() => {
    dispatch({ type: "SET_TEMP_DURATIONS", payload: selectedDurations });
  }, [selectedDurations]);

  useEffect(() => {
    dispatch({ type: "SET_TEMP_DATE_RANGE", payload: selectedDateRange });
  }, [selectedDateRange]);

  const handleApplyFilters = () => {
    if (state.isCustomDate && state.customDateRange) {
      const formattedStartDate = new Date(state.customDateRange.startDate)
        .toISOString()
        .split("T")[0];
      const formattedEndDate = new Date(state.customDateRange.endDate)
        .toISOString()
        .split("T")[0];
      onDateRangeChange(`${formattedStartDate} - ${formattedEndDate}`);
    } else {
      onDateRangeChange(state.tempDateRange);
    }
    onCategoryChange(state.tempCategories);
    onDurationChange(state.tempDurations);

    dispatch({ type: "TOGGLE_PANEL", payload: false });
  };

  const handleResetFilters = () => {
    dispatch({ type: "RESET_FILTERS" });

    onCategoryChange([]);
    onDurationChange([]);
    onDateRangeChange("");

    if (onReset) {
      onReset();
    }

    dispatch({ type: "TOGGLE_PANEL", payload: false });
  };

  const categoryOptions = [
    { label: "Announcements", value: "Announcement" },
    { label: "Coin Prediction", value: "Coin Prediction" },
    { label: "Crypto", value: "Crypto" },
    { label: "Market Analysis", value: "Market Analysis" },
    { label: "Others", value: "Others" },
  ];

  const dateRangeLabels: Record<string, string> = {
    "Last 7 Days": "Last 7 Days",
    "Last Month": "Last Month",
    "Last 3 Months": "Last 3 Months",
    "Last 1 Year": "Last 1 Year",
  };

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
          ? "nd"
          : day % 10 === 3 && day !== 13
            ? "rd"
            : "th";
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);
    return `${day}${suffix} ${month} ${year}`;
  };

  const selectedDateRangeLabel =
    state.isCustomDate && state.customDateRange
      ? `${formatDate(new Date(state.customDateRange.startDate))} - ${formatDate(new Date(state.customDateRange.endDate))}`
      : dateRangeLabels[state.tempDateRange] || "Select Date";

  return (
    <div css={filterAndUpdownFrame}>
      <div
        css={iconBox}
        onClick={() => dispatch({ type: "TOGGLE_PANEL", payload: true })}
        style={{ cursor: "pointer" }}
      >
        <Icon name="icon icon-filter" style={icon} />
      </div>
      <div css={iconBox} style={{ cursor: "pointer" }}>
        <Dropdown onSortChange={onSortChange} />
      </div>
      <SidePanel
        onBack={() => dispatch({ type: "TOGGLE_PANEL", payload: false })}
        onClose={() => dispatch({ type: "TOGGLE_PANEL", payload: false })}
        title="Filter Blogs"
        open={state.isPanelOpen}
      >
        <div css={insidePanel}>
          <Accordion
            isOpen={state.isCategoryOpen}
            onToggle={() =>
              dispatch({ type: "TOGGLE_ACCORDION", payload: "category" })
            }
            title={
              <div css={title(state.isCategoryOpen)}>
                <Image
                  src={AssetsImg.ic_reports}
                  css={accordionTitle}
                  alt="Reports"
                />
                Category
                {selectedCategories.length > 0 && (
                  <span css={added}>({selectedCategories.join(", ")})</span>
                )}
              </div>
            }
            style={accordion_option}
          >
            <div>
              <div css={accordion_option_inside}>
                <Checkbox
                  indeterminate
                  checked={
                    state.tempCategories.length === categoryOptions.length
                  }
                  onChange={(e) =>
                    dispatch({
                      type: "SELECT_ALL_CATEGORIES",
                      payload: e.checked,
                    })
                  }
                  style={box}
                  value={1}
                />
                <label htmlFor="selectAll" style={{ fontSize: "14px" }}>
                  Select All
                </label>
              </div>

              <Divider spacing={2} />

              {categoryOptions.map((option, index) => (
                <React.Fragment key={option.value}>
                  <div css={accordion_option_inside}>
                    <Checkbox
                      checked={state.tempCategories.includes(option.value)}
                      onChange={() =>
                        dispatch({
                          type: "HANDLE_CATEGORY_SELECT",
                          payload: option.value,
                        })
                      }
                      value={option.value}
                      style={box}
                    />
                    <label
                      htmlFor={`category-${option.value}`}
                      css={css`
                        font-size: 14px;
                      `}
                    >
                      {option.label}
                    </label>
                  </div>

                  {index < categoryOptions.length - 1 && (
                    <Divider spacing={2} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </Accordion>

          <Accordion
            isOpen={state.isDurationOpen}
            onToggle={() =>
              dispatch({ type: "TOGGLE_ACCORDION", payload: "duration" })
            }
            title={
              <div css={title(state.isDurationOpen)}>
                <Image
                  src={AssetsImg.ic_duration}
                  css={accordionTitle}
                  alt="duration"
                />
                Duration
                {selectedDurations.length > 0 && (
                  <span css={added}>({selectedDurations.join(", ")})</span>
                )}
              </div>
            }
            style={accordion_option}
          >
            <div>
              {[
                { label: "01 - 05 Mins", value: "01 - 05 Mins" },
                { label: "05 - 10 Mins", value: "05 - 10 Mins" },
                { label: "10 - 20 Mins", value: "10 - 20 Mins" },
                { label: "20+ Mins", value: "20+ Mins" },
              ].map((option, index) => (
                <React.Fragment key={option.value}>
                  <div css={accordion_option_inside}>
                    <Checkbox
                      checked={state.tempDurations.includes(option.value)}
                      onChange={() =>
                        dispatch({
                          type: "HANDLE_DURATION_SELECT",
                          payload: option.value,
                        })
                      }
                      value={option.value}
                      style={box}
                    />
                    <label
                      htmlFor={`duration-${option.value}`}
                      css={css`
                        font-size: 14px;
                      `}
                    >
                      {option.label}
                    </label>
                  </div>

                  {index < 3 && <Divider spacing={2} />}
                </React.Fragment>
              ))}
            </div>
          </Accordion>

          <Accordion
            isOpen={state.isDateRangeOpen}
            onToggle={() =>
              dispatch({ type: "TOGGLE_ACCORDION", payload: "dateRange" })
            }
            style={accordion_option}
            title={
              <div css={title(state.isDateRangeOpen)}>
                <Icon name="icon icon-calendar" style={calendar_icon} />
                <div>
                  Date Range
                  {(state.tempDateRange || state.isCustomDate) && (
                    <span css={added}>({selectedDateRangeLabel})</span>
                  )}
                </div>
              </div>
            }
          >
            <div>
              {[
                { label: "Last 7 Days", value: "Last 7 Days" },
                { label: "Last Month", value: "Last Month" },
                { label: "Last 3 Months", value: "Last 3 Months" },
                { label: "Last 1 Year", value: "Last 1 Year" },
                { label: "Custom", value: "custom" },
              ].map((option, index) => (
                <React.Fragment key={option.value}>
                  <div css={accordion_option_inside}>
                    <Radio
                      name="date-range-checkbox"
                      checked={
                        state.tempDateRange === option.value ||
                        (state.isCustomDate && option.value === "custom")
                      }
                      onChange={() =>
                        dispatch({
                          type: "HANDLE_DATE_RANGE_SELECT",
                          payload: option.value,
                        })
                      }
                      value={option.value}
                      style={box}
                    />
                    <label
                      htmlFor={`date-range-${option.value}`}
                      css={css`
                        font-size: 14px;
                      `}
                    >
                      {option.label}
                    </label>
                  </div>

                  {index < 4 && <Divider spacing={2} />}
                </React.Fragment>
              ))}
            </div>
          </Accordion>
        </div>

        {state.isCustomDate && (
          <div css={customDate}>
            <DateRangePicker
              onChange={(range) =>
                dispatch({ type: "SET_CUSTOM_DATE_RANGE", payload: range })
              }
              minDate={new Date("2000-01-01")}
              maxDate={new Date()}
            />
          </div>
        )}

        <div css={buttonGroup}>
          <Button onClick={handleResetFilters} size="medium" type="secondary">
            Reset
          </Button>
          <Button onClick={handleApplyFilters} size="medium" type="primary">
            Apply
          </Button>
        </div>
      </SidePanel>
    </div>
  );
};

export default IconsPanel;
