import styled, { css } from "styled-components";

import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledConfirmation = styled.div`
  ${FlexCenterStyle};
  position: absolute;
  width: ${({ theme }) => theme.windowWidth}px;
  min-height: ${({ theme }) => theme.windowHeight}px;

  overflow-y: scroll;

  font-family: StardosStencil;

  flex-direction: column;
`;

export const Background = styled.div`
  ${WholeContainer};
  background: hsl(216, 55%, 95%);
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
`;

export const InfoPrompt = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
  margin-top: 2rem;
`;

export const InputForms = styled.div`
  ${FlexCenterStyle};
  margin: 2rem 0;
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
  max-width: ${({ theme }) => Math.min(theme.windowWidth * 0.7, 500)}px;
`;

export const Wrong = styled.div`
  margin: 0.3rem 0;
  font-size: 0.8rem;
  color: red;
`;

const InputStyle = css`
  outline: 0;
  border: 1px solid transparent;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  font-weight: 400;

  width: ${({ theme }) => Math.min(theme.windowWidth * 0.7, 500)}px;
  padding: 0.3rem 0.7rem;
`;

export const ID = styled.input`
  ${InputStyle};

  ${({ wrong }) => wrong && "border: 1px solid red"};
  transition: all 0.2s;

  animation: appear 0.3s;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const RegisterButton = styled.div`
  margin: 2rem 0;
  margin-bottom: 4rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
  background: ${({ buttonActivated }) => (!buttonActivated ? "hsl(216, 10%, 85%)" : "hsl(216, 55%, 85%)")};
  cursor: ${({ buttonActivated }) => (buttonActivated ? "pointer" : "not-allowed")};
`;
