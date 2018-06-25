import React, { Component } from 'react';
import CartSection from '../styled/Cart';
import CartItem from './CartItem';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, name: 'iPhone X', price: 999.00, quantity: 1 },
        { id: 2, name: 'iPhone SE', price: 399.00, quantity: 6 },
      ],
    };
  }

  render() {
    return (
        <CartSection>
            { this.state.items.map(item => <CartItem key={ item.id } { ...item } />) }
        </CartSection>
    );
  }
}