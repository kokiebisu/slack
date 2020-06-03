import * as React from 'react';
import { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useHistory } from 'react-router-dom';

import { Box, Flex, Input, Button } from '../styles/blocks';
import { useRegisterMutation } from '../generated/graphql';

import { RouteComponentProps } from 'react-router-dom';

interface Props {}

export const Register: React.FC<Props> = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register] = useRegisterMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log('form submitted');
        const response = await register({
          variables: {
            username,
            email,
            password,
          },
        });

        history.push('/');
      }}>
      <div>
        <input
          value={username}
          placeholder='username'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          value={email}
          placeholder='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          value={password}
          placeholder='password'
          type='password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button type='submit'>submit</button>
      </div>
    </form>
  );
};
