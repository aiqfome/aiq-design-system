import React from 'react'
import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from '../../global/styles'

export const renderStyled = component => {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  )
}
