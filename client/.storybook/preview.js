import React from 'react';
import { ContextProvider } from '../src/context';
import { GlobalFonts } from '../src/global/globalFonts';
import { GlobalStyles } from '../src/global/globalStyles';
import { ThemeProvider } from 'styled-components';
import { main } from '../src/global/colors';
import { MemoryRouter } from 'react-router-dom';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <MemoryRouter>
        <ContextProvider>
          <GlobalFonts />
          <GlobalStyles />
          <ThemeProvider theme={main}>
            <Story />
          </ThemeProvider>
        </ContextProvider>
      </MemoryRouter>
    </>
  ),
];
