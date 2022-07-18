import styled from "styled-components";
import { FlexCenterStyle } from "static/styles";

export const StyledRaiting = styled.div`
  position: relative;
  background: black;
  color: white;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
`;

export const Bundle = styled.div`
  ${FlexCenterStyle};
`;

export const BundleAbsolute = styled.div`
  ${FlexCenterStyle};
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  transform: translate(-50%, -50%);
  ${({ visibility }) => (visibility ? `opacity: 1;` : `opacity: 0;`)}
  transition: all .5s;
  ${({ horizontalOrVertical }) => horizontalOrVertical && "flex-direction: column"};
`;

export const Rate = styled.img`
  width: 3rem;
  height: 3rem;
  padding: 0 1rem;
  cursor: pointer;
`;

export const Letter = styled.div`
  pointer-events: none;
  font-size: 0.7rem;
  padding: 0.1rem;
  text-shadow: ${({ raiting }) => raiting && `0 0 .2rem white, 0 0 .5rem white, 0 0 .7rem white, 0 0 1rem white`};
`;
