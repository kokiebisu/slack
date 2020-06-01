import * as React from 'react';

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useHistory } from 'react-router-dom';

import { useState } from 'react';

import { Box, Flex, Input, Button } from '../styles/blocks';

interface Props {}

export const Register: React.FC<Props> = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState({
    usernameError: '',
    emailError: '',
    passwordError: '',
  });

  let history = useHistory();

  const REGISTER = gql`
    mutation($username: String!, $email: String!, $password: String!) {
      register(username: $username, email: $email, password: $password) {
        ok
        errors {
          path
          message
        }
      }
    }
  `;

  const [register] = useMutation(REGISTER);

  const onSubmit = async (username, email, password) => {
    const response = await register({
      variables: { username, email, password },
    });
    console.log(response);
    const { ok, errors } = response.data.register;

    if (ok) {
      history.push('/home');
    } else {
      let err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });
      setState(err);
    }
  };

  const { usernameError, emailError, passwordError } = state;

  return (
    <Box bg='white' width={512} px={5} py={2}>
      <div>
        <h1>Register</h1>
      </div>
      <Flex flexDirection='column'>
        <label>username</label>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          px={2}
          value={username}
          type='text'
          name='username'
        />
      </Flex>
      {!!usernameError ? <div>there was a username error</div> : null}
      <Flex flexDirection='column'>
        <label>email</label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          px={2}
          value={email}
          type='text'
          name='email'
        />
      </Flex>
      {!!emailError ? <div>there was a email error</div> : null}
      <Flex flexDirection='column'>
        <label>password</label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          px={2}
          value={password}
          type='password'
          name='password'
        />
      </Flex>
      {!!passwordError ? <div>there was a password error</div> : null}
      <div>
        <Button
          onClick={() => {
            onSubmit(username, email, password);
            setUsername('');
            setEmail('');
            setPassword('');
          }}
          px={2}>
          Submit
        </Button>
      </div>
    </Box>
  );
};
