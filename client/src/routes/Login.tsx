import * as React from 'react';
import { useState } from 'react';
// import { extendObservable } from 'mobx';
// import { observer } from 'mobx-react';

// Graphql
import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { Box, Flex, Input, Button } from '../styles/blocks';

import { useHistory, RouteComponentProps } from 'react-router-dom';
import { useLoginMutation } from '../generated/graphql';

interface Props {}

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
          console.log(response.data?.login);
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
