import PALETTE from "constants/palette";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 60px;
  padding: 0 40px 0 20px;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const CartBtn = styled.span`
  color: ${PALETTE.WHITE};
  display: flex;
  align-items: center;
  height: 100%;

  &:before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background: url("assets/icon/icon_cart.png") no-repeat 0 center/cover;
    margin-right: 8px;
  }
`;

export { StyledFooter, CartBtn };
