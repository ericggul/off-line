import styled from "styled-components";
import { FlexCenterStyle } from "static/styles";

export const StyledMonaLisa = styled.div``;

export const VideoElement = styled.video`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
`;

export const Cover = styled.div`
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  background: black;
  ${FlexCenterStyle};
  color: white;
  flex-direction: column;
`;

export const Distance = styled.div``;

export const Text = styled.div``;
