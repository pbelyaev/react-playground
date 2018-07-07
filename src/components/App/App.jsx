// @flow
import React from "react";
import { Provider } from "react-redux";
import store from "../../store";
import Cart from "../Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
