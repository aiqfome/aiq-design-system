import { createGlobalStyle } from 'styled-components'

import 'rc-menu/assets/index.css'
import 'rc-dropdown/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  .rc-dropdown, .rc-tooltip, .rc-menu {
    font-family: unset;
    z-index: 9999;
  }

  .rc-menu-item-active, .rc-menu-submenu-active > .rc-menu-submenu-title, .rc-menu-submenu-selected, .rc-menu-item-selected {
    background-color: unset;
  }

  .rc-menu, .rc-menu-submenu-title {
    padding: 0 !important;
    border: none;
    box-shadow: none;
    border-radius: unset;
    color: unset;
  }
  .rc-menu-horizontal.rc-menu-sub, .rc-menu-vertical.rc-menu-sub, .rc-menu-vertical-left.rc-menu-sub, .rc-menu-vertical-right.rc-menu-sub {
    min-width: 0 !important;
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
