import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import {ThemeProvider} from 'styled-components';

import GlobalStyles from '../src/global/styles';
import theme from '../src/providers/theme';

import '../src/providers/initializeReactDate';
import ReactDatesOverrides from '../src/providers/styleReactDatesOverrides'
import themeStorybook from './theme';

function withTheme(storyFn) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ReactDatesOverrides/>
      {storyFn()}
    </ThemeProvider>
  );
}


addParameters({
  options: {
    theme: themeStorybook,
  },
});

addDecorator(withTheme);