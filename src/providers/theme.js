/* eslint-disable prefer-destructuring */
const breakpoints = ['414px', '768px', '1024px', '1366px', '1920px']
breakpoints.mobile = breakpoints[0]
breakpoints.tablet = breakpoints[1]
breakpoints.web = breakpoints[2]
breakpoints.hd = breakpoints[3]
breakpoints.fullhd = breakpoints[4]

const borderRadius = [0, 8, 20, 30]
borderRadius.none = borderRadius[0]
borderRadius.sm = borderRadius[1]
borderRadius.md = borderRadius[2]
borderRadius.lg = borderRadius[3]

const fonts = {
  default: "'Work Sans', sans-serif"
}

const fontSizes = ['10px', '12px', '14px', '16px', '18px', '20px', '25px']
fontSizes.xsmall = fontSizes[0]
fontSizes.small = fontSizes[1]
fontSizes.medium = fontSizes[2]
fontSizes.default = fontSizes[3]
fontSizes.large = fontSizes[4]
fontSizes.xlarge = fontSizes[5]
fontSizes.xxlarge = fontSizes[6]

const fontWeights = [400, 500, 600, 700]
fontWeights.regular = fontWeights[0]
fontWeights.medium = fontWeights[1]
fontWeights.semiBold = fontWeights[2]
fontWeights.bold = fontWeights[3]

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
]

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
}

const defaultTheme = {
  borderRadius,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space
}

export default defaultTheme
