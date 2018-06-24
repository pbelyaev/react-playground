import React from 'react';
import { render } from 'react-dom';
import HelloWorldComponent from './components/HelloWorld.jsx';

const root = document.createElement('div');
document.body.appendChild(root);

render(
  <HelloWorldComponent />,
  root,
);