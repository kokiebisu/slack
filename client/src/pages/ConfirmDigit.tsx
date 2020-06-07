import * as React from 'react';
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useVerifyUserMutation } from '../generated/graphql';
import { useHistory, useLocation } from 'react-router-dom';
import { LogoCenterLayout } from '../components/shared/LogoCenter/layout';

import * as b from '../styles/blocks';

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
  const [verify] = useVerifyUserMutation();

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
            <ErrorSpace>
              {error !== '' ? (
                <b.Flex justifyContent='center' alignItems='center'>
                  <b.Text>{error}</b.Text>
                </b.Flex>
              ) : null}
            </ErrorSpace>
            <OpenOptions>
              <b.Flex justifyContent='center'>
                <b.Box>
                  <b.Flex>
                    <b.Box>gmaicon</b.Box>
                    <b.Box>
                      <b.Text>Open Gmail</b.Text>
                    </b.Box>
                  </b.Flex>
                </b.Box>
                <b.Box>
                  <b.Flex>
                    <b.Box>outlicon</b.Box>
                    <b.Box>
                      <b.Text>Open Outlook</b.Text>
                    </b.Box>
                  </b.Flex>
                </b.Box>
              </b.Flex>
            </OpenOptions>
            <b.Box my={4}>
              <b.Flex justifyContent='center'>
                <b.Box>
                  <b.Text>Can't find your code? Check your spam folder!</b.Text>
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

const OneDigitInput = styled.input`
  width: 30px;
`;

const TextInput = styled.input`
  font-size: 56px;
  width: 80px;
  padding: 15px 0 15px 37px;
  border: 0.5px solid gray;

  &.added {
    padding: 15px 0 15px 23px;

    & .input_1 {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &.input_3 {
      border-top: 0.5px solid gray;
      border-left: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  &.input_1 {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.input_2 {
    border-top: 0.5px solid gray;
    border-left: none;
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
  }

  &.input_6 {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none;
  }
`;

const ErrorSpace = styled(b.Box)`
  margin: 15px 0;
  height: 60px;
`;

const OpenOptions = styled(b.Box)``;
