import * as React from 'react';
import { useParams } from 'react-router-dom';

export const Invited = () => {
  const { token } = useParams();
  // query that checks if the token is valid
  return (
    <>
      {/* first check if response was positive */}

      {/* now check if the user has an account already or not */}
    </>
  );
};
