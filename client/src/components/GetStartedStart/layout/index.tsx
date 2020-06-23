import * as React from 'react';
import { useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';

// Blocks
import * as b from '../../../styles/blocks';

// Queries
import { useRegisterMutation } from '../../../generated/graphql';

// Utils
import {
  weakRegex,
  fullNameRegex,
  emailRegex,
} from '../../../util/passwordUtil';

// Components
import { LogoCenterLayout } from '../../shared/LogoCenter/layout';
import { Wrapper } from './index.styles';
import { PasswordValidationBar } from '../../shared/components/validationbar';
import { PasswordValidationText } from '../../shared/components/validationtext';
import { Policy } from '../../shared/components/policy';
import { Inputs } from '../../shared/components/inputs';
import { ErrorDialog } from '../errordialog';
import { Confirm } from '../../shared/components/confirm';
import { randomColor } from '../../../util/randomColor';
import { profile } from '../../../styles/colors';

// Utils
import { inputReducer } from '../../shared/components/inputs/util';

interface Props {}

export const GetStartedCreate: React.FC<Props> = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(inputReducer, {
    fullname: '',
    password: '',
    email: '',
    errorlog: '',
    loading: false,
  });

  const [register, { loading }] = useRegisterMutation();

  const displayError = (phrase: string) => {
    dispatch({ type: 'add_errorlog', payload: phrase });
    setTimeout(() => {
      dispatch({ type: 'add_errorlog', payload: '' });
    }, 5000);
  };

  const createAccount = async () => {
    if (!state.fullname) {
      displayError('Whoops! You forgot your name!');
      return;
    }

    if (!state.fullname.match(fullNameRegex)) {
      displayError('I want your full name! Not your nickname!');
      return;
    }

    if (!state.email) {
      displayError('Wait,, you forgot your email!');
      return;
    }

    if (!state.email.match(emailRegex)) {
      displayError('Is this really an email?');
      return;
    }

    if (!state.password.match(weakRegex)) {
      displayError('The password is not 6 characters! Give it another try!');
      return;
    }

    const avatarBackground = randomColor(profile);

    console.log('response entered');

    const response = await register({
      variables: {
        email: state.email,
        fullname: state.fullname,
        password: state.password,
        avatarBackground,
      },
    });

    if (response && response.data && response.data.register.ok) {
      history.push({
        pathname: '/create/verifyemail',
        state: state.email,
      });
    }
    if (response && response.data && !response.data.register.ok) {
      dispatch({
        type: 'add_errorlog',
        payload: response.data.register!.errorlog as string,
      });
    }
  };

  return (
    <LogoCenterLayout>
      <b.Box py={4}>
        <b.Flex flexDirection='column' alignItems='center'>
          <Wrapper>
            <b.Box>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createAccount();
                }}>
                <b.Box>
                  <b.Text
                    fontSize={48}
                    color='black__light'
                    fontFamily='Larsseit-Bold'
                    textAlign='center'>
                    First, create your account
                  </b.Text>
                </b.Box>

                <Inputs
                  fullname={state.fullname}
                  password={state.password}
                  email={state.email}
                  modifyFullname={dispatch}
                  modifyEmail={dispatch}
                  modifyPassword={dispatch}
                />
                <PasswordValidationBar password={state.password} />
                <PasswordValidationText password={state.password} />
                <ErrorDialog error={state.errorlog} />
                <b.Box>
                  <Confirm loading={state.loading} />
                  <Policy />
                </b.Box>
              </form>
            </b.Box>
          </Wrapper>
        </b.Flex>
      </b.Box>
    </LogoCenterLayout>
  );
};
