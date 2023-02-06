import { addDecorator, addParameters } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../src/global/styles'
import PopoverStyles from '../src/global/popover'
import ActionsStyles from '../src/global/actions'
import theme from '../src/providers/theme'
import { StitchesThemeProvider } from '../src/providers'

import { BrowserRouter } from 'react-router-dom'

import '../src/providers/initializeReactDate'
import ReactDatesOverrides from '../src/providers/styled-component/styleReactDatesOverrides'
import themeStorybook from './theme'

function withTheme(storyFn) {
  return (
    <ThemeProvider theme={theme}>
      <StitchesThemeProvider>
        <BrowserRouter>
          <GlobalStyles />
          <PopoverStyles />
          <ActionsStyles />

          <ReactDatesOverrides />
          <div id='app-root'>{storyFn()}</div>
          <div id='modal-root'></div>
        </BrowserRouter>
      </StitchesThemeProvider>
    </ThemeProvider>
  )
}

addParameters({
  options: {
    theme: themeStorybook
  }
})

addDecorator(withTheme)
