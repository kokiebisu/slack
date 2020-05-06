import React from 'react';
import ReactDOM from 'react-dom';
import Route from './routes';
import * as serviceWorker from './serviceWorker';

import { GlobalFonts } from './styles/globalFonts';
import { GlobalStyles } from './styles/globalStyles';

// Apollo
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, from } from 'apollo-link';
// import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const tokenMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      token: localStorage.getItem('token') || null,
    },
  }));

  return forward(operation);
});

const refreshTokenMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      refreshToken: localStorage.getItem('refreshToken') || null,
    },
  }));

  return forward(operation);
});

const logoutMiddleware = new ApolloLink((operation, forward) => {
  const { token, refreshToken } = operation.getContext();

  if (token) {
    localStorage.setItem('token', token);
  }

  if (refreshToken) {
    localStorage.setItem('refreshToken', refreshToken);
  }

  return forward(operation);
});

const client = new ApolloClient({
  link: from([
    tokenMiddleware,
    refreshTokenMiddleware,
    logoutMiddleware,
    httpLink,
  ]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalFonts />
    <GlobalStyles />
    <Route />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
