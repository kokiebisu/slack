import React, { useState, SetStateAction } from 'react';
import { useConfirmUserMutation } from '../generated/graphql';
import { useHistory, useLocation } from 'react-router-dom';
import { setAccessToken } from '../global/token';

export const ConfirmEmail = () => {
  const history = useHistory();
  const [digit, setDigit] = useState('');
  const [error, setError] = useState('');
  const [confirm] = useConfirmUserMutation();

  const location: any = useLocation();

  return (
    <div>
      {location.state && <h1>we sent a digit to {location.state.email!}</h1>}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const newDigit = parseInt(digit!, 10);
            const response = await confirm({
              variables: { digit: newDigit },
            });
            if (response && !response.data?.confirmUser.ok) {
              setError(response.data?.confirmUser.message!);
            }

            if (response && response.data?.confirmUser.ok) {
              setAccessToken(response.data.confirmUser.accessToken);
              history.push('/create/teamname');
            }
          } catch (err) {
            setError('wrong digit');
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
