import * as React from 'react';
import { useState } from 'react';

import * as b from '../../../styles/blocks';

import { LogoCenterLayout } from '../../shared/LogoCenter/layout';

// Styles
import { Wrapper, EmailInput, ConfirmButton } from './layout.styles';
import { useMyTeamsQuery } from '../../../generated/graphql';

interface Props {}

export const GetStartedFind: React.FC<Props> = () => {
  const [email, setEmail] = useState('');

  return (
    <LogoCenterLayout>
      <b.Box py={4}>
        <b.Flex flexDirection='column' alignItems='center'>
          <Wrapper>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('email', email);
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
                <b.Box my={3}>
                  <b.Flex justifyContent='center'>
                    <ConfirmButton>
                      <b.Text color='white' fontFamily='SlackLato-Bold'>
                        Confirm
                      </b.Text>
                    </ConfirmButton>
                  </b.Flex>
                </b.Box>
              </b.Box>
            </form>
          </Wrapper>
        </b.Flex>
      </b.Box>
    </LogoCenterLayout>
  );
};
