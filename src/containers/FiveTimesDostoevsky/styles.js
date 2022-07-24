import styled from "styled-components";

import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledFiveTimesDostoevsky = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};

  font-family: StardosStencil;
  background: hsl(235, 50%, 7%);
`;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.windowWidth * 0.1}px;
  color: hsl(235, 100%, ${({ lightness }) => lightness}%);
`;
