import React from "react";
import { ApolloProvider } from "react-apollo";
import { MemoryRouter } from "react-router-dom";
import { ToggleProvider } from "../src/context/toggle-context";
import { ThemeProvider } from "styled-components";
import { client } from "../src/index";
import { main } from "../src/global/colors";
import { GlobalStyles } from "../src/global/globalStyles";
import { GlobalFonts } from "../src/global/globalFonts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ApolloProvider client={client}>
      <MemoryRouter>
        <ToggleProvider>
          <ThemeProvider theme={main}>
            <GlobalStyles />
            <GlobalFonts />
            <Story />
          </ThemeProvider>
        </ToggleProvider>
      </MemoryRouter>
    </ApolloProvider>
  ),
];

export const argTypes = {
  extendsTo: {
    control: { disable: true },
  },
  to: {
    control: { disable: true },
  },
};
