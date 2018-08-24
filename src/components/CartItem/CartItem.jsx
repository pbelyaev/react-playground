// @flow
import React from "react";
import { CartItemWrapper } from "./helpers/CartItemWrapper";
import { CartItemBlock } from "./helpers/CartItemBlock";

type CartItemProps = {
  id: number,
  name: string,
  price: number,
  quantity: number,
  onRemove: Function
};

export function CartItem(props: CartItemProps) {
  const { price, quantity, name, id, onRemove } = props;
  const totalPrice = price * quantity;

  return (
    <CartItemWrapper>
      <CartItemBlock>{name}</CartItemBlock>
      <CartItemBlock>{`$${price}`}</CartItemBlock>
      <CartItemBlock>{`x${quantity}`}</CartItemBlock>
      <CartItemBlock>{`$${totalPrice}`}</CartItemBlock>
      <CartItemBlock>
        <button
          type="button"
          onClick={() => onRemove(id)}
        >
          Remove
        </button>
      </CartItemBlock>
    </CartItemWrapper>
  );
}
