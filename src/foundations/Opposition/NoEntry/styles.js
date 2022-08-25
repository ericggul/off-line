import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledNoEntry = styled.div``;

export const NoEntry = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ff0000;
  position: absolute;
  ${FlexCenterStyle};
  transition: opacity 1s;
`;

export const Inner = styled.div`
  background: white;
  width: 78%;
  height: 18%;
`;
