import React from "react";

import Button from "components/@share/Button/Button";
import StyledCartListItem from "./CartListItem.style";

const icon_increase = "assets/icon/icon_increase.png";
const icon_decrease = "assets/icon/icon_decrease.png";

const CartListItem = () => {
  return (
    <StyledCartListItem>
      <div className="cart-item-header">
        <h4 className="product-name">부산국제시장 떡볶이(밀가래떡)</h4>
        <Button color="MAIN" outlined rounded>
          삭제
        </Button>
      </div>
      <div className="cart-item-body">
        <div className="cart-item-counter">
          <Button iconBtn iconUrl={icon_increase} />
          <span>1 개</span>
          <Button iconBtn iconUrl={icon_decrease} />
        </div>
        <div className="cart-item-price-total">8,500 원</div>
      </div>
    </StyledCartListItem>
  );
};

export default CartListItem;
