import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// Pages
import { GetStarted } from '../components/GetStarted/layout';
import { GetStartedFind } from '../components/GetStartedFind/layout';
import { GetStartedCreate } from '../components/GetStartedCreate/layout';
import { ConfirmEmail } from '../components/GetStartedCheck/layout';

export const GetStartedRoutes: React.SFC = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={match.url + '/'} component={GetStarted} />
        <Route path={match.url + '/find'} component={GetStartedFind} />
        <Route path={match.url + '/create'} component={GetStartedCreate} />
        <Route path={match.url + '/check/:token?'} component={ConfirmEmail} />
      </Switch>
    </>
  );
};
