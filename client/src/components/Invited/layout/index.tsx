import * as React from 'react';
import { useReducer } from 'react';

// Blocks
import * as b from '../../../styles/blocks';

// Components
import { LogoCenterLayout } from '../../shared/LogoCenter/layout';

// Styles
import { Wrapper } from './index.styles';
import { Inputs } from '../../shared/components/inputs';
import { PasswordValidationBar } from '../../shared/components/validationbar';
import { PasswordValidationText } from '../../shared/components/validationtext';
import { ErrorDialog } from '../../GetStartedStart/errordialog';
import { Confirm } from '../../shared/components/confirm';
import { Policy } from '../../shared/components/policy';

// Utils
import {
  State,
  Action,
  inputReducer,
} from '../../shared/components/inputs/util';

export const NewAccountViaInvite = () => {
  const [state, dispatch] = useReducer(inputReducer, {
    fullname: '',
    password: '',
    errorlog: '',
    loading: false,
  });

  const createAccount = () => {};

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
                  invite
                  fullname={state.fullname}
                  password={state.password}
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
