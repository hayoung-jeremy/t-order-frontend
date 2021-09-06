import { useEffect, useState } from "react";

import {
  StyledProductListWrapper,
  StyledProductCategoryTitle,
} from "./ProductListPage.style";

import ProductListItem from "../ProductListItem/ProductListItem";

interface categoryProps {
  categoryId?: number;
  categoryName?: string;
  categoryItems?: categoryItemProps[];
}

interface categoryItemProps {
  itemId?: number;
  itemName?: string;
  itemPrice?: number;
  itemSoldOutFlag?: boolean;
  itemImageUrl?: string;
}

const ProductListPage = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoryList(data);
      });
  }, []);

  const productData = categoryList.map((item: categoryProps) => {
    const categoryTitle = item.categoryName;
    const productList = item.categoryItems!.map((item) => {
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
