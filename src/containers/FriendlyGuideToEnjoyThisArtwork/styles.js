import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledFriendlyGuideToEnjoyThisArtwork = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
  flex-direction: column;
  background: #002fa7;
`;

export const Text = styled.div`
  width: 70%;
  text-align: center;
  opacity: 1;

  color: white;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const Answer = styled.div`
  width: 70%;
  font-size: 1.5rem;
  height: 6rem;
  margin-top: 3rem;
  text-align: center;
  opacity: 1;
  text-transform: lowercase;
  color: white;
`;

export const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  color: transparent;
  filter: blur(20px) brightness(3);
`;
