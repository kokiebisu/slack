import * as React from 'react';
import { useState } from 'react';

import * as b from '../styles/blocks';

import { useHistory } from 'react-router-dom';
import { MeDocument, MeQuery, useMeQuery } from '../generated/graphql';
import { setAccessToken } from '../global/token';

interface Props {}

export const Login: React.FC<Props> = () => {
  const history = useHistory();

  const { data, loading } = useMeQuery();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <b.Box mx={5}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // const response = await login({
          //   variables: { email, password },
          //   update: (store, { data }) => {
          //     if (!data) {
          //       return null;
          //     }
          //     store.writeQuery<MeQuery>({
          //       query: MeDocument,
          //       data: {
          //         __typename: 'Query',
          //         me: data.login?.user,
          //       },
          //     });
          //   },
          // });

          // if (response && response.data) {
          //   setAccessToken(response.data.login!.accessToken);
          // }

          history.push('/');
        }}>
        <div>
          <h1>Login</h1>
        </div>

        <b.Flex flexDirection='column'>
          <label>email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='text'
            name='email'
          />
        </b.Flex>
        <b.Flex flexDirection='column'>
          <label>password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            name='password'
          />
        </b.Flex>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </b.Box>
  );
};
