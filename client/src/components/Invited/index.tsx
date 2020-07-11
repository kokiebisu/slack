import * as React from 'react';
import { useParams, Redirect } from 'react-router-dom';

// Queries
import { useVerifyUserInviteQuery } from '../../generated/graphql';

// Components
import { NewAccountViaInvite } from './Layout';

export const Invited = () => {
  const { invitorId, token } = useParams();
  const { data: VerifyUserInvite } = useVerifyUserInviteQuery({
    variables: { token, invitorId },
  });

  return (
    <>
      {token && (
        <>
          {VerifyUserInvite?.verifyUserInvite.ok ? (
            <Redirect
              to={`/client/${VerifyUserInvite?.verifyUserInvite.teamId}`}
            />
          ) : (
            <NewAccountViaInvite />
          )}
        </>
      )}
    </>
  );
};
