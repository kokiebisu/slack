import * as React from 'react';
import styled from 'styled-components';

import * as b from '../styles/blocks';

import { LogoCenterLayout } from '../components/shared/LogoCenter/layout';

interface Props {}

export const GetStartedFind: React.FC<Props> = () => {
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
          </Wrapper>
        </b.Flex>
      </b.Box>
    </LogoCenterLayout>
  );
};
