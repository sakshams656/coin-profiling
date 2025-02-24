/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";
import { SidePanel } from "zebpay-ui";

export const DropdownOuter = css`
  position: relative;
  display: inline-block;
  margin-top: 1.25rem;
`;

export const upDownIcon = css`
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
`;

export const DropdownStyle = css`
  background-color: ${colors.Zeb_Solid_Dark_Blue};
  border-radius: 0.75rem;
  padding: 0.5rem;
  min-width: 13rem;
  z-index: 999;
  margin-top: 0.5rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.2);
  border: 0.1rem solid #338fff;
  box-sizing: border-box;
  overflow: hidden;
`;

export const optionStyles = (isSelected: boolean) => css`
  background-color: ${isSelected ? colors.Zeb_Solid_BG_Blue : "transparent"};
  border-radius: 0.5rem;
  margin: 0.375rem 0;
  overflow: hidden;
`;

export const buttonStyles = (isSelected: boolean) => css`
  width: 100%;
  text-align: left;
  color: ${isSelected ? "white" : colors.Zeb_Solid_Light_Blue};
  padding: 0.625rem;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  font-family: 'Lato', 'Noto_Serif', sans-serif;
`;
  
  

