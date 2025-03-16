import React, { useState, useRef, useEffect } from "react";
import {
  SidePanel,
  Button,
  Accordion,
  Divider,
  Checkbox,
  Radio,
  utils,
  colors,
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
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const [tempCategories, setTempCategories] =
    useState<string[]>(selectedCategories);
  const [tempDurations, setTempDurations] =
    useState<string[]>(selectedDurations);
  const [tempDateRange, setTempDateRange] = useState<string>(selectedDateRange);

  useEffect(() => {
    setTempCategories(selectedCategories);
  }, [selectedCategories]);

  useEffect(() => {
    setTempDurations(selectedDurations);
  }, [selectedDurations]);

  useEffect(() => {
    setTempDateRange(selectedDateRange);
  }, [selectedDateRange]);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isDurationOpen, setIsDurationOpen] = useState(false);
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false);

  const [isCustomDate, setIsCustomDate] = useState(false);
  const [customDateRange, setCustomDateRange] = useState<DateRange | null>(
    null
  );

  const handleCategorySelect = (value: string) => {
    setTempCategories((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  const handleDurationSelect = (value: string) => {
    setTempDurations((prev) =>
      prev.includes(value)
        ? prev.filter((dur) => dur !== value)
        : [...prev, value]
    );
  };

  const handleDateRangeSelect = (value: string) => {
    if (value === "custom") {
      setIsCustomDate(true);
      setTempDateRange("");
      setCustomDateRange(null);
    } else {
      setIsCustomDate(false);
      setTempDateRange(value);
    }
  };

  const handleDateRangePickerChange = (range: DateRange) => {
    setCustomDateRange(range);
  };

  const handleApplyFilters = () => {
    if (isCustomDate && customDateRange) {
      const formattedStartDate = new Date(customDateRange.startDate)
        .toISOString()
        .split("T")[0];
      const formattedEndDate = new Date(customDateRange.endDate)
        .toISOString()
        .split("T")[0];
      onDateRangeChange(`${formattedStartDate} - ${formattedEndDate}`);
    } else {
      onDateRangeChange(tempDateRange);
    }
    onCategoryChange(tempCategories);
    onDurationChange(tempDurations);

    setIsPanelOpen(false);
  };

  const handleResetFilters = () => {
    setTempCategories([]);
    setTempDurations([]);
    setTempDateRange("");
    setCustomDateRange(null);
    setIsCustomDate(false);

    onCategoryChange([]);
    onDurationChange([]);
    onDateRangeChange("");

    if (onReset) {
      onReset();
    }

    setIsPanelOpen(false);
  };

  const handleSelectAll = (isChecked: boolean) => {
    const allCategories = [
      "Announcement",
      "Coin Prediction",
      "Crypto",
      "Market Analysis",
      "Others",
    ];
    if (isChecked) {
      setTempCategories(allCategories);
    } else {
      setTempCategories([]);
    }
  };

  const categoryOptions = [
    { label: "Announcements", value: "Announcement" },
    { label: "Coin Prediction", value: "Coin Prediction" },
    { label: "Crypto", value: "Crypto" },
    { label: "Market Analysis", value: "Market Analysis" },
    { label: "Others", value: "Others" },
  ];

  const handleAccordionToggle = (section: string) => {
    if (section === "category") {
      setIsCategoryOpen((prev) => !prev);
      setIsDurationOpen(false);
      setIsDateRangeOpen(false);
    } else if (section === "duration") {
      setIsDurationOpen((prev) => !prev);
      setIsCategoryOpen(false);
      setIsDateRangeOpen(false);
    } else if (section === "dateRange") {
      setIsDateRangeOpen((prev) => !prev);
      setIsCategoryOpen(false);
      setIsDurationOpen(false);
    }
  };

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
    isCustomDate && customDateRange
      ? `${formatDate(new Date(customDateRange.startDate))} - ${formatDate(new Date(customDateRange.endDate))}`
      : dateRangeLabels[tempDateRange] || "Select Date";

  const handleSortChange = (value: string) => {
    onSortChange(value);
  };

  return (
    <div css={filterAndUpdownFrame}>
      <div
        css={iconBox}
        onClick={() => setIsPanelOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <Icon
          name="icon icon-filter"
          style={icon}
        />
      </div>
      <div css={iconBox} style={{ cursor: "pointer" }}>
        <Dropdown onSortChange={handleSortChange} />
      </div>
      <SidePanel
        onBack={() => setIsPanelOpen(false)}
        onClose={() => setIsPanelOpen(false)}
        title="Filter Blogs"
        open={isPanelOpen}
      >
        <div css={insidePanel}>
          <Accordion 
            isOpen={isCategoryOpen}
            onToggle={() => handleAccordionToggle("category")}
            title={
              <div css={title(isCategoryOpen)}>
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
            <div

            >
              <div
                css={accordion_option_inside}
              >
                <Checkbox
                  indeterminate
                  checked={tempCategories.length === categoryOptions.length}
                  onChange={(e) => handleSelectAll(e.checked)}
                  style={box}
                  value={1}
                />
                <label
                  htmlFor="selectAll"
                  style={{fontSize:"14px"}}
                >
                  Select All
                </label>
              </div>

              <Divider spacing={2} />

              {categoryOptions.map((option, index) => (
                <React.Fragment key={option.value}>
                  <div
                    css={accordion_option_inside}
                  >
                    <Checkbox
                      checked={tempCategories.includes(option.value)}
                      onChange={() => handleCategorySelect(option.value)}
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
            isOpen={isDurationOpen}
            onToggle={() => handleAccordionToggle("duration")}
            title={
              <div css={title(isDurationOpen)}>
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
            <div

            >
              {[
                { label: "01 - 05 Mins", value: "01 - 05 Mins" },
                { label: "05 - 10 Mins", value: "05 - 10 Mins" },
                { label: "10 - 20 Mins", value: "10 - 20 Mins" },
                { label: "20+ Mins", value: "20+ Mins" },
              ].map((option, index) => (
                <React.Fragment key={option.value}>
                  <div
                    css={accordion_option_inside}
                  >
                    <Checkbox
                      checked={tempDurations.includes(option.value)}
                      onChange={() => handleDurationSelect(option.value)}
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
            isOpen={isDateRangeOpen}
            onToggle={() => handleAccordionToggle("dateRange")}
            style={accordion_option}
            title={
              <div css={title(isDateRangeOpen)}>
                <Icon
                  name="icon icon-calendar"
                  style={calendar_icon}
                />
                <div
                >
                  Date Range
                  {(tempDateRange || isCustomDate) && (
                    <span css={added}>({selectedDateRangeLabel})</span>
                  )}
                </div>
              </div>
            }
          >
            <div

            >
              {[
                { label: "Last 7 Days", value: "Last 7 Days" },
                { label: "Last Month", value: "Last Month" },
                { label: "Last 3 Months", value: "Last 3 Months" },
                { label: "Last 1 Year", value: "Last 1 Year" },
                { label: "Custom", value: "custom" },
              ].map((option, index) => (
                <React.Fragment key={option.value}>
                  <div
                    css={accordion_option_inside}
                  >
                    <Radio
                      name="date-range-checkbox"
                      checked={
                        tempDateRange === option.value ||
                        (isCustomDate && option.value === "custom")
                      }
                      onChange={() => handleDateRangeSelect(option.value)}
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

        {isCustomDate && (
          <div
            css={customDate}
          >
            <DateRangePicker
              onChange={handleDateRangePickerChange}
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
