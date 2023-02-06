import React, { createContext, useContext, useState } from 'react'

import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components'

import designTheme from '@/src/providers/theme'
import GlobalStyles from '@/src/global/styles'
import PopoverStyles from '@/src/global/popover'
import ActionsStyles from '@/src/global/actions'
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
        <PopoverStyles />
        <ActionsStyles />
        <GlobalStyles />

        <ReactDatesOverrides />
        {children}
        <div id='modal-root'></div>
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ContextProps => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
