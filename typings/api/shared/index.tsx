export interface IZCustomSelectOption {
    value: string;
    component: React.ReactNode;
    customSelectedComponent?: React.ReactNode;
    searchKeywords: string | null;
  }

  export enum DateRangeOptions {
    SEVEN_DAYS = "Last 7 Days",
    ONE_MONTH = "Last 1 Month",
    THREE_MONTH = "Last 3 Months",
    ONE_YEAR = "Last 1 Year",
    CUSTOM_RANGE = "Custom"
  }


  