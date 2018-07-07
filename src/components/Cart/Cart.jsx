// @flow
import React, { Component } from "react";
import CartItem from "../CartItem";
import CartContainer from "../../store/containers/CartContainer";

type CartProps = {
  fetchCartItems: Function,
  removeCartItem: Function,
  cart: Array<Object>
};

class Cart extends Component<CartProps> {
  componentDidMount() {
    const { fetchCartItems } = this.props;
    fetchCartItems();
  }

  removeItem(cartItemId) {
    const { cart, removeCartItem } = this.props;
    const cartItem = cart.find(({ id }) => id === cartItemId);
    removeCartItem(cartItem);
  }

  render() {
    const { cart } = this.props;
    return (
      <div className="cart">
        {cart.map(item => (
          <CartItem
            key={item.id}
            {...item}
            onRemove={() => this.removeItem()}
          />
        ))}
      </div>
    );
  }
}

export default CartContainer(Cart);
