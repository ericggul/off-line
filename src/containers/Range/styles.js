import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "static/styles";

export const StyledRange = styled.div`
  ${FlexCenterStyle};
  ${WholeContainer};
  position: relative;
`;

export const Input = styled.input`
  width: 20rem;
  transform: rotate(90deg);
`;

export const Plus = styled.div.attrs((props) => ({
  style: {
    top: props.top + "px",
    left: props.left + "px",
    opacity: props.show ? 1 : 0,
    transform: `translate(-50%, -50%) rotate(${props.rotation}deg)`,
    fontSize: props.size + "rem",
  },
}))`
  position: absolute;
  transition: all 0.4s;
`;
