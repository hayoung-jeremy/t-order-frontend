import {
  StyledProductListWrapper,
  StyledProductCategoryTitle,
} from "./ProductListPage.style";

import dummy from "db/mock.json";
import ProductListItem from "../ProductListItem/ProductListItem";

const categoryList = dummy.categories;

const productData = categoryList.map((item) => {
  const categoryTitle = item.categoryName;
  const productList = item.categoryItems.map((item) => {
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
console.log(productData);

const ProductListPage = () => {
  return <StyledProductListWrapper>{productData}</StyledProductListWrapper>;
};

export default ProductListPage;
