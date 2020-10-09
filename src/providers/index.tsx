import React from 'react'

import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components'

import PropTypes from 'prop-types'

import GlobalStyles from '../global/styles'
import ReactDatesOverrides from './styleReactDatesOverrides'
import themeDefault from './theme'

export interface Props {
  resetCSS?: boolean
  children?: any
  theme?: any
}

export const ThemeProvider: React.FC<Props> = ({ children, theme }) => (
  <ThemeProviderStyledComponents theme={theme || themeDefault}>
    <GlobalStyles />
    <ReactDatesOverrides />
    {children}
    <div id='modal-root'></div>
  </ThemeProviderStyledComponents>
)

ThemeProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.any
}
