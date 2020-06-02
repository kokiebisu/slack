import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import * as b from '../styles/blocks';

import { LogoCenterHeader } from '../components/shared/LogoCenter/layout';

interface Props {}

export const CreateTeam: React.FC<Props> = () => {
  const [team, setTeam] = useState('');

  return (
    <LogoCenterHeader>
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
                  First, enter your email
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
                <b.Flex justifyContent='center'>
                  <EmailInput
                    border='1px solid #868686'
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
              <b.Box>
                <b.Flex justifyContent='center'>
                  <CheckboxArea>
                    <b.Flex>
                      <CheckboxWrapper mr={3}>
                        <input type='checkbox' />
                      </CheckboxWrapper>
                      <b.Box>
                        <b.Text>
                          It’s okay to send me emails about Slack.
                        </b.Text>
                      </b.Box>
                    </b.Flex>
                  </CheckboxArea>
                </b.Flex>
              </b.Box>
            </b.Box>
          </Wrapper>
        </b.Flex>
      </b.Box>
    </LogoCenterHeader>
  );
};

const Wrapper = styled(b.Box)`
  max-width: 768px;
  width: 100%;
`;

const EmailInput = styled(b.Input)`
  width: 350px;
  padding: 10px 0 10px 10px;
`;

const ConfirmButton = styled(b.Button)`
  width: 350px;
  border-radius: 5px;
  padding: 13px 0;
  text-align: center;
  background-color: #4a144b;
`;

const CheckboxArea = styled(b.Box)`
  width: 350px;
`;

const CheckboxWrapper = styled(b.Box)`
  position: relative;
  top: 1.25px;
`;
