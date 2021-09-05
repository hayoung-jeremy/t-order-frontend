import {
  StyledProductListWrapper,
  StyledProductCategoryTitle,
  StyledProductListItem,
} from "./ProductListPage.style";

import dummy from "db/mock.json";

console.log(dummy);

const categoryList = dummy.categories;
console.log(categoryList);

const data = categoryList.map((item) => {
  const categoryTitle = item.categoryName;
  const productList = item.categoryItems.map((item) => {
    const itemName = item.itemName;
    const itemImg = item.itemImageUrl;
    const itemPrice = item.itemPrice;
    const isItemSoldOut = item.itemSoldOutFlag;

    return <StyledProductListItem>{itemName}</StyledProductListItem>;
  });

  return (
    <section className="product-list-container">
      <StyledProductCategoryTitle>{categoryTitle}</StyledProductCategoryTitle>
      <ul className="product-list">{productList}</ul>
    </section>
  );
});
console.log(data);

const ProductListPage = () => {
  return <StyledProductListWrapper>{data}</StyledProductListWrapper>;
  // <StyledProductListWrapper>
  //   <section className="product-list-container">
  //     <StyledProductCategoryTitle>category name</StyledProductCategoryTitle>
  //     <ul className="product-list">
  //       <StyledProductListItem>item</StyledProductListItem>
  //       <StyledProductListItem>item</StyledProductListItem>
  //       <StyledProductListItem>item</StyledProductListItem>
  //       <StyledProductListItem>item</StyledProductListItem>
  //       <StyledProductListItem>item</StyledProductListItem>
  //       <StyledProductListItem>item</StyledProductListItem>
  //     </ul>
  //   </section>
  // </StyledProductListWrapper>
};

export default ProductListPage;
