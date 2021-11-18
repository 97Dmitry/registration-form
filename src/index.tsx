import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle, DefaultTheme } from "theme";
import Fonts from "./assets/fonts";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <Fonts />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
