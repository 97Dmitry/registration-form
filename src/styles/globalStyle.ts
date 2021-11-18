import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {padding: 0;margin: 0;border: 0;}
  *, *:before, *:after {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
  :focus, :active {outline: none;}
  a:focus, a:active {outline: none;}
  nav, footer, header, aside {display: block;}
  html, body {height: 100%;width: 100%;
  line-height: 1.25;font-size: 16px; font-family: "IBM Plex Sans";}
  input, button, textarea {font-family: inherit;}
  input::-ms-clear {display: none;}
  button {cursor: pointer;}
  button::-moz-focus-inner {padding: 0;border: 0;}
  a, a:visited {text-decoration: none;}
  a:hover {text-decoration: none;}
  ul li {list-style: none;}
  img {vertical-align: top;}
  h1, h2, h3, h4, h5, h6 {font-size: inherit;font-weight: 400;margin: 0;}
  li {list-style-type: none;}
  ul, ol {margin-left: 0;padding-left: 0;}
`;

export default GlobalStyle;