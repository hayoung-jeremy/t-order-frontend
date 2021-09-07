import React from "react";

import Button from "components/@share/Button/Button";
import StyledCartListItem from "./CartListItem.style";
import { CategoryItemProps } from "types";

const icon_increase = "assets/icon/icon_increase.png";
const icon_decrease = "assets/icon/icon_decrease.png";

const CartListItem = ({
  itemId,
  itemName,
  itemPrice,
  itemSoldOutFlag,
  cartItemQuantity,
}: CategoryItemProps) => {
  const totalPrice = itemPrice! * cartItemQuantity!;
  return (
    <StyledCartListItem>
      <div className="cart-item-header">
        <h4 className="product-name">{itemName}</h4>
        <Button color="MAIN" outlined rounded>
          삭제
        </Button>
      </div>
      <div className="cart-item-body">
        <div className="cart-item-counter">
          <Button iconBtn iconUrl={icon_increase} />
          <span>{cartItemQuantity} 개</span>
          <Button iconBtn iconUrl={icon_decrease} />
        </div>
        <div className="cart-item-price-total">
          {totalPrice.toLocaleString()} 원
        </div>
      </div>
    </StyledCartListItem>
  );
};

export default CartListItem;
