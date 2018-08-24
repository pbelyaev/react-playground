// @flow
import React, { PureComponent, type Node } from "react";
import {CartItem} from "../CartItem/CartItem";
import CartContainer from "../../store/containers/CartContainer";
import { CartWrapper } from "./helpers/CartWrapper";

type CartProps = {
  fetchCartItems: Function,
  removeCartItem: Function,
  cart: Array<Object>
};

export class Cart extends PureComponent<CartProps> {
  componentDidMount() {
    const { fetchCartItems } = this.props;
    fetchCartItems();
  }

  removeItem(cartItemId) {
    const { cart, removeCartItem } = this.props;
    const cartItem = cart.find(({ id }) => id === cartItemId);
    removeCartItem(cartItem);
  }

  render(): Node {
    const { cart } = this.props;
    return (
      <CartWrapper>
        {cart.map(item => (
          <CartItem
            key={item.id}
            {...item}
            onRemove={() => this.removeItem()}
          />
        ))}
      </CartWrapper>
    );
  }
}

export const CartContainerConnected = CartContainer(Cart);
