import React, { ChangeEvent, useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import * as styles from "./styles";

import { SerializedStyles } from "@emotion/react";

// custom components
import { Button } from "zebpay-ui";

export interface IZInputProp {
  label?: string;
  value?: string | number;
  placeholder: string;
  id?: string;
  name?: string;
  appendix?: string | React.ReactNode;
  infoText?: string;
  ctaText?: string;
  invalid?: boolean;
  type?: string;
  disabled?: boolean;
  isFocused?: boolean;
  rounded?: boolean;
  customCss?: SerializedStyles | string;
  onClick?: () => void;
  onChange?:
    | ((event: ChangeEvent<HTMLInputElement>) => void)
    | ((event: ChangeEvent<HTMLTextAreaElement>) => void);
  asTextarea?: boolean;
  rowsForTextarea?: number;
  maxLength?: number;
  isMobile?: boolean;
  additionalActionComponent?: React.ReactNode;
  isSelected?: boolean;
}

const ZInput: React.FC<IZInputProp> = ({
  value,
  label,
  placeholder,
  id,
  name,
  appendix,
  infoText,
  ctaText,
  invalid,
  customCss,
  type,
  isFocused,
  disabled,
  rounded,
  onChange,
  onClick,
  asTextarea,
  rowsForTextarea,
  maxLength,
  isMobile,
  additionalActionComponent,
  isSelected = false
}) => {
  const [focused, setFocused] = useState<boolean | undefined>(false);
  useEffect(() => setFocused(isFocused), [isFocused]);
  const onFocusInput = () => {
    setFocused(true);
  };

  const onBlurInput = () => {
    setFocused(false);
  };

  return (
    <div
      data-test-id={"zInputComponent"}
      css={customCss}
      {...(onClick && { onClick })}
    >
      <Form.Group controlId={id && id} css={styles.formGroup}>
        {label && (
          <div css={styles.labelContainer}>
            <Form.Label
              css={[
                styles.formLabel(isMobile),
                isSelected || focused ? styles.activeFormLabel(isMobile) : null,
                invalid ? styles.invalidFormLabel(isMobile) : null
              ]}
            >
              {label}
            </Form.Label>
            {additionalActionComponent}
          </div>
        )}
        <InputGroup
          css={[
            styles.inputGroup,
            isSelected || focused ? styles.focusedInputGroup(isMobile) : null,
            invalid ? styles.invalidInputGroup(isMobile) : null
          ]}
        >
          <Form.Control
            data-test-id={"zInputComponent"}
            type={type || "text"}
            name={name}
            placeholder={placeholder}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            className={"form-control"}
            css={[
              styles.formControl(isMobile),
              rounded && styles.formControlRounded,
              asTextarea && styles.textAreaControl
            ]}
            value={value}
            onChange={onChange}
            disabled={disabled}
            as={asTextarea ? "textarea" : undefined}
            rows={asTextarea ? rowsForTextarea : 1}
            maxLength={maxLength}
          />
          {appendix ? (
            <InputGroup.Text
              id={id}
              css={[
                styles.inputGroupText(isMobile),
                value && styles.touchedAppendix(isMobile)
              ]}
            >
              {appendix}
            </InputGroup.Text>
          ) : null}
        </InputGroup>
      </Form.Group>
      <div css={styles.infoContainer}>
        {infoText && (
          <div
            css={[
              styles.infoText,
              invalid ? styles.invalidInfoText(isMobile) : null
            ]}
          >
            {infoText}
          </div>
        )}
        {ctaText && (
          <div css={styles.infoCta}>
            <Button type="link" size="medium" onClick={() => {}}>
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZInput;
