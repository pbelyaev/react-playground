import { connect } from 'react-redux';
import { changeCartItemQuantity, addCartItem, fetchCartItems } from '../actions/cart';

export default connect(
  ({ cart }) => ({ cart }),

  (dispatch) => ({
    fetchCartItems() {
      dispatch(fetchCartItems());
    },

    changeCartItemQuantity(payload) {
      dispatch(changeCartItemQuantity(payload));
    },

    addCartItem(payload) {
      dispatch(addCartItem(payload));
    },
  }),
);