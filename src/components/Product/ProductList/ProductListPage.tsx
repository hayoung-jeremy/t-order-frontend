import { useEffect, useState } from "react";

import { CategoryProps, CategoryItemProps } from "types";
import {
  StyledProductListWrapper,
  StyledProductCategoryTitle,
} from "./ProductListPage.style";
import ProductListItem from "../ProductListItem/ProductListItem";
import { addToCart, toggleCartOpen } from "features/cart/cartReducer";
import { useAppDispatch, useAppSelector } from "features/store/rootReducer";

const ProductListPage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoryList(data);
      });
  }, []);

  const productData = categoryList.map((item: CategoryProps) => {
    const categoryTitle = item.categoryName;
    const productList = item.categoryItems!.map((item) => {
      const handleAddToCart = (item: CategoryItemProps) => {
        dispatch(addToCart(item));
        if (!cart.isCartOpen) {
          dispatch(toggleCartOpen());
        } else {
          return null;
        }
      };
      const itemName = item.itemName;
      const itemImg = item.itemImageUrl;
      const itemPrice = item.itemPrice;
      const isItemSoldOut = item.itemSoldOutFlag;

      return (
        <ProductListItem
          key={item.itemId}
          itemName={itemName}
          itemImg={itemImg}
          itemPrice={itemPrice}
          isItemSoldOut={isItemSoldOut}
          onClick={() => {
            handleAddToCart(item);
          }}
        ></ProductListItem>
      );
    });

    return (
      <section key={item.categoryId} className="product-list-container">
        <StyledProductCategoryTitle>{categoryTitle}</StyledProductCategoryTitle>
        <ul className="product-list">{productList}</ul>
      </section>
    );
  });

  return <StyledProductListWrapper>{productData}</StyledProductListWrapper>;
};

export default ProductListPage;
