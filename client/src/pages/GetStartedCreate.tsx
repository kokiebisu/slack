import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as b from '../styles/blocks';

import { LogoCenterLayout } from '../components/shared/LogoCenter/layout';

import { useRegisterMutation } from '../generated/graphql';
import { Warning } from '../assets/svg';

import {
  textValidation,
  weakRegex,
  mediumRegex,
  strongRegex,
  veryStrongRegex,
} from '../util/passwordUtil';

interface Props {}

export const GetStartedCreate: React.FC<Props> = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);

  const [register, { loading }] = useRegisterMutation();
  // const [login] = useLoginMutation();

  const [fullname, setFullname] = useState('');
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
                  color='black__light'
                  fontFamily='Larsseit-Bold'
                  textAlign='center'>
                  First, create your account
                </b.Text>
              </b.Box>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

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
                }}>
                <b.Box mt={3}>
                  <b.Flex alignItems='center' flexDirection='column'>
                    <b.Box my={2}>
                      <b.Box my={2}>
                        <b.Text fontFamily='SlackLato-Bold'>Name</b.Text>
                      </b.Box>
                      <Input
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        border='1px solid gray'
                        borderRadius={3}
                        placeholder='Your full name'
                      />
                    </b.Box>
                    <b.Box my={2}>
                      <b.Box my={2}>
                        <b.Text fontFamily='SlackLato-Bold'>
                          Email address
                        </b.Text>
                      </b.Box>
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        border='1px solid gray'
                        borderRadius={3}
                        placeholder='name@work-email.com'
                      />
                    </b.Box>
                    <b.Box my={2}>
                      <b.Box my={2}>
                        <b.Text fontFamily='SlackLato-Bold'>Password</b.Text>
                      </b.Box>
                      <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        border='1px solid gray'
                        borderRadius={3}
                        placeholder='6 characters or more'
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
                <b.Box mb={1}>
                  <b.Flex justifyContent='center'>
                    <PasswordValidationWrapper>
                      <PasswordValidation
                        className={password.match(weakRegex) ? 'cleared' : ''}
                      />
                      <PasswordValidation
                        className={password.match(mediumRegex) ? 'cleared' : ''}
                      />
                      <PasswordValidation
                        className={password.match(strongRegex) ? 'cleared' : ''}
                      />
                      <PasswordValidation
                        className={
                          password.match(veryStrongRegex) ? 'cleared' : ''
                        }
                      />
                    </PasswordValidationWrapper>
                  </b.Flex>
                </b.Box>
                <b.Box mb={3} height={20}>
                  {password.length > 0 && (
                    <b.Flex justifyContent='center'>
                      <ValidationTextWrapper>
                        <b.Flex justifyContent='flex-end'>
                          <b.Box>
                            {textValidation(password) ? (
                              <b.Text className='weak'>
                                {textValidation(password)}
                              </b.Text>
                            ) : null}
                          </b.Box>
                        </b.Flex>
                      </ValidationTextWrapper>
                    </b.Flex>
                  )}
                </b.Box>
                <b.Box>
                  <b.Box>
                    <b.Flex justifyContent='center'>
                      <ConfirmButton
                        className='confirmbutton'
                        type='submit'
                        disabled={loading}>
                        <b.Flex justifyContent='center' alignItems='center'>
                          <b.Box
                            variants={confirmVariants}
                            animate={loading ? 'loading' : 'loaded'}>
                            <b.Text color='white' fontFamily='SlackLato-Bold'>
                              Create Account
                            </b.Text>
                          </b.Box>
                          {loading ? (
                            <DotWrapper
                              animate={{ opacity: 1 }}
                              initial={{ opacity: 0 }}>
                              <DotContainer
                                variants={DotContainterVariants}
                                initial='start'
                                animate='end'>
                                <Dot
                                  variants={DotVariants}
                                  transition={DotTransition}
                                />
                                <Dot
                                  variants={DotVariants}
                                  transition={DotTransition}
                                />
                                <Dot
                                  variants={DotVariants}
                                  transition={DotTransition}
                                />
                              </DotContainer>
                            </DotWrapper>
                          ) : null}
                        </b.Flex>
                      </ConfirmButton>
                    </b.Flex>
                  </b.Box>
                  <b.Box>
                    <b.Flex justifyContent='center'>
                      <PolicyWrapper>
                        <b.Box mt={3} mb={4}>
                          <b.Flex>
                            <b.Box>
                              <input type='checkbox' />
                            </b.Box>
                            <b.Box ml={3}>
                              <b.Text fontSize={15}>
                                It's OK to email me about Slack.
                              </b.Text>
                            </b.Box>
                          </b.Flex>
                        </b.Box>
                        <b.Box>
                          <b.Text fontFamily='SlackLato-Light' fontSize={13}>
                            By continuing, you're agreeing to our{' '}
                            <span>Customer Terms of Service</span>,{' '}
                            <span>Privacy Policy</span>, and{' '}
                            <span>Cookie Policy</span>.
                          </b.Text>
                        </b.Box>
                      </PolicyWrapper>
                    </b.Flex>
                  </b.Box>
                </b.Box>
              </form>
            </b.Box>
          </Wrapper>
        </b.Flex>
      </b.Box>
    </LogoCenterLayout>
  );
};
// Animations
const DotContainterVariants = {
  start: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const DotVariants = {
  start: {
    y: 0,
  },
  end: {
    y: 5,
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
};

const DotWrapper = styled(b.Box)``;

const confirmVariants = {
  loading: {
    x: -10,
  },
  loaded: {
    x: 0,
  },
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

const DotContainer = styled(b.Box)`
  position: relative;
  bottom: 2px;
  display: flex;
  align-items: center;
`;

const Dot = styled(b.Box)`
  background-color: white;
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin: 0 2px;
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

const PasswordValidationWrapper = styled(b.Box)`
  width: 370px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5px;
`;

const PasswordValidation = styled(b.Box)`
  height: 4px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.gray__lighter};
  &.cleared {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

const PolicyWrapper = styled(b.Box)`
  width: 370px;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const ValidationTextWrapper = styled(b.Box)`
  width: 370px;
`;
