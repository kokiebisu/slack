import React from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';

// Graphql
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Box, Flex, Input, Button } from '../components/Blocks';

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      name: '',
      errors: {
        nameError: '',
      },
    });
  }

  onSubmit = async () => {
    const { name } = this;
    const response = await this.props.mutate({
      variables: { name },
    });
    console.log(response);
    const { ok, errors } = response.data.createTeam;
    if (ok) {
      this.props.history.push('/');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.errors = err;
    }
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  render() {
    const {
      name,
      errors: { nameError },
    } = this;

    return (
      <Box bg='white' width={512} px={5} py={2}>
        <div>
          <h1>Create team</h1>
        </div>

        <Flex flexDirection='column'>
          <label>name</label>
          <Input
            onChange={this.onChange}
            px={2}
            value={name}
            type='text'
            name='name'
          />
        </Flex>
        {!!nameError ? <div>there was a error in team name</div> : null}
        <div>
          <Button
            onClick={() => {
              this.onSubmit();
            }}
            px={2}>
            Submit
          </Button>
        </div>
      </Box>
    );
  }
}

const createTeamMutation = gql`
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

export default graphql(createTeamMutation)(observer(CreateTeam));
