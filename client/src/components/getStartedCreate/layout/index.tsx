import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as b from '../../../styles/blocks';

import { LogoCenterLayout } from '../../shared/LogoCenter/layout';

import { useRegisterMutation } from '../../../generated/graphql';
import { Warning, CheckCircle } from '../../../assets/svg';

import {
  weakRegex,
  fullNameRegex,
  emailRegex,
} from '../../../util/passwordUtil';

import { Wrapper, IconWrapper, confirmVariants } from './layout.styles';

// Components
import { PasswordValidationBar } from '../validationbar';
import { PasswordValidationText } from '../validationtext';
import { Policy } from '../policy';
import { Inputs } from '../inputs';
import { ErrorDialog } from '../errordialog';
import { Confirm } from '../confirm';

interface Props {}

export const GetStartedCreate: React.FC<Props> = () => {
  const history = useHistory();
  const [error, setError] = useState('');

  const [register, { loading }] = useRegisterMutation();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const displayError = (phrase: string) => {
    setError(phrase);
    setTimeout(() => {
      setError('');
    }, 5000);
  };

  const createAccount = async () => {
    if (!fullname) {
      displayError('Whoops! You forgot your name!');
      return;
    }

    if (!fullname.match(fullNameRegex)) {
      displayError('I want your full name! Not your nickname!');
      return;
    }

    if (!email) {
      displayError('Wait,, you forgot your email!');
      return;
    }

    if (!email.match(emailRegex)) {
      displayError('Is this really an email?');
      return;
    }

    if (!password.match(weakRegex)) {
      displayError('The password is not 6 characters! Give it another try!');
      return;
    }

    const response = await register({
      variables: { email, fullname, password },
    });

    if (response && response.data && response.data.register.ok) {
      history.push({
        pathname: '/create/verifyemail',
        state: email,
      });
    }
    if (response && response.data && !response.data.register.ok) {
      setError(response.data.register!.message as string);
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
                  fullname={fullname}
                  password={password}
                  email={email}
                  modifyFullname={setFullname}
                  modifyEmail={setEmail}
                  modifyPassword={setPassword}
                />
                <PasswordValidationBar password={password} />
                <PasswordValidationText password={password} />
                <ErrorDialog error={error} />
                <b.Box>
                  <Confirm loading={loading} />
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