import * as React from 'react';
import { useState } from 'react';
import { useVerifyUserMutation } from '../generated/graphql';
import { useHistory, useLocation } from 'react-router-dom';

export const ConfirmDigit = () => {
  const history = useHistory();
  const [digit, setDigit] = useState('');
  const [error, setError] = useState('');
  const [verify] = useVerifyUserMutation();

  const location: any = useLocation();

  return (
    <div>
      {location.state && <h1>we sent a digit to {location.state.email!}</h1>}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const newDigit = parseInt(digit!, 10);
            const response = await verify({
              variables: { digit: newDigit },
            });
            console.log(response);
            if (response && !response.data?.verifyUser.ok) {
              setError(response.data?.verifyUser.message!);
            }

            if (response && response.data?.verifyUser.ok) {
              history.push('/create/teamname');
            }
          } catch (err) {
            setError('something went awfully wrong');
          }
        }}>
        <input
          placeholder='number'
          value={digit}
          onChange={(e) => setDigit(e.target.value)}
        />
        <button type='submit'>submit</button>
        {error !== '' ? <h1>{error}</h1> : null}
      </form>
    </div>
  );
};
