import React from "react";
import { StyledProductListItem } from "./ProductListItem.style";

interface Props {
  itemName: string;
  itemImg?: string;
  itemPrice?: number;
  isItemSoldOut: boolean;
}

const ProductListItem = ({
  itemName,
  itemImg,
  itemPrice,
  isItemSoldOut,
  ...rest
}: Props) => {
  return (
    <StyledProductListItem {...rest}>
      {isItemSoldOut ? (
        <div className="soldout-cover">
          <img
            src="assets/icon/icon_soldout.png"
            alt="current Item is SOLD OUT"
          />
        </div>
      ) : (
        <div className="product-img">
          <img src={itemImg} alt={itemName} />
        </div>
      )}
      <div className="product-info">
        <p>{itemName}</p>
        <p>{itemPrice!.toLocaleString()}원</p>
      </div>
    </StyledProductListItem>
  );
};

export default ProductListItem;
