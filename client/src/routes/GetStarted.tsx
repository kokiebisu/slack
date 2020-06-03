import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { GetStarted } from '../pages/GetStarted';
import { GetStartedFind } from '../pages/GetStartedFind';
import { GetStartedCreate } from '../pages/GetStartedCreate';

export const GetStartedRoutes: React.SFC = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={match.url + '/'} component={GetStarted} />
        <Route path={match.url + '/find'} component={GetStartedFind} />
        <Route path={match.url + '/create'} component={GetStartedCreate} />
      </Switch>
    </>
  );
};
