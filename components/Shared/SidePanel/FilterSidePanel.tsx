/** @jsxImportSource @emotion/react */
import { Button, Checkbox, colors, Divider, Radio, SearchInput, SidePanel } from "zebpay-ui";
import { Accordion, utils } from "zebpay-ui";
import Image from "next/image";
import AssetsImg from "@public/images";
import DateRangePicker, { DateRange } from "../DateRangePicker";
import { useState, useEffect } from "react";
import * as styles from "./styles";

// Define data as stable constants outside the component
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
  { label: "Last 7 Days" },
  { label: "Last 1 Month" },
  { label: "Last 3 Months" },
  { label: "Last 1 Year" },
  { label: "Custom" },
];

interface Filters {
  publishers: string[];
  durations: string[];
  dateRange: string | null;
}

interface FilterSidePanelProps {
  onApplyFilters: (filters: Filters) => void;
  onResetFilters: () => void;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  accordionStates: { publishedBy: boolean; duration: boolean; dateRange: boolean };
  setAccordionStates: React.Dispatch<
    React.SetStateAction<{ publishedBy: boolean; duration: boolean; dateRange: boolean }>
  >;
  customDateRange: DateRange | null;
  setCustomDateRange: React.Dispatch<React.SetStateAction<DateRange | null>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSidePanel: React.FC<FilterSidePanelProps> = ({
  onApplyFilters,
  onResetFilters,
  filters,
  setFilters,
  accordionStates,
  setAccordionStates,
  customDateRange,
  setCustomDateRange,
  searchTerm,
  setSearchTerm,
}) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    console.log("Filters updated:", filters); // Log state changes for debugging
  }, [filters]);

  const toggleAccordion = (key: string) => {
    setAccordionStates({
      publishedBy: key === "publishedBy" ? !accordionStates.publishedBy : false,
      duration: key === "duration" ? !accordionStates.duration : false,
      dateRange: key === "dateRange" ? !accordionStates.dateRange : false,
    });
  };

  const filteredPublishedByData = PUBLISHED_BY_DATA.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePublisherChange = (label: string) => {
    console.log("Changing publisher:", label, "Current filters:", filters.publishers); // Debug log
    if (label === "Select All") {
      const allPublishers = PUBLISHED_BY_DATA
        .filter((item) => item.label !== "Select All")
        .map((item) => item.label);
      setFilters((prev) => ({
        ...prev,
        publishers: prev.publishers.length === allPublishers.length ? [] : allPublishers,
      }));
    } else {
      setFilters((prev) => {
        const newPublishers = prev.publishers.includes(label)
          ? prev.publishers.filter((item) => item !== label)
          : [...prev.publishers, label];
        return { ...prev, publishers: newPublishers };
      });
    }
  };

  const handleDurationChange = (label: string) => {
    console.log("Changing duration:", label, "Current filters:", filters.durations); // Debug log
    if (label === "Select All") {
      const allDurations = DURATION_DATA
        .filter((item) => item.label !== "Select All")
        .map((item) => item.label);
      setFilters((prev) => ({
        ...prev,
        durations: prev.durations.length === allDurations.length ? [] : allDurations,
      }));
    } else {
      setFilters((prev) => {
        const newDurations = prev.durations.includes(label)
          ? prev.durations.filter((item) => item !== label)
          : [...prev.durations, label];
        return { ...prev, durations: newDurations };
      });
    }
  };

  const handleDateRangeChange = (label: string) => {
    setFilters((prev) => ({
      ...prev,
      dateRange: label,
    }));
  };

  const handleDateRangePickerChange = (dateRange: DateRange) => {
    setCustomDateRange(dateRange);
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
        ? selectedValues.length > 0 && selectedValues.length < (data.length - 1)
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
      filters.dateRange === "Custom" && customDateRange
        ? `${customDateRange.startDate} - ${customDateRange.endDate}`
        : filters.dateRange;

    onApplyFilters({
      publishers: filters.publishers,
      durations: filters.durations,
      dateRange: dateRangeValue,
    });
    setIsPanelOpen(false);
  };

  const handleReset = () => {
    setFilters({ publishers: [], durations: [], dateRange: null });
    setAccordionStates({ publishedBy: false, duration: false, dateRange: false });
    setCustomDateRange(null);
    setSearchTerm("");
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
              <div css={styles.accordionTitleStyle(accordionStates.publishedBy)} onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion("publishedBy");
                }}>
                <Image
                  src={accordionStates.publishedBy ? AssetsImg.ic_document_white : AssetsImg.ic_document}
                  alt="doc"
                  height={20}
                  width={20}
                  css={styles.iconAccordian}
                />
                Published By{" "}
                {filters.publishers.length > 0 &&
                  (filters.publishers.includes("Select All")
                    ? `(${getSelectedNames(PUBLISHED_BY_DATA, filters.publishers)})`
                    : `(${filters.publishers.join(", ")})`)}
              </div>
            }
            isOpen={accordionStates.publishedBy}
          >
            {accordionStates.publishedBy && (
              <div>
                <SearchInput
                  autoFocus
                  disableShadow
                  onChange={(target) => setSearchTerm(target.value)}
                  onClear={() => setSearchTerm("")}
                  onFocus={() => console.log("Search input focused")}
                  placeholder="Search"
                  style={{ name: "3s4yqf", styles: "width: 100%;" }}
                  value={searchTerm}
                />
                {renderCheckboxes(filteredPublishedByData, true, filters.publishers, handlePublisherChange)}
              </div>
            )}
          </Accordion>
        </div>

        <div css={styles.accordionWrapper}>
          <Accordion
            onToggle={() => toggleAccordion("duration")}
            title={
              <div css={styles.accordionTitleStyle(accordionStates.duration)} onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion("duration");
                }}>
                <Image
                  src={accordionStates.duration ? AssetsImg.ic_clock : AssetsImg.ic_clock_blue}
                  alt="clock"
                  height={20}
                  width={20}
                  css={styles.iconAccordian}
                />
                Duration{" "}
                {filters.durations.length > 0 &&
                  (filters.durations.includes("Select All")
                    ? `(${getSelectedNames(DURATION_DATA, filters.durations)})`
                    : `(${filters.durations.join(", ")})`)}
              </div>
            }
            isOpen={accordionStates.duration}
          >
            {accordionStates.duration && (
              <div>{renderCheckboxes(DURATION_DATA, true, filters.durations, handleDurationChange)}</div>
            )}
          </Accordion>
        </div>

        <div css={styles.accordionWrapper}>
          <Accordion
            onToggle={() => toggleAccordion("dateRange")}
            title={
              <div css={styles.accordionTitleStyle(accordionStates.dateRange)} onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion("dateRange");
                }}>
                <Image
                  src={accordionStates.dateRange ? AssetsImg.ic_calendar_white : AssetsImg.ic_calendar}
                  alt="calendar"
                  height={20}
                  width={20}
                  css={styles.iconAccordian}
                />
                Date Range{" "}
                {filters.dateRange && (
                  <span>
                    ({filters.dateRange === "Custom" && customDateRange
                      ? `${customDateRange.startDate} - ${customDateRange.endDate}`
                      : filters.dateRange})
                  </span>
                )}
              </div>
            }
            isOpen={accordionStates.dateRange}
          >
            {accordionStates.dateRange && (
              <div>{renderCheckboxes(DATE_RANGE_DATA, false, [filters.dateRange || ""], handleDateRangeChange)}</div>
            )}
          </Accordion>
        </div>

        <div css={styles.customDateRangePickerStyle(filters.dateRange)}>
          <DateRangePicker
            onChange={handleDateRangePickerChange}
            minDate={new Date("2000-01-01")}
            maxDate={new Date()}
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