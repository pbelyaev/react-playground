import React, { Component } from 'react';
import CartSection from '../styled/Cart';
import CartItem from './CartItem';
import CartContainer from './../store/containers/CartContainer';
import PropTypes from 'prop-types';

class Cart extends Component {
  componentWillMount() {
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

Cart.propTypes = {
  fetchCartItems: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};

export default CartContainer(Cart);