import styled from "styled-components";
import { FlexCenterStyle } from "static/styles";

export const StyledRating2 = styled.div`
  position: relative;
  background: black;
  color: white;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
`;

export const Bundle = styled.div`
  ${FlexCenterStyle};
`;

export const Rate = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  cursor: pointer;
  border-radius: 50%;
  border: 0.3rem solid white;
  background: ${({ filled }) => (filled ? "white" : "transparent")};
`;

export const FractionalEl = styled.div``;

export const DecimalEl = styled.div``;
