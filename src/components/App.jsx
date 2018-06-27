// @flow

import React from "react";
import { Provider } from "react-redux";
import { injectGlobal } from "styled-components";
import store from "../store";
import Layout from "../styled/Layout";
import Cart from "./Cart";

injectGlobal(`
  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #fafafa;
  }
`);

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Cart />
      </Layout>
    </Provider>
  );
}

export default App;
