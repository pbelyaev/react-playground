// @flow

import React from "react";

type CartItemProps = {
  id: number,
  name: string,
  price: number,
  quantity: number,
  onRemove: Function
};

function CartItem(props: CartItemProps) {
  const { price, quantity, name, id, onRemove } = props;
  const totalPrice = price * quantity;

  return (
    <div className="cart-item">
      <div className="cart-item__block">
        {name}
      </div>
      <div className="cart-item__block">
        {`$${price}`}
      </div>
      <div className="cart-item__block">
        {`x${quantity}`}
      </div>
      <div className="cart-item__block">
        {`$${totalPrice}`}
      </div>
      <div className="cart-item__block">
        <button type="button" className="cart-item__remove-button" onClick={() => onRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
