// @flow
/* eslint-disable */
import React from "react";
import { shallow } from "enzyme";
import CartItem from "./CartItem";

describe("CartItem Test Suite", () => {
  const wrapper = shallow(
    <CartItem id={1} name="iPhone X" price={999.99} quantity={2} />
  );

  it("should render without throwing an error", () => {
    expect(wrapper.is(".cart-item")).toBe(true);
  });

  it("should render the name of the cart item", () => {
    expect(
      wrapper
        .find(".cart-item__block")
        .at(0)
        .text()
    ).toBe("iPhone X");
  });

  it("should render the price of the cart item", () => {
    expect(
      wrapper
        .find(".cart-item__block")
        .at(1)
        .text()
    ).toBe("$999.99");
  });

  it("should render the quantity of the cart item", () => {
    expect(
      wrapper
        .find(".cart-item__block")
        .at(2)
        .text()
    ).toBe("x2");
  });

  it("should render the total price of the cart item", () => {
    expect(
      wrapper
        .find(".cart-item__block")
        .at(3)
        .text()
    ).toBe("$1999.98");
  });
});
