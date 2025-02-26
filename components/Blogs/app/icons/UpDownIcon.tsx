import React from "react";
import { colors } from "zebpay-ui";

interface UpDownIconProps {
  filled: boolean;
}

const UpDownIcon: React.FC<UpDownIconProps> = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10 4L5 9H15L10 4ZM10 16L15 11H5L10 16Z"
      fill={filled ? colors.Zeb_Solid_Bright_Blue : "none"} 
      stroke={filled ? "none" : "#C0C0EE"} 
      strokeWidth="0.6" 
    />
  </svg>
);

export default UpDownIcon;