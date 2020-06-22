import * as React from 'react';
import { useParams, Redirect } from 'react-router-dom';

// Queries
import {
  useVerifyUserInviteQuery,
  useVerifyUserExistenceQuery,
} from '../../generated/graphql';

// Components
import { NewAccountViaInvite } from './layout';

export const Invited = () => {
  const { token, teamId, email, name } = useParams();
  const { data: VerifyUserInvite } = useVerifyUserInviteQuery({
    variables: { token },
  });
  const { data: VerifyUserExistence } = useVerifyUserExistenceQuery({
    variables: { email, teamId, name },
  });

  console.log('token', token);
  console.log('teamId', teamId);
  console.log('email', email);
  console.log('name', name);

  console.log('invite', VerifyUserInvite);
  console.log('existence', VerifyUserExistence);

  return (
    <>
      {token && (
        <>
          {VerifyUserInvite?.verifyUserInvite.ok && VerifyUserExistence ? (
            <Redirect to={`/client/${teamId}`} />
          ) : (
            <NewAccountViaInvite />
          )}
        </>
      )}
    </>
  );
};
