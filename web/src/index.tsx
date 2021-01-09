import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { GlobalFonts } from "./global/globalFonts";
import { GlobalStyles } from "./global/globalStyles";
import { main } from "./global/colors";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { getMainDefinition } from "apollo-utilities";

import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "@apollo/client/link/ws";

import { ContextProvider } from "./context";

import { AppRoutes } from "./routes/App";

const httpLink = new HttpLink({
  uri: `http://${
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_HOST
      : process.env.REACT_APP_DEVELOPMENT_HOST
  }/graphql`,
  credentials: "include",
});

const wsLink = new WebSocketLink({
  uri: `ws://${
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_HOST
      : process.env.REACT_APP_DEVELOPMENT_HOST
  }/graphql`,
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
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const link = ApolloLink.from([combinedLink]);

const cache = new InMemoryCache();

export const client = new ApolloClient({
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
  document.getElementById("root")
);
