import {
  ADD_CART_ITEM, 
  CHANGE_CART_ITEM_QUANTITY, 
  REPLACE_CART_ITEMS,
} from '../actionTypes';

export const cart = (state = [], { type, ...payload }) => {
  switch(type) {
    case ADD_CART_ITEM:
      return state.concat(payload);

    case CHANGE_CART_ITEM_QUANTITY:
      return state.map(item => item.id === payload.id ? cartItem(item, { type, ...payload }) : item);
    
    case REPLACE_CART_ITEMS:
      return payload.items;

    default: 
      return state;
  }
};

export const cartItem = (state = {}, { type, ...payload }) => {
  switch(type) {
    case CHANGE_CART_ITEM_QUANTITY:
      return {
        ...state,
        quantity: payload.quantity,
      };

    default:
      return state;
  }
};