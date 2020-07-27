import { addDecorator } from '@storybook/react';
import React from 'react';
import {ThemeProvider} from 'styled-components';

import GlobalStyles from '../src/global/styles';
import theme from '../src/providers/theme';


function withTheme(storyFn) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  );
}


addDecorator(withTheme);