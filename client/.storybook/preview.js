import { ThemeProvider } from 'styled-components';
import { GlobalFonts } from 'global/globalFonts';
import { GlobalStyles } from 'global/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const globalProvider = (Story, context) => {
  return (
    <ThemeProvider theme={main}>
      <GlobalFonts />
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [globalProvider];
