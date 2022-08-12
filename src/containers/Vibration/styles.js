import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledVibration = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};

  transform: ${({ pos }) => `translate(${pos.x}px, ${pos.y}px)`};
  transition: transform 0.03s ease-in-out;

  background: black;
  color: white;
`;
