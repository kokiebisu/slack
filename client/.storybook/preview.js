import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalFonts } from 'global/globalFonts';
import { GlobalStyles } from 'global/globalStyles';
import { main } from 'global/colors';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const globalProvider = (Story, context) => {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalFonts />
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [globalProvider];
