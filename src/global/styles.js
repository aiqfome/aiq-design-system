import { createGlobalStyle } from 'styled-components'

import 'rc-dropdown/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  .rc-dropdown, .rc-tooltip {
    font-family: unset;
    z-index: 9999;
  }

  body {
    background: ${props => props.theme.colors.white};
    font-family: 'Work Sans', sans-serif;
    font-size: ${props => props.theme.fontSizes.default};
    color: ${props => props.theme.colors.almostBlack};
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
  }

  button {
    cursor: pointer;
    font-family: 'Work Sans', sans-serif;
  }

  input {
    font-family: 'Work Sans', sans-serif !important;
  }
`
