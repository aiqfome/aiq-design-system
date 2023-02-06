import defaultTheme from '../theme'
import { ConfigType } from '@stitches/react/types/config'

const { colors } = defaultTheme

interface StitchesThemeInterface {
			prefix?: ConfigType.Prefix
			media?: ConfigType.Media
			theme?: ConfigType.Theme
			themeMap?: ConfigType.ThemeMap
			utils?: ConfigType.Utils
}

const theme: StitchesThemeInterface = {
  theme: {
    colors: {
      ...colors,
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px'
    },
    fontSizes: {
      xsmall: '10px',
      small: '12px',
      medium: '14px',
      default: '16px',
      large: '18px',
      xlarge: '20px',
      xxlarge: '25px'
    },
    fonts: {
      default: "'Work Sans', sans-serif"
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {}
  },
  media: {
    mobile: '(max-width: 414px)',
    tablet: '(min-width: 415px) and (max-width: 1023px)',
    web: '(min-width: 1024px) and (max-width: 1365px)',
    hd: '(min-width: 1366px) and (max-width: 1920px)',
    fullhd: '(min-width: 1921px)'
  },
  utils: {
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    size: (value: string) => ({
      width: value,
      height: value,
    }),
    br: (value) => ({
      borderRadius: value,
    }),
  }
}

export default theme
