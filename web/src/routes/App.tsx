import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Routes
import { CreateRoutes } from "./Create";
import { GetStartedRoutes } from "./GetStarted";
import { ClientRoutes } from "./Workspace";

// Pages
import { Page } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Page variant="landing" />
        </Route>
        <Route path="/get-started" component={GetStartedRoutes} />
        <Route path="/create" component={CreateRoutes} />
        <Route path="/client/:teamId" component={ClientRoutes} />
        <Route path="/signin">
          <Page variant="signin" />
        </Route>
        <Route path="/your-workspaces/:token">
          <Page variant="findteam" />
        </Route>
        <Route path="/findteam">
          <Page variant="findteam" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
