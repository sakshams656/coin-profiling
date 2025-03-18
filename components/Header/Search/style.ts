import { css } from "@emotion/react";
import { utils } from "zebpay-ui";

export const Card = css`
  display: flex;
  align-items: center;
`;

export const articleInfo = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const articleTitle = css`
  align-content: center;
  width: 20rem;
  font-size: 1rem;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`;

export const articleFooter = css`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: #c0c0ee;
  align-items: center;
  gap: 7px;
`;

export const articleImage = css`
  width: 50px;
  height: 50px;
  border-radius: 6px;
`;

export const articleHeader = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
