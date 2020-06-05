import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import * as b from '../styles/blocks';

import { LogoCenterLayout } from '../components/shared/LogoCenter/layout';

interface Props {}

export const GetStartedFind: React.FC<Props> = () => {
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

const Wrapper = styled(b.Box)`
  max-width: 768px;
  width: 100%;
`;

const EmailInput = styled(b.Input)`
  width: 370px;
  padding: 13px 0 13px 13px;
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

const CheckboxArea = styled(b.Box)`
  width: 350px;
`;

const CheckboxWrapper = styled(b.Box)`
  position: relative;
  top: 1.25px;
`;
