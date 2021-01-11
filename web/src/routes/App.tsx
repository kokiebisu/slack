import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import { Page } from "pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Page variant="landing" />
        </Route>
        <Route path="/signin">
          <Page variant="signin" />
        </Route>
        <Route path="/get-started">
          <Page variant="get-started" />
        </Route>
        <Route path="/client/:teamId/:variant?">
          <Page variant="client" />
        </Route>
        {/* <Route path="/client/:teamId/:variant">
          <Page variant="client" />
        </Route>
  
        <Route path="/your-workspaces/:token">
          <Page variant="findteam" />
        </Route>
        <Route path="/findteam">
          <Page variant="findteam" />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
};
