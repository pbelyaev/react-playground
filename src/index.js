import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { injectGlobal } from 'styled-components';

injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #fafafa;
  }
`

const root = document.createElement('div');
document.body.appendChild(root);

render(
  <App />,
  root,
);