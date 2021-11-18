import { createGlobalStyle } from 'styled-components';

import IBMPlexSansBoldWoff from "assets/fonts/IMBPlexSans/IBMPlexSans-Bold.woff";
import IBMPlexSansBoldWoff2 from "assets/fonts/IMBPlexSans/IBMPlexSans-Bold.woff";

import IBMPlexSansMediumWoff from "assets/fonts/IMBPlexSans/IBMPlexSans-Medium.woff";
import IBMPlexSansMediumWoff2 from "assets/fonts/IMBPlexSans/IBMPlexSans-Medium.woff";

import IBMPlexSansRegularWoff from "assets/fonts/IMBPlexSans/IBMPlexSans-Regular.woff";
import IBMPlexSansRegularWoff2 from "assets/fonts/IMBPlexSans/IBMPlexSans-Regular.woff";


const Fonts = createGlobalStyle`
  @font-face {
    font-family: "IBMPlexSans-Bolt";
    src: local("IBM Plex Sans Bolt"), local("IBMPlexSans-Bolt"),
    url(${IBMPlexSansBoldWoff}) format("woff"),
    url(${IBMPlexSansBoldWoff2}) format("woff2");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "IBMPlexSans-Medium";
    src: local("IBM Plex Sans Medium"), local("IBMPlexSans-Medium"),
    url(${IBMPlexSansMediumWoff}) format("woff"),
    url(${IBMPlexSansMediumWoff2}) format("woff2");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "IBMPlexSans-Regular";
    src: local("IBM Plex Sans Regular"), local("IBMPlexSans-Regular"),
    url(${IBMPlexSansRegularWoff}) format("woff"),
    url(${IBMPlexSansRegularWoff2}) format("woff2");
    font-weight: normal;
    font-style: normal; 
  }
`;

type WeightType = 400 | 500 | 700;

export const fontMaker =
  (font: Record<string, string>) => (options: { weight?: WeightType; size?: number; lineHeight?: number }) => {
    const { weight = font[500], size = 16, lineHeight = 2 } = options;

    return {
      'font-family': font[weight],
      'font-size': size,
      'line-height': lineHeight,
    };
  };

export const IBMPlexSansFont: { [index: string]: string } = {
  '400': 'IBMPlexSans-Regular',
  '500': 'IBMPlexSans-Medium',
  '700': 'IBMPlexSans-Bold',
};


export default Fonts;