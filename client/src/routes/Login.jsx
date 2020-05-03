import React from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';

// Graphql
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Box, Flex, Input, Button } from '../styles/blocks';

class Login extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      email: '',
      password: '',
      errors: {
        emailError: '',
        passwordError: '',
      },
    });
  }

  onSubmit = async () => {
    const { email, password } = this;
    const response = await this.props.mutate({
      variables: { email, password },
    });
    const { ok, errors } = response.data.login;
    if (ok) {
      const { token, refreshToken } = response.data.login;
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
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
      email,
      password,
      errors: { emailError, passwordError },
    } = this;

    return (
      <Box bg='white' width={512} px={5} py={2}>
        <div>
          <h1>Login</h1>
        </div>

        <Flex flexDirection='column'>
          <label>email</label>
          <Input
            onChange={this.onChange}
            px={2}
            value={email}
            type='text'
            name='email'
          />
        </Flex>
        {!!emailError ? <div>there was an email error</div> : null}
        <Flex flexDirection='column'>
          <label>password</label>
          <Input
            onChange={this.onChange}
            px={2}
            value={password}
            type='password'
            name='password'
          />
        </Flex>
        {!!passwordError ? <div>There was a password error</div> : null}
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

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
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

export default graphql(loginMutation)(observer(Login));
