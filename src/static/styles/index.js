import { css } from "styled-components";

export const FlexCenterStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WholeContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
`;
