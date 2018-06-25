import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItemSection from '../styled/CartItem';

class CartItem extends Component {
  render() {
    const totalPrice = this.props.price * this.props.quantity;

    return (
      <CartItemSection>
          { totalPrice }
      </CartItemSection>
    );
  }
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;