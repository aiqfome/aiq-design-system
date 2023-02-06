import React, { ReactNode } from 'react'
import { createStitches } from '@stitches/react'
import defaultTheme from './theme'

type ThemeProviderType = {
  theme?: any
  children: ReactNode
}

const stitches = createStitches(defaultTheme)

export const StitchesThemeProvider = ({
  theme,
  children
}: ThemeProviderType) => {
  const { createTheme } = stitches

  const myTheme = createTheme(theme || defaultTheme)

  return <div className={myTheme}>{children}</div>
}

export { stitches }
