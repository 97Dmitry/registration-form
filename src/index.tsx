import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Fonts, GlobalStyle } from "styles";

ReactDOM.render(
  <React.StrictMode>
    <Fonts />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
