import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Loading } from './Loading';
import { GlobalFonts } from './styles/globalFonts';
import { GlobalStyles } from './styles/globalStyles';

// Apollo
import { ApolloProvider } from '@apollo/react-hooks';
import { setAccessToken, getAccessToken } from './global/token';
// import { getAccessToken } from './global/token';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable } from 'apollo-link';

import { TokenRefreshLink } from 'apollo-link-token-refresh';
import JwtDecode from 'jwt-decode';
import { ContextProvider } from './context';

import { main } from './styles/colors';
import { ThemeProvider } from 'styled-components';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // request: (operation) => {
  //   const token = localStorage.getItem('token');
  //   operation.setContext({
  //     headers: {
  //       authorization: token ? `Bearer ${token}` : '',
  //     },
  //   });
  // },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ContextProvider>
      <GlobalFonts />
      <GlobalStyles />
      <ThemeProvider theme={main}>
        <Loading />
      </ThemeProvider>
    </ContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
