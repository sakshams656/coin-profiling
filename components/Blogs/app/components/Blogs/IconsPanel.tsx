/** @jsxImportSource @emotion/react */
"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  SidePanel,
  Button,
  Accordion,
  Divider,
  Checkbox,
  Radio,
} from "zebpay-ui";

import FilterIcon from "../../icons/FilterIcon";
import {
  Added,
  ButtonGroup,
  InsidePanel,
  StyledSidePanel,
  Title,
  filterAndUpdownFrame,
  filter,
  updown,
} from "../../styles/iconsPanel";
import { css } from "@emotion/react";
import Dropdown from "./Dropdown";
import AssetsImg from "@public/images";
import Image from "next/image";

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


  const [tempCategories, setTempCategories] = useState<string[]>(selectedCategories);
  const [tempDurations, setTempDurations] = useState<string[]>(selectedDurations);
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

  const sidePanelRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidePanelRef.current &&
      !sidePanelRef.current.contains(event.target as Node)
    ) {
      setIsPanelOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    if (value === tempDateRange) {
      setTempDateRange("");
    } else {
      setTempDateRange(value);
    }
  };

  const handleApplyFilters = () => {
    onCategoryChange(tempCategories);
    onDurationChange(tempDurations);
    onDateRangeChange(tempDateRange);

    setIsPanelOpen(false);
  };

  const handleResetFilters = () => {
    setTempCategories([]);
    setTempDurations([]);
    setTempDateRange("");

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

  const dateRangeLabels = {
    "7d": "Last 7 Days",
    "1m": "Last Month",
    "3m": "Last 3 Months",
    "1y": "Last 1 Year",
  };

  const handleSortChange = (value: string) => {
    onSortChange(value);
  };

  return (
    <div css={filterAndUpdownFrame}>
      <div
        css={filter}
        onClick={() => setIsPanelOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <FilterIcon />
      </div>
      <div css={updown} style={{ cursor: "pointer" }}>
        <Dropdown onSortChange={handleSortChange} />
      </div>
      <StyledSidePanel
        onBack={() => setIsPanelOpen(false)}
        onClose={() => setIsPanelOpen(false)}
        title="Filter Blogs"
        open={isPanelOpen}
        ref={sidePanelRef}
      >
        <div css={InsidePanel}>
          <Accordion
            isOpen={isCategoryOpen}
            onToggle={() => handleAccordionToggle("category")}
            title={
              <div css={Title(isCategoryOpen)}>
                <Image
                  src={AssetsImg.ic_reports}
                  css={css`
                    margin-right: 0.5rem;
                  `}
                />
                Category
                {selectedCategories.length > 0 && (
                  <span css={Added}>({selectedCategories.join(", ")})</span>
                )}
              </div>
            }
            style={{
              marginBottom: "0.6rem",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            <div
              css={css`
                margin-top: 12px;
                font-family: "Lato", "Noto_Serif", sans-serif;
              `}
            >
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  margin-bottom: 12px;
                `}
              >
                <Checkbox
                  indeterminate
                  name="test-checkbox"
                  checked={tempCategories.length === categoryOptions.length}
                  onChange={(e) => handleSelectAll(e.checked)}
                  style={{ marginRight: "1rem" }}
                  value={1}
                />
                <label
                  htmlFor="selectAll"
                  css={css`
                    font-size: 14px;
                  `}
                >
                  Select All
                </label>
              </div>

              <Divider spacing={2} />

              {categoryOptions.map((option, index) => (
                <React.Fragment key={option.value}>
                  <div
                    css={css`
                      display: flex;
                      align-items: center;
                      margin: 12px 0;
                    `}
                  >
                    <Checkbox
                      name="category-checkbox"
                      checked={tempCategories.includes(option.value)}
                      onChange={() => handleCategorySelect(option.value)}
                      value={option.value}
                      style={{ marginRight: "1rem" }}
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
              <div css={Title(isDurationOpen)}>
                <Image
                  src={AssetsImg.ic_duration}
                  css={css`
                    margin-right: 0.5rem;
                  `}
                />
                Duration
                {selectedDurations.length > 0 && (
                  <span css={Added}>({selectedDurations.join(", ")})</span>
                )}
              </div>
            }
            style={{
              marginBottom: "0.6rem",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            <div
              css={css`
                margin-top: 12px;
              `}
            >
              {[
                { label: "01 - 05 Mins", value: "1-5 mins" },
                { label: "05 - 10 Mins", value: "5-10 mins" },
                { label: "10 - 20 Mins", value: "10-20 mins" },
                { label: "20+ Mins", value: "20+ mins" },
              ].map((option, index) => (
                <React.Fragment key={option.value}>
                  <div
                    css={css`
                      display: flex;
                      align-items: center;
                      margin: 12px 0;
                    `}
                  >
                    <Checkbox
                      name="duration-checkbox"
                      checked={tempDurations.includes(option.value)}
                      onChange={() => handleDurationSelect(option.value)}
                      value={option.value}
                      style={{ marginRight: "1rem" }}
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
            style={{
              marginBottom: "0.6rem",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
            title={
              <div css={Title(isDateRangeOpen)}>
                <i
                  className="icon icon-calendar"
                  css={css`
                    margin-right: 0.5rem;
                    font-size: 20px;
                  `}
                />
                <div
                  css={css`
                    display: flex;
                    align-items: center;
                  `}
                >
                  Date Range
                  {tempDateRange && (
                    <span css={Added}>({dateRangeLabels[tempDateRange]})</span>
                  )}
                </div>
              </div>
            }
          >
            <div
              css={css`
                margin-top: 12px;
              `}
            >
              {[
                { label: "Last 7 Days", value: "7d" },
                { label: "Last Month", value: "1m" },
                { label: "Last 3 Months", value: "3m" },
                { label: "Last 1 Year", value: "1y" },
              ].map((option, index) => (
                <React.Fragment key={option.value}>
                  <div
                    css={css`
                      display: flex;
                      align-items: center;
                      margin: 12px 0;
                    `}
                  >
                    <Radio
                      name="date-range-checkbox"
                      checked={tempDateRange === option.value}
                      onChange={() => handleDateRangeSelect(option.value)}
                      value={option.value}
                      style={{ marginRight: "1rem" }}
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

                  {index < 3 && <Divider spacing={2} />}
                </React.Fragment>
              ))}
            </div>
          </Accordion>
        </div>

        <div css={ButtonGroup}>
          <Button onClick={handleResetFilters} size="medium" type="secondary">
            Reset
          </Button>
          <Button onClick={handleApplyFilters} size="medium" type="primary">
            Apply
          </Button>
        </div>
      </StyledSidePanel>
    </div>
  );
};

export default IconsPanel;