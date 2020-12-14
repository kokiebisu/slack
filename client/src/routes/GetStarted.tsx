import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

/** components */
import { Auth } from "components/organisms/auth/auth.component";
import { Layout } from "components/layout/layout.component";

export const GetStartedRoutes: React.SFC = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`${match.url}/`}>
          <Layout
            variant="getstarted"
            content={<Auth variant="getstarted" />}
          />
        </Route>
        <Route path={`${match.url}/find`}>
          <Layout
            variant="getstarted"
            title="Let's find your team"
            subtitle="Enter the email you usually collaborate with"
            content={<Auth variant="find" />}
          />
        </Route>
        <Route path={`${match.url}/create`}>
          <Layout
            variant="getstarted"
            title="First, create your account"
            content={<Auth variant="signup" width={370} />}
          />
        </Route>
        <Route path={`${match.url}/check/:token?`}>
          <Layout
            variant="getstarted"
            title=" Check your email!"
            subtitle="We’ve emailed a special link to . Click the link to
                      confirm your address and get started. Wrong email? Please
                      re-enter your address."
            content={<Auth variant="confirm" />}
          />
        </Route>
        <Route path={`${match.url}/invited/:invitorId/:token?`}>
          <Layout
            variant="getstarted"
            title="First create your account"
            content={<Auth variant="invited" />}
          />
        </Route>
      </Switch>
    </>
  );
};
