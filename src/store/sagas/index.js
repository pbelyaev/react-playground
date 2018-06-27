import { all } from 'redux-saga/effects';
import { watchFetchCartItems } from './cart';

export default function* rootSaga() {
  yield all([
    watchFetchCartItems(),
  ]);
}