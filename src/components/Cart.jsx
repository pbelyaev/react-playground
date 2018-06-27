// @flow

import React, { Component } from 'react';
import CartSection from '../styled/Cart';
import CartItem from './CartItem';
import CartContainer from './../store/containers/CartContainer';

type Props = {
  fetchCartItems: Function,
  cart: Array<Object>,
};

class Cart extends Component<Props> {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    return (
      <CartSection>
        { this.props.cart.map(item => <CartItem key={ item.id } { ...item } />) }
      </CartSection>
    );
  }
}

export default CartContainer(Cart);