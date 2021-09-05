import React from "react";

import StyledCart from "./Cart.styles";

interface Props {
  isCartOpen: boolean;
}
const Cart = ({ isCartOpen }: Props) => {
  return <StyledCart className={isCartOpen ? "" : "hide"}></StyledCart>;
};

export default Cart;
