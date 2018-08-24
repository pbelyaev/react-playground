import React from "react";
import { injectGlobal } from "styled-components";
import { render } from "react-dom";
import { App } from "./components/App/App";
import {COLORS} from "./constants/colors";

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    background: ${COLORS.silver};
  }
`;

const root = document.createElement("div");
document.body.appendChild(root);

render(<App />, root);
