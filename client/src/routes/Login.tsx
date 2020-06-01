import * as React from 'react';
import { useState } from 'react';

import { Box, Flex, Input, Button } from '../styles/blocks';

import { RouteComponentProps } from 'react-router-dom';
import { useLoginMutation } from '../generated/graphql';
import { setAccessToken } from '../global/token';

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [login] = useLoginMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box bg='white' width={512} px={5} py={2}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await login({ variables: { email, password } });

          if (response && response.data) {
            setAccessToken(response.data.login!.accessToken);
          }

          history.push('/');
        }}>
        <div>
          <h1>Login</h1>
        </div>

        <Flex flexDirection='column'>
          <label>email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='text'
            name='email'
          />
        </Flex>
        <Flex flexDirection='column'>
          <label>password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            name='password'
          />
        </Flex>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </Box>
  );
};
