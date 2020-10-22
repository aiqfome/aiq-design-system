import React from 'react'

import { render } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import theme from './theme'

const wrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  )
}

const customRender = (ui, options?: any) => render(ui, { wrapper, ...options })

export { customRender as render }
