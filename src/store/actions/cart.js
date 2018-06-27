import { FETCH_CART_ITEMS, REMOVE_CART_ITEM } from "../actionTypes";

export const fetchCartItems = () => ({
  type: FETCH_CART_ITEMS
});

export const removeCartItem = item => ({
  type: REMOVE_CART_ITEM,
  item
});
