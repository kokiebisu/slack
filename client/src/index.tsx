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

import { ApolloClient } from 'apollo-client';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { AppRoutes } from './routes/App';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache(),
//   credentials: 'include',
// });

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true,
  },
});

const combinedLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const link = ApolloLink.from([terminatingLink]);

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
