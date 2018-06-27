import { connect } from "react-redux";
import { fetchCartItems, removeCartItem } from "../actions/cart";

export default connect(
  ({ cart }) => ({ cart }),

  dispatch => ({
    fetchCartItems() {
      dispatch(fetchCartItems());
    },

    removeCartItem(item) {
      dispatch(removeCartItem(item));
    }
  })
);
