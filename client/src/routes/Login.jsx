import React, { useState } from 'react';
// import { extendObservable } from 'mobx';
// import { observer } from 'mobx-react';

// Graphql
import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { Box, Flex, Input, Button } from '../styles/blocks';

import { useHistory } from 'react-router-dom';

const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      refreshToken
      errors {
        path
        message
      }
    }
  }
`;

const Login = () => {
  const client = useApolloClient();
  const router = useHistory();
  const [login, { data }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem('token', login.token);
      localStorage.setItem('refreshToken', login.refreshToken);
      client.writeData({ data: { isLoggedIn: true } });
      router.push('/');
    },
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  return (
    <Box bg='white' width={512} px={5} py={2}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          login({ variables: { email, password } });
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
        {console.log('data', data)}

        <div>
          <Button type='submit' px={2}>
            Submit
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default Login;
