import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Blocks
import * as b from '../../../styles/blocks';

// Components
import { LogoCenterLayout } from '../../Shared/LogoCenter/layout';
import { Confirm } from '../confirm';

// Styles
import { Wrapper, EmailInput, ErrorBox, IconWrapper } from './index.styles';

// Graphql
import { useCheckEmailLazyQuery } from '../../../generated/graphql';

// Svg
import { Warning } from '../../../assets/svg';

interface Props {}

export const GetStartedFind: React.FC<Props> = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [check, { loading, data }] = useCheckEmailLazyQuery();

  return (
    <>
      {data?.checkEmail.ok ? (
        <Redirect to='/get-started/check' />
      ) : (
        <LogoCenterLayout>
          <b.Box py={4}>
            <b.Flex flexDirection='column' alignItems='center'>
              <Wrapper>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    check({ variables: { email } });
                  }}>
                  <b.Box>
                    <b.Box>
                      <b.Text
                        fontSize={48}
                        color='black__light'
                        fontFamily='Larsseit-Bold'
                        textAlign='center'>
                        Let’s find your team
                      </b.Text>
                    </b.Box>
                    <b.Box pt={2} pb={4}>
                      <b.Text
                        lineHeight={1.5}
                        textAlign='center'
                        color='gray'
                        fontFamily='SlackLato-Regular'
                        fontSize={20}>
                        Enter the email you usually collaborate with
                      </b.Text>
                    </b.Box>
                    <b.Box>
                      <b.Flex justifyContent='center'>
                        <EmailInput
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          border='1px solid gray'
                          borderRadius={3}
                          placeholder='name@work-email.com'
                        />
                      </b.Flex>
                    </b.Box>
                    <b.Box height={35} my={2}>
                      <b.Flex justifyContent='center'>
                        {data?.checkEmail.message ? (
                          <ErrorBox backgroundColor='pink__lighter' width={1}>
                            <b.Flex alignItems='center'>
                              <IconWrapper className='warning' mr={2}>
                                <Warning />
                              </IconWrapper>
                              <b.Box py={2}>
                                <b.Text
                                  fontFamily='SlackLato-Regular'
                                  fontSize={14}>
                                  {data?.checkEmail.message}
                                </b.Text>
                              </b.Box>
                            </b.Flex>
                          </ErrorBox>
                        ) : null}
                      </b.Flex>
                    </b.Box>
                    <b.Box>
                      <Confirm loading={loading} />
                    </b.Box>
                  </b.Box>
                </form>
              </Wrapper>
            </b.Flex>
          </b.Box>
        </LogoCenterLayout>
      )}
    </>
  );
};
