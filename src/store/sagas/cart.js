import { put, takeEvery } from 'redux-saga/effects';
import { REPLACE_CART_ITEMS, FETCH_CART_ITEMS } from '../actionTypes';

export function* fetchCartItems() {
  yield put({
    type: REPLACE_CART_ITEMS,
    items: [
      { id: 1, name: 'iPhone X', price: 999.00, quantity: 1 },
      { id: 2, name: 'iPhone SE', price: 399.00, quantity: 5 },
    ],
  });
}

export function* watchFetchCartItems() {
  yield takeEvery(FETCH_CART_ITEMS, fetchCartItems);
}