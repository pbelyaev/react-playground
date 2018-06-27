// @flow

import { remove } from "ramda";
import { REPLACE_CART_ITEMS, REMOVE_CART_ITEM } from "../actionTypes";

type State = Array<Object>;
type Payload = {
  type: string,
  item?: Object,
  items?: Array<Object>
};

export default (state: State = [], { type, ...payload }: Payload) => {
  switch (type) {
    case REMOVE_CART_ITEM:
      return remove(state.indexOf(payload.item), 1, state);

    case REPLACE_CART_ITEMS:
      return payload.items;

    default:
      return state;
  }
};
