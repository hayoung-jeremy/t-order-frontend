import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { cartListProps, CategoryItemProps } from "types";

const initialState: cartListProps = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CategoryItemProps>) {
      const itemIdx = state.cartItems.findIndex(
        // 동일 상품 추가 시, 개별 추가가 아닌 수량 증가
        (item) => item.itemId === action.payload.itemId
      );
      const itemSoldOut = action.payload.itemSoldOutFlag;
      if (!itemSoldOut) {
        if (itemIdx >= 0) {
          state.cartItems[itemIdx].cartItemQuantity += 1;
        } else {
          // 다른 상품 추가 시, 기존 상품에 새로운 상품 추가 (첫 추가 시 상품 수량 : 1)
          const currentProduct = { ...action.payload, cartItemQuantity: 1 };
          state.cartItems.push(currentProduct);
        }
        // 상품이 품절 되었습니다 표시
      }
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.itemId !== action.payload.itemId
      );
      state.cartItems = nextCartItems;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
