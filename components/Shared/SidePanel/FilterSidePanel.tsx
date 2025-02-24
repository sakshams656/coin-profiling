/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { Button, Checkbox, Divider, Icon, Radio, SearchInput, SidePanel } from "zebpay-ui";
import { Accordion, utils } from "zebpay-ui";
import Image from "next/image";
import { resetButton } from "./styles";
import AssetsImg from "@public/images";

const filterStyle = css`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const accordionWrapper = css`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 0.75rem;
  border: none;
`;

const buttonWrapper = css`
  position: absolute;
  bottom: 20px;
  right: 30px;
  display: flex;
  gap: 10px;
`;

const FilterSidePanel = ({ onApplyFilters, onResetFilters }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [accordionStates, setAccordionStates] = useState({
    publishedBy: false,
    duration: false,
    dateRange: false,
  });

  // State for selected filters
  const [selectedPublishers, setSelectedPublishers] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  const toggleAccordion = (key) => {
    setAccordionStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Data for Published By section
  const publishedByData = [
    { label: "Select All", indeterminate: true },
    { label: "Forbes" },
    { label: "Coindesk" },
    { label: "Test label" },
  ];

  // Filtered Published By data based on search term
  const filteredPublishedByData = publishedByData.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Data for Duration section
  const durationData = [
    { label: "Select All", indeterminate: true },
    { label: "01-05 Mins" },
    { label: "05-10 Mins" },
    { label: "10-20 Mins" },
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

  // Handle checkbox changes for publishers
  const handlePublisherChange = (label) => {
    setSelectedPublishers((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label) // Deselect
        : [...prev, label] // Select
    );
  };

  // Handle checkbox changes for durations
  const handleDurationChange = (label) => {
    setSelectedDurations((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label) // Deselect
        : [...prev, label] // Select
    );
  };

  // Handle radio button changes for date range
  const handleDateRangeChange = (label) => {
    setSelectedDateRange(label);
  };

  // Render checkboxes or radio buttons
  const renderCheckboxes = (data, isCheckbox, onChange) => {
    return data.map((item, index) => {
      const isLast = index === data.length - 1;
      return (
        <div key={index}>
          {isCheckbox ? (
            <Checkbox
              checked={selectedPublishers.includes(item.label) || selectedDurations.includes(item.label)}
              indeterminate={item.indeterminate}
              label={item.label}
              mode="dark"
              onChange={() => onChange(item.label)}
              value={1}
              style={{
                gap: "1rem",
                padding: "0.75rem",
              }}
            />
          ) : (
            <Radio
              label={item.label}
              mode="dark"
              name="date-range"
              onChange={() => onChange(item.label)}
              selected={selectedDateRange === item.label}
              value={1}
              style={{
                padding: utils.remConverter(12),
                marginRight: "1rem"
              }}
            />
          )}
          {!isLast && <Divider spacing={2} />}
        </div>
      );
    });
  };

  // Handle Apply button click
  const handleApply = () => {
    onApplyFilters({
      publishers: selectedPublishers,
      durations: selectedDurations,
      dateRange: selectedDateRange,
    });
    setIsPanelOpen(false);
  };

  // Handle Reset button click
  const handleReset = () => {
    setSelectedPublishers([]);
    setSelectedDurations([]);
    setSelectedDateRange(null);
    setSearchTerm("");
    onResetFilters();
    setIsPanelOpen(false);
  };

  return (
    <>
      {/* Clickable icon to open SidePanel */}
      <button css={filterStyle} onClick={() => setIsPanelOpen(true)} aria-label="Open Filter">
        <Image src={AssetsImg.ic_filter} alt={"filter"} width={16} height={16}/>
      </button>

      {/* SidePanel Component */}
      <SidePanel
        title="Filter News"
        onClose={() => setIsPanelOpen(false)}
        onBack={() => setIsPanelOpen(false)}
        open={isPanelOpen}
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
                  width: 100%; // Ensure the entire area is clickable
                `}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  toggleAccordion("publishedBy");
                }}
              >
                <i className="icon icon-deactivate" css={css`margin-right: 0.5rem;`} />
                Published By {selectedPublishers.length > 0 && `(${selectedPublishers.join(", ")})`}
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
                  style={{
                    name: "3s4yqf",
                    styles: "width: 100%;",
                  }}
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
                  width: 100%; // Ensure the entire area is clickable
                `}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  toggleAccordion("duration");
                }}
              >
                <i className="icon icon-clock" css={css`margin-right: 0.5rem;`} />
                Duration {selectedDurations.length > 0 && `(${selectedDurations.join(", ")})`}
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
                  width: 100%; // Ensure the entire area is clickable
                `}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  toggleAccordion("dateRange");
                }}
              >
                <i className="icon icon-calendar" css={css`margin-right: 0.5rem;`} />
                Date Range {selectedDateRange && `(${selectedDateRange})`}
              </div>
            }
            isOpen={accordionStates.dateRange}
          >
            {accordionStates.dateRange && (
              <div>{renderCheckboxes(dateRangeData, false, handleDateRangeChange)}</div>
            )}
          </Accordion>
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