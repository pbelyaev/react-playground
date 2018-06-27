// @flow

import React from "react";
import CartItemSection from "../styled/CartItem";
import CartItemBlock from "../styled/CartItemBlock";
import CartItemRemoveButton from "../styled/CartItemRemoveButton";

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
    <CartItemSection>
      <CartItemBlock>
        {name}
      </CartItemBlock>
      <CartItemBlock>
        {`$${price}`}
      </CartItemBlock>
      <CartItemBlock>
        {`x${quantity}`}
      </CartItemBlock>
      <CartItemBlock>
        {`$${totalPrice}`}
      </CartItemBlock>
      <CartItemBlock>
        <CartItemRemoveButton onClick={() => onRemove(id)}>
          Remove
        </CartItemRemoveButton>
      </CartItemBlock>
    </CartItemSection>
  );
}

export default CartItem;
