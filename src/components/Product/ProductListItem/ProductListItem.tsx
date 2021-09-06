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
      {isItemSoldOut ? <div className="soldout-cover"></div> : null}
      <div className="product-img">
        <img src={itemImg} alt={itemName} />
      </div>
      <div className="product-info">
        <p className="product-name">{itemName}</p>
        <p>{itemPrice!.toLocaleString()}원</p>
      </div>
    </StyledProductListItem>
  );
};

export default ProductListItem;
