import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledController = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
  flex-direction: column;
  background: #955813;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 5rem);
  grid-template-rows: repeat(4, 5rem);
  transition: all 0.5s;
`;

export const Button = styled.div`
  ${FlexCenterStyle};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  font-size: 5rem;
  font-weight: bold;
  transform: rotate(3deg);
`;

export const Text = styled.div`
  margin-top: 3rem;
  color: white;
  height: 3rem;
  transform: rotateY(180deg);
`;
