import "react-calendar/dist/Calendar.css";

import AssetsImg from "@public/images";
import { add, sub } from "date-fns";
import { MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import Calendar from "react-calendar";
import * as styles from "./styles";

import { css, SerializedStyles } from "@emotion/react";
import { range } from "lodash";

import { ZInput } from "@components/Shared";
import SelectedOption from "@components/Shared/DateRangePicker/SelectedOption";
import ZCustomSelect from "@components/Shared/ZCustomSelect";

import { IZCustomSelectOption, DateRangeOptions } from "@typings/api/shared";

import { dateFormat } from "@utils/date";

import { useOnClickOutside } from "@hooks/useOnClickOutside";

import { mixins, utils } from "zebpay-ui";
import NOOB from "@constants/noob";

interface DateRangePickerProps {
  calendarCustomStyles?: SerializedStyles;
  errorMessage?: string;
  inputDateFormat?: string;
  minDate?: Date;
  maxDate?: Date;
  onChange: (dateRange: DateRange) => void;
  yearRestriction?: number;
  defaultSelectedDate?: {
    type?: DateRangeOptions | "";
    startDate?: number;
    endDate?: number;
  };
}

export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface DateParams {
  month: string;
  nextMonth: string;
  year: string;
  nextYear: string;
}

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const DATE_MONTH_PATTERN = "MMM";
const DATE_YEAR_PATTERN = "yyyy";
const INITIAL_YEAR = 2003;

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  calendarCustomStyles,
  errorMessage,
  inputDateFormat,
  minDate,
  maxDate,
  onChange,
  yearRestriction,
  defaultSelectedDate
}) => {
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>(
    undefined
  );
  const [startDateValue, setStartDateValue] = useState<Date>();
  const [endDateValue, setEndDateValue] = useState<Date>();
  const [activeStartDate, setActiveStartDate] = useState<Date>(new Date());
  const [dateParams, setDateParams] = useState<DateParams | undefined>(
    undefined
  );
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);
  const [toggleRangeSelect, setToggleRangeSelect] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => {
    setCalendarOpen(false);
    setStartDateOpen(false);
    setEndDateOpen(false);
  });

  useEffect(() => {
    if (
      defaultSelectedDate &&
      defaultSelectedDate.startDate &&
      defaultSelectedDate.endDate
    ) {
      const startDate = new Date(defaultSelectedDate.startDate * 1000);
      const endDate = new Date(defaultSelectedDate.endDate * 1000);
      setStartDateValue(startDate);
      setEndDateValue(endDate);
    }
  }, []);
  useEffect(() => {
    if (endDateOpen && endDateValue) {
      const date = endDateValue.getDate();
      const dateMonth = endDateValue.getMonth();
      let dateYear = endDateValue.getFullYear();
      let month = dateMonth;
      if (date === 1) {
        month = dateMonth == 0 ? 11 : dateMonth - 1;

        dateYear = dateMonth === 0 ? dateYear - 1 : dateYear;
      }

      onSetMonth(MONTH_NAMES[month], false);
      onSetYear(dateYear + "");
    } else if (startDateOpen && startDateValue) {
      const date = startDateValue.getDate();
      const dateMonth = startDateValue.getMonth();
      let dateYear = startDateValue.getFullYear();
      let month = dateMonth;

      if (date === 1) {
        month = dateMonth == 0 ? 11 : dateMonth - 1;

        dateYear = dateMonth === 0 ? dateYear - 1 : dateYear;
      }

      onSetMonth(MONTH_NAMES[month]);
      onSetYear(dateYear + "");
    }
  }, [calendarOpen]);

  useEffect(() => {
    onSetDate(addOrSubtractOneMonth(new Date()));
  }, []);

  useEffect(() => {
    setToggleRangeSelect(false);
  }, [calendarOpen]);
  const handleDateRangeChange = ([startDate, endDate]: Date[]): void => {
    setCalendarOpen(false);
    setStartDateOpen(false);
    setEndDateOpen(false);
    setSelectedDates([startDate, endDate]);
    const formattedDate = {
      startDate: dateFormat(startDate),
      endDate: dateFormat(endDate)
    };
    setStartDateValue(startDate);
    setEndDateValue(endDate);
    onChange(formattedDate);
    setToggleRangeSelect(false); //Range has been selected once.
  };
  const handleDateChange = (date: Date): void => {
    if (endDateOpen) {
      setEndDateOpen(false);
      setEndDateValue(date);
      if (!startDateValue) {
        setStartDateOpen(true);
        setToggleRangeSelect(!startDateValue);
        return;
      }
    } else if (startDateOpen) {
      setStartDateOpen(false);
      setStartDateValue(date);
      if (!endDateValue) {
        setEndDateOpen(true);
        setToggleRangeSelect(!endDateValue);
        return;
      }
    }

    //
  };
  useEffect(() => {
    if (startDateValue && endDateValue) {
      setSelectedDates([startDateValue, endDateValue]);
      setCalendarOpen(false);
      const formattedDate = {
        startDate: dateFormat(startDateValue),
        endDate: dateFormat(endDateValue)
      };
      onChange(formattedDate);
    }
  }, [startDateValue, endDateValue]);

  const onSetDate = (date: Date) => {
    setActiveStartDate(date);
    calculateDateParams(date);
  };

  const onSetMonth = (month?: string, isNextSelect?: boolean) => {
    const monthIndex = month
      ? MONTH_NAMES.indexOf(month)
      : activeStartDate.getMonth();
    const monthNumber = monthIndex - (isNextSelect ? 1 : 0);
    activeStartDate.setMonth(monthNumber);
    onSetDate(activeStartDate);
  };

  const onSetYear = (year: string) => {
    activeStartDate.setFullYear(+year);
    onSetDate(activeStartDate);
  };

  const onClickArrow = (
    event: MouseEvent<HTMLButtonElement>,
    isNext?: boolean
  ) => {
    event.preventDefault();
    const newDate = addOrSubtractOneMonth(activeStartDate, isNext);
    onSetDate(newDate);
  };

  const calculateDateParams = (date: Date) => {
    const nextMonthDate = addOrSubtractOneMonth(date, true);
    setDateParams({
      month: dateFormat(date, DATE_MONTH_PATTERN),
      nextMonth: dateFormat(nextMonthDate, DATE_MONTH_PATTERN),
      year: dateFormat(date, DATE_YEAR_PATTERN),
      nextYear: dateFormat(nextMonthDate, DATE_YEAR_PATTERN)
    });
  };

  const addOrSubtractOneMonth = (date: Date, shouldAdd?: boolean) => {
    const month = { months: 1 };
    return shouldAdd ? add(date, month) : sub(date, month);
  };

  const listOfMonths = useMemo(() => {
    return MONTH_NAMES.map(
      (month): IZCustomSelectOption => ({
        value: month,
        component: <span css={styles.dateRangePickerMonth}>{month}</span>,
        customSelectedComponent: <SelectedOption option={month} />,
        searchKeywords: month
      })
    );
  }, []);

  const listOfYears = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const years = range(yearRestriction ?? INITIAL_YEAR, currentYear + 1);

    return years.map(
      (year): IZCustomSelectOption => ({
        value: year.toString(),
        component: <span css={styles.dateRangePickerMonth}>{year}</span>,
        customSelectedComponent: <SelectedOption option={year.toString()} />,
        searchKeywords: year.toString()
      })
    );
  }, []);

  const isDateInRange = (date: Date, minDate?: Date, maxDate?: Date) => {
    if (startDateOpen && maxDate) {
      return date <= maxDate;
    } else if (endDateOpen && minDate) {
      return date >= minDate;
    } else {
      return true;
    }
  };
  return (
    <div css={utils.widthPercentage(100)} style={{marginLeft: utils.remConverter(15)}}>
      <div
        data-test-id={"dateRange"}
        ref={dateRef}
        css={[mixins.flexJustifiedBetween, styles.dateRangePickerContainer]}
      >
        <ZInput
          label="Start Date"
          name="startDate"
          invalid={!!errorMessage}
          placeholder="Select Start Date"
          customCss={styles.dateInput}
          value={
            startDateValue ? dateFormat(startDateValue, inputDateFormat) : ""
          }
          appendix={<img src={AssetsImg.ic_calendar.src} alt="Calendar icon" />}
          onClick={() => {
            setCalendarOpen(true);
            setEndDateOpen(false);
            setStartDateOpen(true);
          }}
          onChange={NOOB}
          isFocused={startDateOpen}
          isSelected={startDateOpen}
        />
        <ZInput
          label="End Date"
          name="endDate"
          placeholder="Enter End Date"
          customCss={styles.dateInput}
          invalid={!!errorMessage}
          value={endDateValue ? dateFormat(endDateValue, inputDateFormat) : ""}
          appendix={<img src={AssetsImg.ic_calendar.src} alt="Calendar icon" />}
          onClick={() => {
            setCalendarOpen(true);
            setStartDateOpen(false);
            setEndDateOpen(true);
          }}
          onChange={NOOB}
          isFocused={endDateOpen}
          isSelected={endDateOpen}
        />
      </div>
      <span css={styles.errorMessage}>{errorMessage}</span>
      {calendarOpen && (
        <div
          css={[
            styles.dateRangePicker(dateRef.current?.getBoundingClientRect()),
            calendarCustomStyles
          ]}
          ref={wrapperRef}
        >
          <div css={styles.dateRangePickerNavigation}>
            <div css={styles.dateRangePickerNavigationBox}>
              <button
                css={styles.arrowButton}
                onClick={event => onClickArrow(event)}
              >
                <img
                  alt="arrow-left"
                  src={AssetsImg.ic_arrow_left.src}
                  css={[styles.monthArrow, styles.monthArrowLeft]}
                />
              </button>
              <ZCustomSelect
                value={dateParams?.month}
                onChange={onSetMonth}
                list={listOfMonths}
                invalid={false}
                customListStyles={styles.dateRangeSelectList}
                customContainerStyles={styles.dateRangeSelectMarginRight}
                containerListStyles={styles.dateRangeSelectListContainer}
                hasCustomSelectedComponent
                hideArrow
                noSearch
                small
              />
              <ZCustomSelect
                value={dateParams?.year}
                onChange={onSetYear}
                list={listOfYears}
                invalid={false}
                customListStyles={styles.dateRangeSelectListAlignRight}
                customContainerStyles={styles.dateRangeSelectBackground}
                containerListStyles={styles.dateRangeSelectListContainer}
                searchPlaceholder="Search"
                hasCustomSelectedComponent
                smallSearch
                hideArrow
                small
                searchOptions={{
                  limit: 4,
                  type: "number"
                }}
              />
            </div>
            <div
              css={[
                styles.dateRangePickerNavigationBox,
                styles.dateRangePickerNavigationBoxEnd
              ]}
            >
              <ZCustomSelect
                value={dateParams?.nextMonth}
                onChange={month => onSetMonth(month, true)}
                list={listOfMonths}
                invalid={false}
                customListStyles={styles.dateRangeSelectList}
                customContainerStyles={styles.dateRangeSelectMarginRight}
                containerListStyles={styles.dateRangeSelectListContainer}
                hasCustomSelectedComponent
                hideArrow
                noSearch
                small
              />
              <ZCustomSelect
                value={dateParams?.nextYear}
                onChange={onSetYear}
                list={listOfYears}
                invalid={false}
                customListStyles={styles.dateRangeSelectListAlignRight}
                customContainerStyles={styles.dateRangeSelectBackground}
                containerListStyles={styles.dateRangeSelectListContainer}
                searchPlaceholder="Search"
                hasCustomSelectedComponent
                smallSearch
                hideArrow
                small
              />
              <button
                css={styles.arrowButton}
                onClick={event => onClickArrow(event, true)}
              >
                <img
                  alt="arrow-right"
                  src={AssetsImg.ic_arrow_right.src}
                  css={[styles.monthArrow, styles.monthArrowRight]}
                />
              </button>
            </div>
          </div>
          <Calendar
            onChange={
              toggleRangeSelect ? handleDateRangeChange : handleDateChange
            }
            value={selectedDates}
            formatShortWeekday={(locale, date) =>
              `${date
                .toLocaleString(locale, { weekday: "short" })
                .slice(0, -1)}`
            }
            tileDisabled={({ date }) => {
              return !isDateInRange(date, startDateValue, endDateValue); // Disable dates outside range
            }}
            activeStartDate={activeStartDate}
            showFixedNumberOfWeeks={false}
            showNeighboringMonth={false}
            showNavigation={false}
            showDoubleView
            selectRange={toggleRangeSelect}
            maxDate={maxDate}
            minDate={minDate}
            tileClassName={({ date }) =>
              // Check if the date is within the selected range and highlight it
              selectedDates &&
              selectedDates[0] &&
              date >= selectedDates[0] &&
              selectedDates[1] &&
              date <= selectedDates[1]
                ? "highlight"
                : null
            }
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
