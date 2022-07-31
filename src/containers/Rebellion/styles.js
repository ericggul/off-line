import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledSwitch = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
  position: relative;
`;

export const Input = styled.input`
  cursor: pointer;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  position: absolute;
  width: 3rem;
  height: 2rem;
  transform: translate(-50%, -50%);
`;
