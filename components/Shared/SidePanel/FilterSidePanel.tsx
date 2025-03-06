/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Checkbox, colors, Divider, Radio, SearchInput, SidePanel } from "zebpay-ui";
import { Accordion, utils } from "zebpay-ui";
import Image from "next/image";
import { accordionWrapper, buttonWrapper, filterStyle, iconAccordian, resetButton } from "./styles";
import AssetsImg from "@public/images";
import DateRangePicker, { DateRange } from "../DateRangePicker";
import { useState } from "react";

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

  const toggleAccordion = (key: string) => {
    setAccordionStates({
      publishedBy: key === "publishedBy" ? !accordionStates.publishedBy : false,
      duration: key === "duration" ? !accordionStates.duration : false,
      dateRange: key === "dateRange" ? !accordionStates.dateRange : false,
    });
  };

  // Data for Published By section
  const publishedByData = [
    { label: "Select All", indeterminate: true },
    { label: "Forbes" },
    { label: "Coindesk" },
    { label: "CoinTelegraph" },
  ];

  // Filtered Published By data based on search term
  const filteredPublishedByData = publishedByData.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Data for Duration section
  const durationData = [
    { label: "Select All", indeterminate: true },
    { label: "01 - 05 Mins" },
    { label: "05 - 10 Mins" },
    { label: "10 - 20 Mins" },
    { label: "20+ Mins" },
  ];

  // Data for Date Range section
  const dateRangeData = [
    { label: "Last 7 Days" },
    { label: "Last 1 Month" },
    { label: "Last 3 Months" },
    { label: "Last 1 Year" },
    { label: "Custom" },
  ];

  const handlePublisherChange = (label: string) => {
    if (label === "Select All") {
      const allPublishers = publishedByData
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

  // Handle checkbox changes for durations
  const handleDurationChange = (label: string) => {
    if (label === "Select All") {
      // Select all durations except "Select All" itself
      const allDurations = durationData
        .filter((item) => item.label !== "Select All")
        .map((item) => item.label);
      setFilters((prev) => ({
        ...prev,
        durations: allDurations,
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        durations: prev.durations.includes(label)
          ? prev.durations.filter((item) => item !== label)
          : [...prev.durations, label],
      }));
    }
  };

  // Handle radio button changes for date range
  const handleDateRangeChange = (label: string) => {
    setFilters((prev) => ({
      ...prev,
      dateRange: label,
    }));
  };

  // Handle custom date range selection from DateRangePicker
  const handleDateRangePickerChange = (dateRange: DateRange) => {
    setCustomDateRange(dateRange);
  };

  // Render checkboxes or radio buttons
  const renderCheckboxes = (
    data: { label: string; indeterminate?: boolean }[],
    isCheckbox: boolean,
    onChange: (label: string) => void
  ) => {
    return data.map((item, index) => {
      const isLast = index === data.length - 1;
      return (
        <div key={index}>
          {isCheckbox ? (
            <div css={{ padding: "0.75rem", paddingLeft: "0rem" }}>
              <Checkbox
                checked={
                  (data === publishedByData && filters.publishers.includes(item.label)) ||
                  (data === durationData && filters.durations.includes(item.label))
                }
                indeterminate={item.indeterminate}
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
                selected={filters.dateRange === item.label}
                value={1}
                // style={{ marginRight: "1rem" }}
              />
            </div>
          )}
          {!isLast && <Divider spacing={2} />}
        </div>
      );
    });
  };

  // Handle Apply button click
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

  // Handle Reset button click
  const handleReset = () => {
    setFilters({ publishers: [], durations: [], dateRange: null });
    setAccordionStates({ publishedBy: false, duration: false, dateRange: false });
    setCustomDateRange(null);
    setSearchTerm("");
    onResetFilters();
    setIsPanelOpen(false);
  };

  // Helper function to get selected names for title
  const getSelectedNames = (data: { label: string }[], selected: string[]) => {
    const allNames = data
      .filter((item) => item.label !== "Select All")
      .map((item) => item.label)
      .filter((label) => selected.includes(label));
    return allNames.length > 0 ? allNames.join(", ") : "";
  };

  return (
    <>
      {/* Clickable icon to open SidePanel */}
      <button css={filterStyle} onClick={() => setIsPanelOpen(true)} aria-label="Open Filter">
        <Image src={AssetsImg.ic_filter} alt="filter" width={16} height={16} />
      </button>

      {/* SidePanel Component */}
      <SidePanel
        title="Filter News"
        onClose={() => setIsPanelOpen(false)}
        onBack={() => setIsPanelOpen(false)}
        open={isPanelOpen}
        style={css({ zIndex: 1 })}
      >
        {/* Published By Accordion */}
        <div css={accordionWrapper}>
          <Accordion
            onToggle={() => toggleAccordion("publishedBy")}
            title={
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  width: 100%;
                  color: ${accordionStates.publishedBy ? colors.Zeb_Solid_White : colors.Zeb_Solid_Light_Blue};
                `}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion("publishedBy");
                }}
              >
                <Image src={AssetsImg.ic_document} alt="doc" height={20} width={20} css={iconAccordian} />
                Published By{" "}
                {filters.publishers.length > 0 &&
                  (filters.publishers.includes("Select All")
                    ? `(${getSelectedNames(publishedByData, filters.publishers)})`
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
                {renderCheckboxes(filteredPublishedByData, true, handlePublisherChange)}
              </div>
            )}
          </Accordion>
        </div>

        {/* Duration Accordion */}
        <div css={accordionWrapper}>
          <Accordion
            onToggle={() => toggleAccordion("duration")}
            title={
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  width: 100%;
                  color: ${accordionStates.duration ? colors.Zeb_Solid_White : colors.Zeb_Solid_Light_Blue};
                `}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion("duration");
                }}
              >
                <Image src={AssetsImg.ic_clock} alt="clock" height={20} width={20} css={iconAccordian} />
                Duration{" "}
                {filters.durations.length > 0 &&
                  (filters.durations.includes("Select All")
                    ? `(${getSelectedNames(durationData, filters.durations)})`
                    : `(${filters.durations.join(", ")})`)}
              </div>
            }
            isOpen={accordionStates.duration}
          >
            {accordionStates.duration && (
              <div>{renderCheckboxes(durationData, true, handleDurationChange)}</div>
            )}
          </Accordion>
        </div>

        {/* Date Range Accordion */}
        <div css={accordionWrapper}>
          <Accordion
            onToggle={() => toggleAccordion("dateRange")}
            title={
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  width: 100%;
                  color: ${accordionStates.dateRange ? colors.Zeb_Solid_White : colors.Zeb_Solid_Light_Blue};
                `}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion("dateRange");
                }}
              >
                <Image src={AssetsImg.ic_calendar} alt="calender" height={20} width={20} css={iconAccordian} />
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
              <div>
                {renderCheckboxes(dateRangeData, false, handleDateRangeChange)}
              </div>
            )}
          </Accordion>
        </div>

        {/* DateRangePicker Outside Accordion */}
        <div
          css={css`
            margin-top: ${utils.remConverter(-8)};
            padding: ${utils.remConverter(16)};
            background-color: ${colors.Zeb_Solid_BG_Blue};
            border-radius: ${utils.remConverter(4)};
            display: ${filters.dateRange === "Custom" ? "block" : "none"}; 
          `}
        >
          <DateRangePicker
            onChange={handleDateRangePickerChange}
            minDate={new Date("2000-01-01")}
            maxDate={new Date()}
          />
        </div>

        {/* Buttons at the bottom */}
        <div css={buttonWrapper}>
          <button css={resetButton} onClick={handleReset}>
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