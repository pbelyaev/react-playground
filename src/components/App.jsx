import React, { Component } from 'react';
import Layout from '../styled/Layout';
import Cart from './Cart';

export default class App extends Component {
  render() {
    return (
      <Layout>
          <Cart />
      </Layout>
    );
  }
}