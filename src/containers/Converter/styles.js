import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledConverter = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  ${WholeContainer};
  background: linear-gradient(#249f8c 0%, #9d9013 100%);
`;

const InputStyle = css`
  outline: 0;
  border: none;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  font-weight: 400;

  width: ${({ theme }) => Math.min(theme.windowWidth * 0.7, 500)}px;
  padding: 0.3rem 0.7rem;
  color: white;
`;

export const ID = styled.input`
  ${InputStyle};
  background: transparent;
  text-align: center;
  border-bottom: 1px solid #fff;
  transition: all 0.2s;
  border-radius: 0;
`;

export const Mimic = styled.div`
  color: white;
  font-size: 1.2rem;
  font-wieight: 400;
  height: 1.4rem;
  max-width: 100%;
  ${FlexCenterStyle};
  text-align: center;
`;
