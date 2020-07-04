import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

/**
 * Styles
 */
import { GlobalFonts } from './styles/globalFonts';
import { GlobalStyles } from './styles/globalStyles';
import { main } from './styles/colors';

// Apollo
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { getMainDefinition } from 'apollo-utilities';

import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

import { WebSocketLink } from 'apollo-link-ws';

import { InMemoryCache } from 'apollo-cache-inmemory';

/**
 * Context
 */
import { ContextProvider } from './context';

/**
 * Routes
 */
import { AppRoutes } from './routes/App';

/**
 * Config
 */
import { config } from './config';

const httpLink = new HttpLink({
  uri: config.http!,
  credentials: 'include',
});

const wsLink = new WebSocketLink({
  uri: config.ws!,
  options: {
    reconnect: true,
    lazy: true,
  },
});

const combinedLink = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const link = ApolloLink.from([combinedLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
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
