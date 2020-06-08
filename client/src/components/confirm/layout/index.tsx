import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// Graphql
import { useVerifyUserMutation } from '../../../generated/graphql';

// Components
import { LogoCenterLayout } from '../../shared/LogoCenter/layout';
import { Options } from '../options';
import { Dialog } from '../dialog';

// Blocks
import * as b from '../../../styles/blocks';

// Styles
import {
  Wrapper,
  TextInput,
  CheckNotice,
  Title,
  Description,
} from './layout.styles';

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
  });

  const sendQuery = async () => {
    try {
      const newDigit = parseInt(
        `${first}${second}${third}${fourth}${fifth}${sixth}`,
        10
      );
      const response = await verify({
        variables: { digit: newDigit },
      });

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
                <Title>
                  <b.Text>Check your email for a code</b.Text>
                </Title>
                <Description pt={2} pb={4}>
                  <b.Text>
                    We've sent a 6-digit code to
                    <b.Span>{location.state.email}</b.Span>. The code expires
                    shortly, so please enter it soon.
                  </b.Text>
                </Description>

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
            <Dialog loading={loading} error={error} />
            <Options />
            <b.Box my={4}>
              <b.Flex justifyContent='center'>
                <CheckNotice>
                  <b.Text>Can't find your code? Check your spam folder!</b.Text>
                </CheckNotice>
              </b.Flex>
            </b.Box>
          </Wrapper>
        </b.Flex>
      </b.Box>
    </LogoCenterLayout>
  );
};
