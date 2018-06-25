import { CHANGE_CART_ITEM_QUANTITY, ADD_CART_ITEM, FETCH_CART_ITEMS } from '../actionTypes';

export const changeCartItemQuantity = (payload) => ({
  type: CHANGE_CART_ITEM_QUANTITY,
  ...payload,
});

export const addCartItem = (payload) => ({
  type: ADD_CART_ITEM,
  ...payload,
});

export const fetchCartItems = () => ({
  type: FETCH_CART_ITEMS,
});