import * as React from 'react';
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useVerifyUserMutation } from '../generated/graphql';
import { useHistory, useLocation } from 'react-router-dom';
import { LogoCenterLayout } from '../components/shared/LogoCenter/layout';

import * as b from '../styles/blocks';
import { Outlook, Gmail } from '../assets/svg/Logo';
import { Warning } from '../assets/svg';

export const ConfirmDigit = () => {
  const input_1: any = useRef(null);
  const input_2: any = useRef(null);
  const input_3: any = useRef(null);
  const input_4: any = useRef(null);
  const input_5: any = useRef(null);
  const input_6: any = useRef(null);
  const formRef = useRef(null);

  const history = useHistory();
  const [error, setError] = useState('');
  const [verify, { loading }] = useVerifyUserMutation();

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [fifth, setFifth] = useState('');
  const [sixth, setSixth] = useState('');

  const location: any = useLocation();

  useEffect(() => {
    if (first && second && third && fourth && fifth && sixth) {
      sendQuery();
    }
  }, [first, second, third, fourth, fifth, sixth]);

  const sendQuery = async () => {
    try {
      const newDigit = parseInt(
        `${first}${second}${third}${fourth}${fifth}${sixth}`,
        10
      );
      const response = await verify({
        variables: { digit: newDigit },
      });
      console.log('confirm repsonse', response);
      if (response && !response.data?.verifyUser.ok) {
        setError(response.data?.verifyUser.message!);
      }
      if (response && response.data?.verifyUser.ok) {
        history.push({
          pathname: '/create/teamname',
          state: { authenticated: true },
        });
      }
    } catch (err) {
      setError('something went awfully wrong');
    }
  };

  return (
    // <div>
    //   {location.state && <h1>we sent a digit to {location.state.email!}</h1>}
    //   <form
    //     onSubmit={async (e) => {
    //       e.preventDefault();
    //       try {
    //         const newDigit = parseInt(digit!, 10);
    //         const response = await verify({
    //           variables: { digit: newDigit },
    //         });
    //         console.log(response);

    //         if (response && response.data?.verifyUser.ok) {
    //           history.push({
    //             pathname: '/create/teamname',
    //             state: { authenticated: true },
    //           });
    //         }
    //       } catch (err) {
    //         setError('something went awfully wrong');
    //       }
    //     }}>
    //     <input
    //       placeholder='number'
    //       value={digit}
    //       onChange={(e) => setDigit(e.target.value)}
    //     />
    //     <button type='submit'>submit</button>
    //     {error !== '' ? <h1>{error}</h1> : null}
    //   </form>
    // </div>
    <LogoCenterLayout>
      <b.Box py={4}>
        <b.Flex flexDirection='column' alignItems='center'>
          <Wrapper>
            <form
              ref={formRef}
              onSubmit={() => {
                console.log(`${first}`);
              }}>
              <b.Box>
                <b.Box>
                  <b.Text
                    fontSize={48}
                    color='black__light'
                    fontFamily='Larsseit-Bold'
                    textAlign='center'>
                    Check your email for a code
                  </b.Text>
                </b.Box>
                <b.Box pt={2} pb={4}>
                  <b.Text
                    lineHeight={1.5}
                    textAlign='center'
                    color='gray'
                    fontFamily='SlackLato-Regular'
                    fontSize={20}>
                    We've sent a 6-digit code to{' '}
                    <b.Span>a01056715@gmail.com</b.Span>. The code expires
                    shortly, so please enter it soon.
                  </b.Text>
                </b.Box>

                <b.Box>
                  <b.Flex justifyContent='center'>
                    <b.Box>
                      <b.Flex>
                        <b.Box>
                          <TextInput
                            type='text'
                            className={
                              first !== '' ? `added input_1` : `input_1`
                            }
                            ref={input_1}
                            maxLength={1}
                            onChange={(e: any) => {
                              setFirst(e.target?.value);
                              input_2.current!.focus();
                            }}
                          />
                        </b.Box>
                        <b.Box>
                          <TextInput
                            className={
                              second !== '' ? `added input_2` : `input_2`
                            }
                            ref={input_2}
                            maxLength={1}
                            onChange={(e: any) => {
                              setSecond(e.target?.value);
                              input_3.current!.focus();
                            }}
                          />
                        </b.Box>
                        <b.Box>
                          <TextInput
                            className={
                              third !== '' ? `added input_3` : `input_3`
                            }
                            ref={input_3}
                            maxLength={1}
                            onChange={(e: any) => {
                              setThird(e.target?.value);
                              input_4.current!.focus();
                            }}
                          />
                        </b.Box>
                      </b.Flex>
                    </b.Box>
                    <b.Box mx={3}>
                      <b.Flex alignItems='center'>
                        <b.Box>
                          <b.Text fontFamily='SlackLato-Thin' fontSize={32}>
                            -
                          </b.Text>
                        </b.Box>
                      </b.Flex>
                    </b.Box>
                    <b.Box>
                      <b.Flex>
                        <b.Box>
                          <TextInput
                            className={
                              fourth !== '' ? `added input_4` : `input_4`
                            }
                            ref={input_4}
                            maxLength={1}
                            onChange={(e: any) => {
                              setFourth(e.target?.value);
                              input_5.current!.focus();
                            }}
                          />
                        </b.Box>
                        <b.Box>
                          <TextInput
                            className={
                              fifth !== '' ? `added input_5` : `input_5`
                            }
                            ref={input_5}
                            maxLength={1}
                            onChange={(e: any) => {
                              setFifth(e.target?.value);
                              input_6.current!.focus();
                            }}
                          />
                        </b.Box>
                        <b.Box>
                          <TextInput
                            className={
                              sixth !== '' ? `added input_6` : `input_6`
                            }
                            ref={input_6}
                            maxLength={1}
                            onChange={(e: any) => {
                              setSixth(e.target?.value);
                            }}
                          />
                        </b.Box>
                      </b.Flex>
                    </b.Box>
                  </b.Flex>
                </b.Box>
              </b.Box>
            </form>
            <ErrorSpace mt={2} mb={3}>
              {loading ? (
                <b.Flex justifyContent='center' alignItems='center'>
                  <b.Box>
                    <b.Flex justifyContent='center' alignItems='center'>
                      <b.Box mr={3}>
                        <b.Text
                          color='black'
                          fontSize={13}
                          fontFamily='SlackLato-Thin'>
                          Hold on...
                        </b.Text>
                      </b.Box>
                      <RotateContainer>
                        <b.Span
                          transition={spinTransition}
                          animate={{ rotate: 360 }}
                        />
                      </RotateContainer>
                    </b.Flex>
                  </b.Box>
                </b.Flex>
              ) : null}
              {error !== '' ? (
                <b.Flex justifyContent='center' alignItems='center'>
                  <ErrorSpaceWrapper>
                    <b.Flex justifyContent='center' alignItems='center'>
                      <IconWrapper className='warning' mr={3}>
                        <Warning />
                      </IconWrapper>
                      <b.Box>
                        <b.Text
                          color='black'
                          fontSize={13}
                          fontFamily='SlackLato-Thin'>
                          That code wasn't valid. Give it another go!
                        </b.Text>
                      </b.Box>
                    </b.Flex>
                  </ErrorSpaceWrapper>
                </b.Flex>
              ) : null}
            </ErrorSpace>
            <OpenOptions mt={5}>
              <b.Flex justifyContent='center'>
                <b.Box mr={4}>
                  <b.Flex>
                    <IconWrapper className='gmail' mr={2}>
                      <Gmail />
                    </IconWrapper>
                    <b.Box>
                      <b.Text fontFamily='SlackLato-Regular' fontSize={15}>
                        Open Gmail
                      </b.Text>
                    </b.Box>
                  </b.Flex>
                </b.Box>
                <b.Box>
                  <b.Flex>
                    <IconWrapper className='outlook' mr={2}>
                      <Outlook />
                    </IconWrapper>
                    <b.Box>
                      <b.Text fontFamily='SlackLato-Regular' fontSize={15}>
                        Open Outlook
                      </b.Text>
                    </b.Box>
                  </b.Flex>
                </b.Box>
              </b.Flex>
            </OpenOptions>
            <b.Box my={4}>
              <b.Flex justifyContent='center'>
                <b.Box>
                  <b.Text fontFamily='SlackLato-Thin' fontSize={13}>
                    Can't find your code? Check your spam folder!
                  </b.Text>
                </b.Box>
              </b.Flex>
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

const TextInput = styled.input`
  font-size: 56px;
  width: 80px;
  padding: 15px 0 15px 37px;
  border: 0.5px solid gray;
  color: ${({ theme }) => theme.colors.black};

  &:focus {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  &.added {
    padding: 15px 0 15px 23px;
  }

  &.input_1 {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.input_2 {
    border-top: 0.5px solid gray;
    border-left: none;

    &:focus {
      border-left: 0.5px solid gray;
    }
  }

  &.input_3 {
    border-top: 0.5px solid gray;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &.input_4 {
    border-top: 0.5px solid gray;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.input_5 {
    border-top: 0.5px solid gray;
    border-left: none;
    &:focus {
      border-left: 0.5px solid gray;
    }
  }

  &.input_6 {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none;
  }
`;

const ErrorSpace = styled(b.Box)`
  margin: 10px 0;
  height: 45px;
`;

const OpenOptions = styled(b.Box)`
  p {
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: underline;
    }
  }
`;

const IconWrapper = styled(b.Box)`
  position: relative;
  &.gmail {
    bottom: 2px;
    svg {
      width: 20px;
      height: 20px;
      path {
      }
    }
  }

  &.outlook {
    bottom: 1px;
    svg {
      width: 20px;
      height: 20px;
      path {
      }
    }
  }

  &.warning {
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.red};
      }

      rect {
        fill: ${({ theme }) => theme.colors.red};
      }
    }
  }
`;

const ErrorSpaceWrapper = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.pink__lighter};
  max-width: 520px;
  width: 100%;
  padding: 10px 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.pink__dark};
`;

const RotateContainer = styled(b.Box)`
  position: relative;
  width: 20px;
  height: 20px;

  span {
    display: block;
    width: 15px;
    height: 15px;
    border: 2px solid white;
    border-top: 2px solid ${({ theme }) => theme.colors.gray__light};
    border-radius: 50%;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
  }
`;

const spinTransition = {
  loop: Infinity,
  duration: 1,
  ease: 'linear',
};
