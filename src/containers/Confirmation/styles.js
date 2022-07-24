import styled, { css } from "styled-components";

import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledConfirmation = styled.div`
  font-family: StardosStencil;
  ${FlexCenterStyle};
  ${WholeContainer};
  background: hsl(216, 55%, 95%);

  flex-direction: ${({ theme }) => (theme.windowWidth > 768 ? "row" : "column")};
`;

export const InfoPrompt = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
  margin: 2rem;
`;

export const InputForms = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const SingleComp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.8rem 0;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
`;

const InputStyle = css`
  outline: 0;
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  font-weight: 400;

  width: ${({ theme }) => Math.min(theme.windowWidth * 0.7, 500)}px;
  padding: 0.3rem 0.7rem;
`;

export const ID = styled.input`
  ${InputStyle};
`;

export const Button = styled.div`
  background: hsl(176, 71%, 64%);
`;
