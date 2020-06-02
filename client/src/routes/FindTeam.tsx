import React from 'react';

import { RouteComponentProps } from 'react-router-dom';
import { useLogoutMutation } from '../generated/graphql';
import { setAccessToken } from '../global/token';

export const FindTeam: React.FC<RouteComponentProps> = ({ history }) => {
  const [logout, { client }] = useLogoutMutation();
  return (
    <>
      <div>
        <button
          onClick={async () => {
            await logout();
            setAccessToken('');
            await client?.resetStore();
            history.push('/');
          }}>
          logout
        </button>
      </div>
    </>
  );
};
