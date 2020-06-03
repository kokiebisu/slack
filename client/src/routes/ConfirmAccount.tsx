import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import * as b from '../styles/blocks';

import { LogoCenterLayout } from '../components/shared/LogoCenter/layout';

interface Props {}

export const ConfirmAccount: React.FC<Props> = () => {
  const history = useHistory();
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
              <b.Box>
                <b.Flex alignItems='center' flexDirection='column'>
                  <b.Box>
                    <Input
                      border='1px solid #868686'
                      borderRadius={3}
                      placeholder='name@work-email.com'
                    />
                  </b.Box>
                  <b.Box mt={3}>
                    <Input
                      type='password'
                      border='1px solid #868686'
                      borderRadius={3}
                      placeholder='password here...'
                    />
                  </b.Box>
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

const Wrapper = styled(b.Box)`
  max-width: 768px;
  width: 100%;
`;

const Input = styled(b.Input)`
  width: 370px;
  padding: 13px 0 13px 13px;
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
