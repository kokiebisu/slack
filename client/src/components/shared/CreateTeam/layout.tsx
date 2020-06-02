import * as React from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks';
import { HeaderLogo } from '../../../assets/svg/Logo';

import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';

interface Props {}

export const CreateTeamLayout: any = () => {
  console.log('rendered');
  return (
    <Wrapper>
      <b.Flex>
        <Left pr={5}>
          <b.Flex alignItems='center' justifyContent='flex-end'>
            <LeftWrapper>
              <b.Box>
                <b.Text
                  fontFamily='SlackLato-Black'
                  fontSize={26}
                  color='#1D1C1D'>
                  What's the name of your company or team?
                </b.Text>
              </b.Box>
              <b.Box mt={4} mb={3} width={1}>
                <Input placeholder='Ex. Acme or Acme Marketing' />
              </b.Box>
              <b.Box width={1}>
                <NextButton>
                  <b.Text>Next</b.Text>
                </NextButton>
              </b.Box>
              <b.Box my={4}>
                <b.Text fontSize={12} fontFamily='SlackLato-Light'>
                  By continuing, you're agreeing to our Customer Terms of
                  Service, Privacy Policy, and Cookie Policy.
                </b.Text>
              </b.Box>
            </LeftWrapper>
          </b.Flex>
        </Left>
        <Right>sd</Right>
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  width: 100%;
  height: 100%;
`;

const Left = styled(b.Box)`
  width: 50%;
`;

const Right = styled(b.Box)`
  width: 50%;
  background-color: #f8f8f8;
`;

const LeftWrapper = styled(b.Box)`
  max-width: 400px;
`;

const Input = styled(b.Input)`
  width: 100%;
  border: 1px solid #868686;
  border-radius: 7px;
  padding: 15px 0px 15px 15px;
`;

const NextButton = styled(b.Button)`
  width: 100%;
  padding: 12px 0;
  background-color: #4a144b;
  border-radius: 4px;
  color: white;
  font-family: 'SlackLato-Bold';
  font-size: 18px;

  &:hover {
    background-color: #5c2c5d;
  }
`;
