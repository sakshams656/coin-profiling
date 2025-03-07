/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";
import { SidePanel } from "zebpay-ui";

export const dropdownContainer = css`
  position: absolute;
  top: calc(100% + ${utils.remConverter(15)});
  right: ${utils.remConverter(-8)};
  z-index: 1000;
  background-color: #181837;
  padding: ${utils.remConverter(12.8)};
  border-radius: ${utils.remConverter(8)};
  border: ${utils.remConverter(1)} solid #338FFF;
`;

export const optionStyle = (isSelected) => css`
  background-color: ${isSelected ? "#222245" : "#181837"};
  color: ${isSelected ? "white" : "#C0C0EE"};
  border: none;
  height: ${utils.remConverter(32)};
  padding: ${utils.remConverter(19.2)} ${utils.remConverter(8)};
  border-radius: ${utils.remConverter(8)};
  width: ${utils.remConverter(176)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
