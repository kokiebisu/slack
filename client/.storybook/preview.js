import React from 'react';
import { GlobalFonts } from '../src/global/globalFonts';
import { GlobalStyles } from '../src/global/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <Story />
    </>
  ),
];
