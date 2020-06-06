import * as React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import * as b from '../styles/blocks';

import { LogoCenterLayout } from '../components/shared/LogoCenter/layout';

import {
  MeDocument,
  MeQuery,
  useMeQuery,
  useRegisterMutation,
} from '../generated/graphql';
import { setAccessToken } from '../global/token';
import { Warning } from '../assets/svg';

interface Props {}

export const GetStartedCreate: React.FC<Props> = () => {
  const history = useHistory();
  const [error, setError] = useState('');

  const [register] = useRegisterMutation();
  // const [login] = useLoginMutation();

  const [email, setEmail] = useState('');

  return (
    <LogoCenterLayout>
      <b.Box py={4}>
        <b.Flex flexDirection='column' alignItems='center'>
          <Wrapper>
            <b.Box>
              <b.Box>
                <b.Text
                  fontSize={48}
                  color='black__light'
                  fontFamily='Larsseit-Bold'
                  textAlign='center'>
                  First, enter your email
                </b.Text>
              </b.Box>
              <b.Box pt={2} pb={4}>
                <b.Text
                  lineHeight={1.5}
                  textAlign='center'
                  color='gray'
                  fontFamily='SlackLato-Regular'
                  fontSize={20}>
                  Just one more email — a quick confirmation — before you say
                  goodbye to overstuffed inboxes for good.
                </b.Text>
              </b.Box>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const response = await register({ variables: { email } });

                  if (response && response.data && response.data.register.ok) {
                    history.push({
                      pathname: '/create/verifyemail',
                      state: email,
                    });
                  }
                  if (response && response.data && !response.data.register.ok) {
                    setError(response.data.register!.message as string);
                  }
                }}>
                <b.Box>
                  <b.Flex alignItems='center' flexDirection='column'>
                    <b.Box>
                      <Input
                        onChange={(e) => setEmail(e.target.value)}
                        border='1px solid gray'
                        borderRadius={3}
                        placeholder='name@work-email.com'
                      />
                    </b.Box>
                    {error && (
                      <ErrorBox backgroundColor='pink__lighter' width={1}>
                        <b.Flex>
                          <IconWrapper mr={2}>
                            <Warning />
                          </IconWrapper>
                          <b.Box>
                            <b.Text
                              fontFamily='SlackLato-Regular'
                              fontSize={14}>
                              Sorry, but that email is invalid
                            </b.Text>
                          </b.Box>
                        </b.Flex>
                      </ErrorBox>
                    )}
                  </b.Flex>
                </b.Box>
                <b.Box my={3}>
                  <b.Flex justifyContent='center'>
                    <ConfirmButton type='submit'>
                      <b.Text color='white' fontFamily='SlackLato-Bold'>
                        Confirm
                      </b.Text>
                    </ConfirmButton>
                  </b.Flex>
                </b.Box>
              </form>
            </b.Box>
          </Wrapper>
        </b.Flex>
      </b.Box>
    </LogoCenterLayout>
  );
};

const Wrapper = styled(b.Box)`
  max-width: 768px;
  width: 100%;
`;

const Input = styled(b.Input)`
  width: 370px;
  padding: 13px 0 13px 13px;
`;

const ErrorBox = styled(b.Box)`
  width: 370px;
  background-color: ${({ theme }) => theme.colors.pink__lighter};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.pink};
  padding: 10px 0 10px 10px;
`;

const ConfirmButton = styled(b.Button)`
  width: 370px;
  border-radius: 5px;
  padding: 13px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary__light};
  }
`;

const CheckboxArea = styled(b.Box)`
  width: 350px;
`;

const CheckboxWrapper = styled(b.Box)`
  position: relative;
  top: 1.25px;
`;

const IconWrapper = styled(b.Box)`
  svg {
    width: 15px;
    height: 15px;
    path {
      fill: ${({ theme }) => theme.colors.pink};
    }
    rect {
      fill: ${({ theme }) => theme.colors.pink};
    }
  }
`;
