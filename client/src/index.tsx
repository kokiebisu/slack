import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { Loading } from './Loading';
import { GlobalFonts } from './styles/globalFonts';
import { GlobalStyles } from './styles/globalStyles';

// Apollo
import { ApolloProvider } from '@apollo/react-hooks';

import { InMemoryCache } from 'apollo-cache-inmemory';

import { ContextProvider } from './context';

import { main } from './styles/colors';
import { ThemeProvider } from 'styled-components';

import ApolloClient from 'apollo-boost';
import { AppRoutes } from './routes/App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ContextProvider>
      <GlobalFonts />
      <GlobalStyles />
      <ThemeProvider theme={main}>
        <AppRoutes />
      </ThemeProvider>
    </ContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
