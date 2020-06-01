import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Loading } from './Loading';
import { GlobalFonts } from './styles/globalFonts';
import { GlobalStyles } from './styles/globalStyles';

// Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getAccessToken } from './global/token';
// import { getAccessToken } from './global/token';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
  request: (operation) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      operation.setContext({
        headers: {
          authorization: `bearer ${accessToken}`,
        },
      });
    }
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalFonts />
    <GlobalStyles />
    <Loading />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
