import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledLayout = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
`;

export const Left = styled.div`
  height: 100%;
  width: ${({ theme }) => theme.windowWidth * 0.5}px;
  background: hsl(85, 100%, 70%);
  color: hsl(265, 100%, 70%);
  display: block;

  ${FlexCenterStyle};
  font-size: 5rem;
  font-weight: bold;
`;

export const Right = styled.div`
  height: 100%;
  width: ${({ theme }) => theme.windowWidth * 0.5}px;
  background: hsl(265, 100%, 70%);
  color: hsl(85, 100%, 70%);

  display: grid;
  grid-template-columns: repeat(2, ${({ theme }) => theme.windowWidth * 0.25}px);
  grid-template-rows: repeat(3, 33.33333%);
`;

export const Dot = styled.div`
  width: 100%;
  height: 100%;
`;
