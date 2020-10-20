import React from 'react'
import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from './theme'

const wrapper = ({ children, ...props }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui, options?: any) => render(ui, { wrapper, ...options })

export { customRender as render }
