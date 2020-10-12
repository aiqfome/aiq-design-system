import React from 'react'
import renderer from 'react-test-renderer'

import { ThemeProvider } from 'styled-components'
import theme from './theme'

export const render: any = component => {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  )
}
