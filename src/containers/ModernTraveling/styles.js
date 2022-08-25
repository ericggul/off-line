import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledGates = styled.div`
  ${WholeContainer};
  ${FlexCenterStyle};
  position: relative;
  background: rgb(253, 218, 22);
  font-family: Frutiger;
  font-weight: bold;

  img {
    position: absolute;
    width: 3rem;
    height: auto;
    opacity: 0.5;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 3.2rem);
  grid-template-rows: repeat(20, 1rem);
`;

export const Gate = styled.div`
  ${FlexCenterStyle};
  width: 100%;
  height: 100%;
`;

export const GateTitle = styled.div`
  ${FlexCenterStyle};
  text-align: center;
  font-size: 0.5rem;
  width: 100%;
  height: 100%;
  ${({ step }) => step === 2 && "background: rgb(255, 255, 250);"}
  ${({ step }) => step === 3 && "background: rgb(218, 41, 28); color: white;"}
`;
