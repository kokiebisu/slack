import React, { useState } from 'react';

// Graphql
// import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { Box, Flex, Input, Button } from '../styles/blocks';

const CreateTeam = () => {
  const client = useApolloClient();
  const [create, { data }] = useMutation(CREATE_TEAM, {
    onCompleted(response) {
      console.log('completed', response);
      client.writeData({ data: { isLoggedIn: true } });
    },
  });

  const [team, setTeam] = useState('');

  return (
    <Box bg='white' width={512} px={5} py={2}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          create({ variables: { name: team } });
        }}>
        <div>
          <h1>Create team</h1>
        </div>

        <Flex flexDirection='column'>
          <label>name</label>
          <input
            onChange={(e) => setTeam(e.target.value)}
            value={team}
            type='text'
            name='team'
          />
        </Flex>

        <div>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Box>
  );
};

const CREATE_TEAM = gql`
  mutation($name: String!) {
    createTeam(name: $name) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default CreateTeam;
