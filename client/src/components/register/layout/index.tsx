import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as b from '../../../styles/blocks';

import { LogoCenterLayout } from '../../shared/LogoCenter/layout';

import { useRegisterMutation } from '../../../generated/graphql';
import { Warning, CheckCircle } from '../../../assets/svg';

import {
  textValidation,
  weakRegex,
  mediumRegex,
  strongRegex,
  veryStrongRegex,
  fullNameRegex,
  emailRegex,
} from '../../../util/passwordUtil';

import {
  Wrapper,
  InputWrapper,
  Input,
  IconWrapper,
  PasswordValidationWrapper,
  PasswordValidation,
  ValidationTextWrapper,
  ErrorBox,
  ConfirmButton,
  DotWrapper,
  DotContainer,
  Dot,
  PolicyWrapper,
  confirmVariants,
  DotContainterVariants,
  DotVariants,
  DotTransition,
} from './layout.styles';

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
                    displayError(
                      'The password is not 6 characters! Give it another try!'
                    );
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
                }}>
                <b.Box mt={3}>
                  <b.Flex alignItems='center' flexDirection='column'>
                    <b.Box my={2}>
                      <b.Box my={2}>
                        <b.Text fontFamily='SlackLato-Bold'>Name</b.Text>
                      </b.Box>
                      <InputWrapper>
                        <Input
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                          border='1px solid gray'
                          borderRadius={3}
                          placeholder='Your full name'
                        />
                        {fullname && fullname.match(fullNameRegex) ? (
                          <IconWrapper className='checkcircle'>
                            <CheckCircle />
                          </IconWrapper>
                        ) : null}
                      </InputWrapper>
                    </b.Box>
                    <b.Box my={2}>
                      <b.Box my={2}>
                        <b.Text fontFamily='SlackLato-Bold'>
                          Email address
                        </b.Text>
                      </b.Box>
                      <InputWrapper>
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          border='1px solid gray'
                          borderRadius={3}
                          placeholder='name@work-email.com'
                        />
                        {email ? (
                          <IconWrapper className='checkcircle'>
                            <CheckCircle />
                          </IconWrapper>
                        ) : null}
                      </InputWrapper>
                    </b.Box>
                    <b.Box my={2}>
                      <b.Box my={2}>
                        <b.Text fontFamily='SlackLato-Bold'>Password</b.Text>
                      </b.Box>
                      <InputWrapper>
                        <Input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          border='1px solid gray'
                          borderRadius={3}
                          placeholder='6 characters or more'
                        />
                        {password.match(weakRegex) ? (
                          <IconWrapper className='checkcircle'>
                            <CheckCircle />
                          </IconWrapper>
                        ) : null}
                      </InputWrapper>
                    </b.Box>
                  </b.Flex>
                </b.Box>

                <b.Box>
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

                <b.Box mb={1} height={15}>
                  {password.length > 0 && (
                    <b.Flex justifyContent='center'>
                      <ValidationTextWrapper mt={1}>
                        <b.Flex justifyContent='flex-end'>
                          <b.Box>
                            {textValidation(password) ? (
                              <b.Text
                                fontFamily='SlackLato-Regular'
                                fontSize={14}
                                className='weak'>
                                {textValidation(password)}
                              </b.Text>
                            ) : null}
                          </b.Box>
                        </b.Flex>
                      </ValidationTextWrapper>
                    </b.Flex>
                  )}
                </b.Box>

                <b.Box height={35} my={2}>
                  <b.Flex justifyContent='center'>
                    {error && (
                      <ErrorBox backgroundColor='pink__lighter' width={1}>
                        <b.Flex alignItems='center'>
                          <IconWrapper className='warning' mr={2}>
                            <Warning />
                          </IconWrapper>
                          <b.Box py={2}>
                            <b.Text
                              fontFamily='SlackLato-Regular'
                              fontSize={14}>
                              {error}
                            </b.Text>
                          </b.Box>
                        </b.Flex>
                      </ErrorBox>
                    )}
                  </b.Flex>
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
