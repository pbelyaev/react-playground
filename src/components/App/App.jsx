// @flow
import React, { type Node } from "react";
import { Provider } from "react-redux";
import store from "../../store";
import {CartContainerConnected} from "../Cart/Cart";

import {AppContainer} from "./helpers/AppContainer";

export const App = (): Node => (
  <Provider store={store}>
    <AppContainer>
      <CartContainerConnected />
    </AppContainer>
  </Provider>
);
