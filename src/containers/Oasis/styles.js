import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledOasis = styled.div`
  ${WholeContainer};
  ${FlexCenterStyle};
  flex-direction: column;
  position: relative;

  font-family: Dior;

  letter-spacing: -0.07rem;

  h1 {
    font-size: 4rem;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 1.5rem;
  }
`;
