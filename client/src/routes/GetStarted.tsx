import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { GetStarted } from '../components/getstarted/layout';
import { GetStartedFind } from '../components/findteam/layout';
import { GetStartedCreate } from '../components/register/layout';

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
