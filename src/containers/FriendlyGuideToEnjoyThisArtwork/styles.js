import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledFriendlyGuideToEnjoyThisArtwork = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
  background: #060b71;
  color: white;
  font-size: 3rem;
  text-transform: uppercase;
`;

export const Text = styled.div`
  width: 50%;
  text-align: center;
  opacity: 1;
`;

export const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  color: transparent;
  filter: blur(20px) brightness(3);
`;
