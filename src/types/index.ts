export interface categoryProps {
  categoryId?: number;
  categoryName?: string;
  categoryItems?: categoryItemProps[];
}

export interface categoryItemProps {
  itemId?: number;
  itemName?: string;
  itemPrice?: number;
  itemSoldOutFlag?: boolean;
  itemImageUrl?: string;
  cartItemQuantity?: number;
}

export interface cartListProps {
  cartItems: categoryItemProps[] | any[];
  cartTotalQuantity?: number;
  cartTotalAmount?: number;
  isCartOpen?: boolean;
}
