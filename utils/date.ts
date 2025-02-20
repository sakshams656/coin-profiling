import { addDays, format, subDays, subMonths } from "date-fns";
import {
  format as tzFormat,
  formatInTimeZone,
  toZonedTime
} from "date-fns-tz";
import moment from "moment";

export const dateFormat = (date: Date, pattern = "yyyy-MM-dd") => {
  return format(date, pattern);
};
export const dateTextFormat = (date: string, pattern = "yyyy-MM-dd") => {
  return format(new Date(date), pattern);
};
export const formatToLocalDate = (date: string, pattern = "yyyy-MM-dd") => {
  return formatToCurrentTimeZone(`${date}T`, pattern);
};

export const formatDateToUTC = (date: string, pattern = "yyyy-MM-dd") => {
  const formattedDate = tzFormat(toZonedTime(date, "UTC"), pattern, {
    timeZone: "UTC"
  });
  return formattedDate;
};

export const reduceDateByDays = (date: Date, days: number) => {
  return subDays(date, days);
};

export const reduceDateByMonths = (date: Date, months: number) => {
  return subMonths(date, months);
};

export const incrementDateByDays = (date: Date, days: number) => {
  return addDays(date, days);
};

export const getFormattedDaysNumber = (daysNumber: number) => {
  return `${daysNumber} ${daysNumber === 1 ? "Day" : "Days"}`;
};

export const getZeroUTCDateWithAddedDays = (
  initialDate: Date,
  addDays: number
) => {
  const dayDate = new Date(initialDate);
  dayDate.setUTCDate(dayDate.getDate() + addDays);
  dayDate.setUTCHours(0);
  dayDate.setUTCMinutes(0);
  dayDate.setUTCSeconds(0);
  dayDate.setUTCMilliseconds(0);

  return dayDate;
};

export const setUTCDate = (date: Date) => {
  const utcDate = new Date(date);
  utcDate.setUTCDate(date.getDate());
  utcDate.setUTCHours(date.getHours());
  utcDate.setUTCMinutes(date.getMinutes());
  utcDate.setUTCSeconds(date.getSeconds());
  utcDate.setUTCMilliseconds(date.getMilliseconds());

  return utcDate;
};

export const formatToCurrentTimeZone = (
  date: Date | string,
  format: string
) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return formatInTimeZone(date, timeZone, format);
};

export const getTimeZoneAbbreviation = () => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return formatInTimeZone(new Date(), timeZone, "zzz");
};

export const stringToDateTime = (
  value: string
): { date: string; time: string } => {
  const date = moment.utc(value).local().format("DD MMM YY");
  const time = moment.utc(value).local().format("hh:mm A");
  return { date, time };
};
export const epochStringToLocalDateTime = (
  value: number
): { date: string; time: string } => {
  const date = moment.utc(value).local().format("DD MMM YY");
  const time = moment.utc(value).local().format("hh:mm A");
  return { date, time };
};

export const NumberToDate = (value: number) => {
  const date = new Date(value * 1000);
  return formatToCurrentTimeZone(date, "yyyy-MM-dd");
};

export const convertNumtoDate = (value: number) => {
  if (value === 0) {
    return "";
  }

  const date = new Date(value * 1000);
  return formatToCurrentTimeZone(date, "dd LLL yy");
};

export const stringToDate = (value: string) => {
  return moment.utc(value).local().format("DD MMM YYYY");
};
