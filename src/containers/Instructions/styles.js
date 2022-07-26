import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledInstructions = styled.div`
  ${WholeContainer};
  position: relative;
  ${FlexCenterStyle};
  background: hsl(41, 24%, 97%);
  flex-direction: column;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 95px;
  background: hsl(41, 27%, 70%);
  ${FlexCenterStyle};
  font-size: 30px;
  font-weight: bold;
  color: #333;
`;

export const Indicator = styled.div`
  ${FlexCenterStyle};
  width: 80%;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.windowHeight * 0.15}px;
  color: #333;
`;

export const Contents = styled.div`
  ${FlexCenterStyle};
  width: 100%;
`;

export const Arrow = styled.div`
  font-weight: bold;
  margin: 0 80px;
`;

export const MainTextWrapper = styled.div`
  ${FlexCenterStyle};
  width: ${({ theme }) => (theme.windowWidth > 768 ? 768 * 0.7 : theme.windowWidth * 0.7)}px;
  height: ${({ theme }) => theme.windowHeight * 0.2}px;
  position: relative;
`;

export const MainText = styled.div`
  position: absolute;
  width: ${({ theme }) => (theme.windowWidth > 768 ? 768 * 0.7 : theme.windowWidth * 0.7)}px;
  height: ${({ theme }) => theme.windowHeight * 0.2}px;

  font-size: 35px;
  font-weight: 600;
  word-break: keep-all;
  text-align: center;

  ${({ instructionNumber, idx }) => (instructionNumber === idx ? `opacity: 1; transform: rotateY(0);` : `opacity: 0; transform: rotateY(90deg);`)}
  transition: all 0.4s;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 95px;
  background: hsl(41, 27%, 57%);
  ${FlexCenterStyle};
  color: #eee;
  font-size: 20px;
`;
