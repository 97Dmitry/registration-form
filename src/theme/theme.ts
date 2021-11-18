import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { fontMaker, IBMPlexSansFont } from "./fonts"

export const globalStyle = createGlobalStyle`
  ${normalize}

  * {padding: 0;margin: 0;border: 0;}
  *, *:before, *:after {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
  :focus, :active {outline: none;}
  a:focus, a:active {outline: none;}
  nav, footer, header, aside {display: block;}
  html, body {height: 100%;width: 100%;
  line-height: 21px;font-size: 16px; font-family: "IBMPlexSans-Regular";}
  input, button, textarea {font-family: inherit;}
  input::-ms-clear {display: none;}
  button {cursor: pointer;}
  button::-moz-focus-inner {padding: 0;border: 0;}
  a, a:visited {text-decoration: none;}
  a:hover {text-decoration: none;}
  ul li {list-style: none;}
  img {vertical-align: top;}
  h1, h2, h3, h4, h5, h6 {font-size: inherit;margin: 0;}
  li {list-style-type: none;}
  ul, ol {margin-left: 0;padding-left: 0;}
`;

export type ThemeType = typeof lightTheme;

export const lightTheme = {
  name: "light",
  colors: {
    color1: "#2C2738",
    color2: "#756F86",
    color3: "#dbe2ea",
    color4: "#FF7171",
  },
  background: "",
  typography: {
    IBMPlexSans: fontMaker(IBMPlexSansFont),
  },
};

export const darkTheme: ThemeType = {
  name: "dark",
  colors: {
    color1: "none",
    color2: "none",
    color3: "none",
    color4: "none",
  },
  background: "",
  typography: {
    IBMPlexSans: fontMaker(IBMPlexSansFont),
  },
};

const theme = lightTheme;
export default theme