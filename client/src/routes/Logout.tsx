import React from 'react';

import { useHistory } from 'react-router-dom';
import { useLogoutMutation } from '../generated/graphql';
import { setAccessToken } from '../global/token';

interface Props {}

export const Logout: React.FC<Props> = () => {
  const history = useHistory();

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
