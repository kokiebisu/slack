import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// Pages
import { GetStarted } from "pages/GetStarted";
import { GetStartedFind } from "pages/GetStartedFind";
import { GetStartedCreate } from "pages/GetStartedStart";
import { ConfirmEmail } from "pages/GetStartedCheck";
import { Invited } from "pages/Invited";

/** components */
import { Auth } from "components/organisms/auth/auth.component";

export const GetStartedRoutes: React.SFC = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={match.url + "/"}>
          <GetStarted content={<Auth variant="getstarted" />} />
        </Route>
        <Route path={match.url + "/find"} component={GetStartedFind} />
        <Route path={match.url + "/create"} component={GetStartedCreate} />
        <Route path={match.url + "/check/:token?"} component={ConfirmEmail} />
        <Route
          path={match.url + "/invited/:invitorId/:token?"}
          component={Invited}
        />
      </Switch>
    </>
  );
};
