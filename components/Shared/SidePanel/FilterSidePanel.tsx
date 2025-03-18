import { Button, Checkbox, Divider, Radio, SearchInput, SidePanel } from "zebpay-ui";
import { Accordion } from "zebpay-ui";
import Image from "next/image";
import AssetsImg from "@public/images";
import DateRangePicker, { DateRange } from "../DateRangePicker";
import { useReducer, useEffect, useState } from "react";
import * as styles from "./styles";
import { DateRangeOptions } from "@typings/api/shared";
import { dateFormat } from "@utils/date"; 

const PUBLISHED_BY_DATA = [
  { label: "Select All", indeterminate: true },
  { label: "Forbes" },
  { label: "Coindesk" },
  { label: "CoinTelegraph" },
];

const DURATION_DATA = [
  { label: "Select All", indeterminate: true },
  { label: "01 - 05 Mins" },
  { label: "05 - 10 Mins" },
  { label: "10 - 20 Mins" },
  { label: "20+ Mins" },
];

const DATE_RANGE_DATA = [
  { label: DateRangeOptions.SEVEN_DAYS },
  { label: DateRangeOptions.ONE_MONTH },
  { label: DateRangeOptions.THREE_MONTH },
  { label: DateRangeOptions.ONE_YEAR },
  { label: DateRangeOptions.CUSTOM_RANGE },
];

interface Filters {
  publishers: string[];
  durations: string[];
  dateRange: string | null;
}

interface FilterState {
  filters: Filters;
  accordionStates: { publishedBy: boolean; duration: boolean; dateRange: boolean };
  customDateRange: DateRange | null;
  searchTerm: string;
}

type FilterAction =
  | { type: "TOGGLE_ACCORDION"; key: "publishedBy" | "duration" | "dateRange" }
  | { type: "SET_PUBLISHERS"; publishers: string[] }
  | { type: "SET_DURATIONS"; durations: string[] }
  | { type: "SET_DATE_RANGE"; dateRange: string | null }
  | { type: "SET_CUSTOM_DATE_RANGE"; customDateRange: DateRange | null }
  | { type: "SET_SEARCH_TERM"; searchTerm: string }
  | { type: "RESET" };

const initialState: FilterState = {
  filters: { publishers: [], durations: [], dateRange: null },
  accordionStates: { publishedBy: false, duration: false, dateRange: false },
  customDateRange: null,
  searchTerm: "",
};

const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case "TOGGLE_ACCORDION":
      return {
        ...state,
        accordionStates: {
          publishedBy: action.key === "publishedBy" ? !state.accordionStates.publishedBy : false,
          duration: action.key === "duration" ? !state.accordionStates.duration : false,
          dateRange: action.key === "dateRange" ? !state.accordionStates.dateRange : false,
        },
      };
    case "SET_PUBLISHERS":
      return { ...state, filters: { ...state.filters, publishers: action.publishers } };
    case "SET_DURATIONS":
      return { ...state, filters: { ...state.filters, durations: action.durations } };
    case "SET_DATE_RANGE":
      return { ...state, filters: { ...state.filters, dateRange: action.dateRange } };
    case "SET_CUSTOM_DATE_RANGE":
      return { ...state, customDateRange: action.customDateRange };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.searchTerm };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

interface FilterSidePanelProps {
  onApplyFilters: (filters: Filters) => void;
  onResetFilters: () => void;
  resetTrigger: number;
}

const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  const day = d.getDate();
  const suffix = getDaySuffix(day);
  return dateFormat(d, `d'${suffix}' MMM yy`);
};

const getDaySuffix = (day: number): string => {
  if (day >= 11 && day <= 13) return "th";
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
};

