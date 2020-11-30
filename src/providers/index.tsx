import React, { createContext, useContext, useState } from 'react'

import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components'

import PropTypes from 'prop-types'

import designTheme from './theme'
import GlobalStyles from '../global/styles'
import ReactDatesOverrides from './styleReactDatesOverrides'

export interface Props {
  resetCSS?: boolean
  children?: any
  defaultTheme?: any
}

interface ContextProps {
  theme: any
  setTheme: any
}

const ThemeContext = createContext({
  theme: (): any => {
    throw new Error(`useTheme must be used within a ThemeProvider`)
  },
  setTheme: (theme: any): any => {
    throw new Error(`useTheme must be used within a ThemeProvider: ${theme}`)
  }
})

export const ThemeProvider: React.FC<Props> = ({ children, defaultTheme }) => {
  const [theme, setTheme] = useState(defaultTheme || designTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProviderStyledComponents theme={theme}>
        <GlobalStyles />
        <ReactDatesOverrides />
        {children}
        <div id='modal-root'></div>
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.any,
  defaultTheme: PropTypes.any
}

export const useTheme = (): ContextProps => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
