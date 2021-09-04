import styled from "styled-components";
import { rgba } from "polished";

import PALETTE from "constants/palette";

const StyledButton = styled.button`
  background-color: transparent;
  padding: 7px 13px;
  border: solid 2px ${PALETTE.MAIN};
  border-radius: 10px;
  color: ${PALETTE.MAIN};
  cursor: pointer;
  font-size: 19px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  transition: transform 0.2s;

  &:active {
    background-color: ${rgba(PALETTE.MAIN, 0.15)};
    transform: translateY(2px);
  }
`;

export default StyledButton;