const formatDateRange = (startDate: string | Date, endDate: string | Date): string => {
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

const FilterSidePanel: React.FC<FilterSidePanelProps> = ({ onApplyFilters, onResetFilters, resetTrigger }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    dispatch({ type: "RESET" });
  }, [resetTrigger]);

  useEffect(() => {
  }, [state.filters]);

  const toggleAccordion = (key: "publishedBy" | "duration" | "dateRange") => {
    dispatch({ type: "TOGGLE_ACCORDION", key });
  };

  const filteredPublishedByData = PUBLISHED_BY_DATA.filter((item) =>
    item.label.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  const handlePublisherChange = (label: string) => {
    if (label === "Select All") {
      const allPublishers = PUBLISHED_BY_DATA.filter((item) => item.label !== "Select All").map((item) => item.label);
      dispatch({
        type: "SET_PUBLISHERS",
        publishers: state.filters.publishers.length === allPublishers.length ? [] : allPublishers,
      });
    } else {
      const newPublishers = state.filters.publishers.includes(label)
        ? state.filters.publishers.filter((item) => item !== label)
        : [...state.filters.publishers, label];
      dispatch({ type: "SET_PUBLISHERS", publishers: newPublishers });
    }
  };

  const handleDurationChange = (label: string) => {
    if (label === "Select All") {
      const allDurations = DURATION_DATA.filter((item) => item.label !== "Select All").map((item) => item.label);
      dispatch({
        type: "SET_DURATIONS",
        durations: state.filters.durations.length === allDurations.length ? [] : allDurations,
      });
    } else {
      const newDurations = state.filters.durations.includes(label)
        ? state.filters.durations.filter((item) => item !== label)
        : [...state.filters.durations, label];
      dispatch({ type: "SET_DURATIONS", durations: newDurations });
    }
  };

  const handleDateRangeChange = (label: string) => {
    dispatch({ type: "SET_DATE_RANGE", dateRange: label });
    if (label !== "Custom") {
      dispatch({ type: "SET_CUSTOM_DATE_RANGE", customDateRange: null });
    }
  };

  const handleDateRangePickerChange = (dateRange: DateRange) => {
    dispatch({ type: "SET_CUSTOM_DATE_RANGE", customDateRange: dateRange });
  };

  const renderCheckboxes = (
    data: { label: string; indeterminate?: boolean }[],
    isCheckbox: boolean,
    selectedValues: string[],
    onChange: (label: string) => void
  ) => {
    return data.map((item, index) => {
      const isLast = index === data.length - 1;
      const checked = selectedValues.includes(item.label);
      const indeterminate = item.indeterminate
        ? selectedValues.length > 0 && selectedValues.length < data.length - 1
        : false;

      return (
        <div key={index}>
          {isCheckbox ? (
            <div css={{ padding: "0.75rem", paddingLeft: "0rem" }}>
              <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                label={item.label}
                mode="dark"
                onChange={() => onChange(item.label)}
                value={1}
              />
            </div>
          ) : (
            <div css={{ padding: "0.75rem", paddingLeft: "0rem" }}>
              <Radio
                label={item.label}
                mode="dark"
                name="date-range"
                onChange={() => onChange(item.label)}
                selected={checked}
                value={1}
              />
            </div>
          )}
          {!isLast && <Divider spacing={2} />}
        </div>
      );
    });
  };

  const handleApply = () => {
    const dateRangeValue =
      state.filters.dateRange === "Custom" && state.customDateRange
        ? formatDateRange(state.customDateRange.startDate, state.customDateRange.endDate)
        : state.filters.dateRange;

    onApplyFilters({
      publishers: state.filters.publishers,
      durations: state.filters.durations,
      dateRange: dateRangeValue,
    });
    setIsPanelOpen(false);
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
    onResetFilters();
    setIsPanelOpen(false);
  };

  const getSelectedNames = (data: { label: string }[], selected: string[]) => {
    const allNames = data
      .filter((item) => item.label !== "Select All")
      .map((item) => item.label)
      .filter((label) => selected.includes(label));
    return allNames.length > 0 ? allNames.join(", ") : "";
  };

  return (
    <>
      <button css={styles.filterStyle} onClick={() => setIsPanelOpen(true)} aria-label="Open Filter">
        <Image src={AssetsImg.ic_filter} alt="filter" width={16} height={16} />
      </button>

      <SidePanel
        title="Filter News"
        onClose={() => setIsPanelOpen(false)}
        onBack={() => setIsPanelOpen(false)}
        open={isPanelOpen}
        style={styles.sidePanelStyle}
      >
        <div css={styles.accordionWrapper}>
          <Accordion
            onToggle={() => toggleAccordion("publishedBy")}
            title={
              <div
                css={styles.accordionTitleStyle(state.accordionStates.publishedBy)}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion("publishedBy");
                }}
              >
                <Image
                  src={state.accordionStates.publishedBy ? AssetsImg.ic_document_white : AssetsImg.ic_document}
                  alt="doc"
                  height={20}
                  width={20}
                  css={styles.iconAccordian}
                />
                Published By{" "}
                {state.filters.publishers.length > 0 &&
                  (state.filters.publishers.includes("Select All")
                    ? `(${getSelectedNames(PUBLISHED_BY_DATA, state.filters.publishers)})`
                    : `(${state.filters.publishers.join(", ")})`)}
              </div>
            }
            isOpen={state.accordionStates.publishedBy}
          >
            {state.accordionStates.publishedBy && (
              <div>
                <SearchInput
                  autoFocus
                  disableShadow
                  onChange={(target) => dispatch({ type: "SET_SEARCH_TERM", searchTerm: target.value })}
                  onClear={() => dispatch({ type: "SET_SEARCH_TERM", searchTerm: "" })}
                  placeholder="Search"
                  style={{ name: "3s4yqf", styles: "width: 100%;" }}
                  value={state.searchTerm}
                />
                {renderCheckboxes(filteredPublishedByData, true, state.filters.publishers, handlePublisherChange)}
              </div>
            )}
          </Accordion>
        </div>

        <div css={styles.accordionWrapper}>
          <Accordion
            onToggle={() => toggleAccordion("duration")}
            title={
              <div
                css={styles.accordionTitleStyle(state.accordionStates.duration)}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion("duration");
                }}
              >
                <Image
                  src={state.accordionStates.duration ? AssetsImg.ic_clock : AssetsImg.ic_clock_blue}
                  alt="clock"
                  height={20}
                  width={20}
                  css={styles.iconAccordian}
                />
                Duration{" "}
                {state.filters.durations.length > 0 &&
                  (state.filters.durations.includes("Select All")
                    ? `(${getSelectedNames(DURATION_DATA, state.filters.durations)})`
                    : `(${state.filters.durations.join(", ")})`)}
              </div>
            }
            isOpen={state.accordionStates.duration}
          >
            {state.accordionStates.duration && (
              <div>{renderCheckboxes(DURATION_DATA, true, state.filters.durations, handleDurationChange)}</div>
            )}
          </Accordion>
        </div>

        <div css={styles.accordionWrapper}>
          <Accordion
            onToggle={() => toggleAccordion("dateRange")}
            title={
              <div
                css={styles.accordionTitleStyle(state.accordionStates.dateRange)}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion("dateRange");
                }}
              >
                <Image
                  src={state.accordionStates.dateRange ? AssetsImg.ic_calendar_white : AssetsImg.ic_calendar}
                  alt="calendar"
                  height={20}
                  width={20}
                  css={styles.iconAccordian}
                />
                Date Range{" "}
                {state.filters.dateRange && (
                  <span>
                    ({state.filters.dateRange === "Custom" && state.customDateRange
                      ? formatDateRange(state.customDateRange.startDate, state.customDateRange.endDate)
                      : state.filters.dateRange})
                  </span>
                )}
              </div>
            }
            isOpen={state.accordionStates.dateRange}
          >
            {state.accordionStates.dateRange && (
              <div>{renderCheckboxes(DATE_RANGE_DATA, false, [state.filters.dateRange || ""], handleDateRangeChange)}</div>
            )}
          </Accordion>
        </div>

        <div css={styles.customDateRangePickerStyle(state.filters.dateRange)}>
          <DateRangePicker
            key={resetTrigger}
            onChange={handleDateRangePickerChange}
            minDate={new Date("2000-01-01")}
            maxDate={new Date()}
            defaultSelectedDate={
              state.customDateRange
                ? { startDate: new Date(state.customDateRange.startDate).getTime(), endDate: new Date(state.customDateRange.endDate).getTime() }
                : undefined
            }
          />
        </div>

        <div css={styles.buttonWrapper}>
          <button css={styles.resetButton} onClick={handleReset}>
            RESET
          </button>
          <Button onClick={handleApply} size="medium" type="primary">
            APPLY
          </Button>
        </div>
      </SidePanel>
    </>
  );
};

export default FilterSidePanel;