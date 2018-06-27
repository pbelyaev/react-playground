// @flow

import React, { Component } from 'react';
import CartItemSection from '../styled/CartItem';

type Props = {
  id: number,
  name: string,
  price: number,
  quantity: number,
};

class CartItem extends Component<Props> {
  render() {
    const totalPrice = this.props.price * this.props.quantity;

    return (
      <CartItemSection>
          { totalPrice }
      </CartItemSection>
    );
  }
}

export default CartItem;