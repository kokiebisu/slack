import * as React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import * as b from '../styles/blocks';

import { LogoCenterLayout } from '../components/shared/LogoCenter/layout';

import {
  useLoginMutation,
  MeDocument,
  MeQuery,
  useMeQuery,
} from '../generated/graphql';
import { setAccessToken } from '../global/token';
import { Warning } from '../assets/svg/Warning';

interface Props {}

interface Error {
  user: any;
  password: any;
}

export const GetStartedCreate: React.FC<Props> = () => {
  const history = useHistory();
  const [error, setError] = useState<Error>({
    user: false,
    password: false,
  });

  let response: any;

  const [login] = useLoginMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LogoCenterLayout>
      <b.Box py={4}>
        <b.Flex flexDirection='column' alignItems='center'>
          <Wrapper>
            <b.Box>
              <b.Box>
                <b.Text
                  fontSize={48}
                  color='#1D1C1D'
                  fontFamily='Larsseit-Bold'
                  textAlign='center'>
                  First, enter your email and password
                </b.Text>
              </b.Box>
              <b.Box pt={2} pb={4}>
                <b.Text
                  lineHeight={1.5}
                  textAlign='center'
                  color='#454245'
                  fontFamily='SlackLato-Regular'
                  fontSize={20}>
                  Just one more email — a quick confirmation — before you say
                  goodbye to overstuffed inboxes for good.
                </b.Text>
              </b.Box>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  response = await login({
                    variables: { email, password },
                    update: (store, { data }) => {
                      if (!data) {
                        return null;
                      }
                      store.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: {
                          __typename: 'Query',
                          me: data.login?.user,
                        },
                      });
                    },
                  });

                  if (response && response.data.login) {
                    const errorType = response.data.login.errorType;

                    setError({ user: false, password: false });
                    setError({ ...error, [errorType]: true });
                  }

                  if (response && response.data?.login?.ok) {
                    setAccessToken(response.data.login!.accessToken);
                    history.push('/create/teamname');
                  }
                }}>
                <b.Box>
                  <b.Flex alignItems='center' flexDirection='column'>
                    <b.Box>
                      <Input
                        onChange={(e) => setEmail(e.target.value)}
                        border='1px solid #868686'
                        borderRadius={3}
                        placeholder='name@work-email.com'
                      />
                    </b.Box>
                    {error.user && (
                      <ErrorBox backgroundColor='red' width={1}>
                        <b.Flex>
                          <b.Box mr={2}>
                            <Warning width={15} height={15} color='#efa0b7' />
                          </b.Box>
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
                    <b.Box mt={3}>
                      <Input
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        border='1px solid #868686'
                        borderRadius={3}
                        placeholder='password here...'
                      />
                    </b.Box>
                    {error.password && (
                      <ErrorBox backgroundColor='red' width={1}>
                        <b.Flex>
                          <b.Box mr={2}>
                            <Warning width={15} height={15} color='#efa0b7' />
                          </b.Box>
                          <b.Box>
                            <b.Text
                              fontFamily='SlackLato-Regular'
                              fontSize={14}>
                              Sorry, but the password doesn't match
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
  background-color: #fbebef;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #efa0b7;
  padding: 10px 0 10px 10px;
`;

const ConfirmButton = styled(b.Button)`
  width: 370px;
  border-radius: 5px;
  padding: 13px 0;
  text-align: center;
  background-color: #4a144b;

  &:hover {
    background-color: #5c2c5d;
  }
`;

const CheckboxArea = styled(b.Box)`
  width: 350px;
`;

const CheckboxWrapper = styled(b.Box)`
  position: relative;
  top: 1.25px;
`;
