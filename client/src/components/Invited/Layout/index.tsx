import * as React from 'react';
import { useReducer } from 'react';

// Blocks
import * as b from 'global/blocks';

// Components
import { LogoCenterLayout } from 'components/shared/LogoCenter/layout';

// Styles
import { Wrapper } from 'components/Invited/Layout/index.styles';
import { Inputs } from 'components/shared/components/Inputs';
import { PasswordValidationBar } from 'components/shared/components/ValidationBar';
import { PasswordValidationText } from 'components/shared/components/ValidationText';
import { ErrorDialog } from 'components/shared/components/ErrorDialog';
import { Confirm } from 'components/shared/components/Confirm';
import { Policy } from 'components/shared/components/Policy';

// Utils
import { inputReducer } from 'components/shared/components/Inputs/util';
import { useParams, useHistory } from 'react-router-dom';
import { fullNameRegex, weakRegex } from 'util/passwordUtil';
import { randomColor } from 'util/randomColor';
import { profile } from 'global/colors';
import { useCreateUserInviteMutation } from 'generated/graphql';

export const NewAccountViaInvite = () => {
  const { token, invitorId } = useParams();
  const history = useHistory();
  const [state, dispatch] = useReducer(inputReducer, {
    fullname: '',
    password: '',
    errorlog: '',
    loading: false,
  });

  const [create] = useCreateUserInviteMutation();

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

    if (!state.password) {
      displayError('Password field is empty');
      return;
    }

    if (!state.fullname.match(fullNameRegex)) {
      displayError('I want your full name! Not your nickname!');
      return;
    }

    if (!state.password.match(weakRegex)) {
      displayError('The password is not 6 characters! Give it another try!');
      return;
    }

    const avatarBackground = randomColor(profile);

    const response = await create({
      variables: {
        token,
        invitorId,
        name: state.fullname,
        password: state.password,
        avatarBackground,
      },
    });

    if (response && response.data && response.data.createUserInvite.ok) {
      history.push({
        pathname: `/client/${response.data.createUserInvite.teamId}`,
      });
    }
    if (response && response.data && !response.data.createUserInvite.ok) {
      dispatch({
        type: 'add_errorlog',
        payload: response.data.createUserInvite!.errorlog as string,
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
                  invite
                  fullname={state.fullname}
                  password={state.password}
                  modifyFullname={dispatch}
                  modifyEmail={dispatch}
                  modifyPassword={dispatch}
                />
                <PasswordValidationBar password={state.password} />
                <PasswordValidationText password={state.password} />
                <ErrorDialog width='full' error={state.errorlog} />
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
