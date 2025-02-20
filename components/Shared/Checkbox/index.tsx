import { FC, JSX } from "react";
import * as checkboxStyles from "./styles";
import { utils } from "zebpay-ui";
import { SerializedStyles } from "@emotion/react";
import AssetsImg from "../../../public/images";

interface CheckboxProps {
  value: string | number;
  checked: boolean;
  onChange: (args: { checked: boolean; value: string | number }) => void;
  label?: string | JSX.Element;
  disabled?: boolean;
  style?: SerializedStyles;
  indeterminate?: boolean;
  checkboxStyle?: SerializedStyles;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  value,
  style,
  checked,
  onChange,
  disabled,
  indeterminate = false,
  checkboxStyle,
}) => {
  const getIcon = () => {
    return checked
      ? indeterminate
        ? "ic_checkbox_intermediate_blue"
        : "ic_checkbox_checked"
      : "ic_checkbox_blue";
  };
  return (
    <label
      css={[
        checkboxStyles.checkboxContainer,
        checkboxStyles.labelContainer,
        style,
        disabled ? checkboxStyles.disabledLabel : "",
      ]}
    >
      <img
        src={AssetsImg[getIcon()].src}
        css={[checkboxStyles.checkbox, checkboxStyle]}
      />
      {label && <div css={utils.ml(8)}>{label}</div>}
      <input
        checked={checked}
        onChange={(e) =>
          onChange({ checked: e.target.checked, value: e.target.value })
        }
        type="checkbox"
        css={checkboxStyles.input}
        value={value}
        disabled={disabled}
      />
    </label>
  );
};

export default Checkbox;
