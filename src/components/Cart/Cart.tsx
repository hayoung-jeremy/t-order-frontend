import React from "react";

import StyledCart from "./Cart.styles";
import CartListItem from "./CartListItem/CartListItem";
import Button from "components/@share/Button/Button";

interface Props {
  isCartOpen: boolean;
}
const Cart = ({ isCartOpen }: Props) => {
  return (
    <StyledCart className={isCartOpen ? "" : "hide"}>
      <div className="cart-header">
        <h3 className="cart-title">장바구니</h3>
      </div>
      <div className="cart-body">
        <ul>
          <CartListItem />
          <CartListItem />
          <CartListItem />
          <CartListItem />
          <CartListItem />
          <CartListItem />
          <CartListItem />
        </ul>
      </div>
      <div className="cart-footer">
        <div className="cart-item-info">
          <span>총 {`2`}가지</span>
          <span className="cart-item-total-price">
            합계 <span>{`4,000`}원</span>
          </span>
        </div>
        <div className="cart-controller">
          <Button color="WHITE" bgColor="GREY600" fontWeight="bold">
            닫기
          </Button>
          <Button color="WHITE" bgColor="MAIN" fontWeight="bold">
            주문하기
          </Button>
        </div>
      </div>
    </StyledCart>
  );
};

export default Cart;
