import React from "react";

import StyledCart from "./Cart.styles";
import CartListItem from "./CartListItem/CartListItem";
import Button from "components/@share/Button/Button";
import { useAppDispatch, useAppSelector } from "features/store/rootReducer";
import { clearCart, toggleCartOpen } from "features/cart/cartReducer";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleCartOpen = () => {
    dispatch(toggleCartOpen());
  };
  return (
    <StyledCart className={cart.isCartOpen ? "" : "hide"}>
      <div className="cart-header">
        <h3 className="cart-title">장바구니</h3>
      </div>
      <div className="cart-body">
        {cart.cartItems.length === 0 ? (
          <p className="empty-sign">장바구니가 비어있습니다.</p>
        ) : (
          cart.cartItems.map((cartItem) => (
            <CartListItem key={cartItem.itemId} cartItem={cartItem} />
          ))
        )}
      </div>
      <div className="cart-footer">
        <div className="cart-item-info">
          <span>총 {cart.cartItems.length}가지</span>
          <span className="cart-item-total-price">
            합계 <span>{cart.cartTotalAmount}원</span>
          </span>
        </div>
        <div className="cart-controller">
          <Button
            color="WHITE"
            bgColor="GREY600"
            fontWeight="bold"
            onClick={() => handleCartOpen()}
          >
            닫기
          </Button>
          <Button
            color="WHITE"
            bgColor="MAIN"
            fontWeight="bold"
            onClick={() => {
              handleClearCart();
              handleCartOpen();
            }}
          >
            주문하기
          </Button>
        </div>
      </div>
    </StyledCart>
  );
};

export default Cart;
