import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { GlobalFonts } from "global/globalFonts";
import { GlobalStyles } from "global/globalStyles";
import { main } from "global/colors";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  // split,
  // HttpLink,
} from "@apollo/client";
// import { getMainDefinition } from "@apollo/client/utilities";
// import { WebSocketLink } from "@apollo/client/link/ws";
// import { SubscriptionClient } from "subscriptions-transport-ws";
import { ContextProvider } from "context";

import { AppRoutes } from "routes/App";

// const httpLink = new HttpLink({
//   uri: `http://${
//     process.env.NODE_ENV === "production"
//       ? process.env.REACT_APP_PRODUCTION_HOST
//       : process.env.REACT_APP_DEVELOPMENT_HOST
//   }/graphql`,
//   credentials: "include",
// });

// const wslink = new WebSocketLink(
//   new SubscriptionClient(
//     `ws://${
//       process.env.NODE_ENV === "production"
//         ? process.env.REACT_APP_PRODUCTION_HOST
//         : process.env.REACT_APP_DEVELOPMENT_HOST
//     }/graphql`,
//     {
//       reconnect: true,
//       lazy: true,
//     }
//   )
// );

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);

//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   // wslink,
//   httpLink
// );

// export const client = new ApolloClient({
//   link: splitLink,
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
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
