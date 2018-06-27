// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Layout from '../styled/Layout';
import Cart from './Cart';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={ store }>
        <Layout>
            <Cart />
        </Layout>
      </Provider>
    );
  }
}