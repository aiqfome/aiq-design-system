"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fonts = {
    default: "'Work Sans', sans-serif"
};
const fontSizes = {
    xsmall: '10px',
    small: '12px',
    medium: '14px',
    default: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '25px'
};
const fontWeights = {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
};
const space = [
    0,
    2,
    4,
    6,
    8,
    10,
    12,
    14,
    16,
    18,
    20,
    40,
    50,
    60,
    70,
    80,
    90,
    100
];
const colors = {
    // grey scale
    white: '#ffffff',
    lightGrey: '#f5f5f5',
    mediumGrey: '#dedede',
    grey: '#bfbfbf',
    darkGrey: '#8c8c8c',
    darkerGrey: '#434343',
    almostBlack: '#262626',
    black: '#000000',
    // brand
    primaryLightest: '#FFF0F6',
    primaryLight: '#FCC4DD',
    primary: '#eb2f96',
    primaryMedium: '#c41d7f',
    primaryDark: '#9e1068',
    secondaryLightest: '#EFFBF5',
    secondaryLight: '#D8F8E8',
    secondary: '#10b455',
    secondaryMedium: '#009e42',
    secondaryDark: '#018437',
    // actions
    info: '#2689ff',
    success: '#5ddb1f',
    warning: '#faad14',
    error: '#ff4d4f',
    // common
    red: '#DE4E51',
    pink: '#EB5387',
    purple: '#A652B4',
    deepPurple: '#8654DE',
    indigo: '#4C60D0',
    blue: '#4AAFFF',
    cyan: '#69D6E3',
    teal: '#33A59A',
    green: '#78C77C',
    lime: '#B5BF56',
    yellow: '#FFCD38',
    orange: '#F8A23D',
    deepOrange: '#FD825B',
    brown: '#C9775D'
};
const defaultTheme = {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    space
};
exports.default = defaultTheme;
