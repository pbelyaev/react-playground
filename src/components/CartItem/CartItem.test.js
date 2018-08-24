// @flow
/* eslint-disable */
import React from "react";
import { shallow } from "enzyme";
import {CartItem} from "./CartItem";

describe("CartItem Test Suite", () => {
  const onRemoveMock = jest.fn();
  const wrapper = shallow(
    <CartItem id={1} name="iPhone X" price={999.99} quantity={2} onRemove={onRemoveMock} />
  );

  it("matches the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders name", () => {
    expect(
      wrapper
        .find("CartItemBlock")
        .at(0)
        .render()
        .text()
    ).toBe("iPhone X");
  });

  it("renders price", () => {
    expect(
      wrapper
        .find("CartItemBlock")
        .at(1)
        .render()
        .text()
    ).toBe("$999.99");
  });

  it("renders quantity", () => {
    expect(
      wrapper
        .find("CartItemBlock")
        .at(2)
        .render()
        .text()
    ).toBe("x2");
  });

  it("renders total price", () => {
    expect(
      wrapper
        .find("CartItemBlock")
        .at(3)
        .render()
        .text()
    ).toBe("$1999.98");
  });

  it("calls `onRemove` callback on remove button click", () => {
    wrapper.find('button').simulate('click');
    expect(onRemoveMock).toBeCalled();
    expect(onRemoveMock).toBeCalledWith(1);
  });
});
