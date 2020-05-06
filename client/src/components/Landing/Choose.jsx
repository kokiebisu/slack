import React from 'react';
import styled, { css } from 'styled-components';
import * as b from '../../styles/blocks';

// Components
import { Title } from './Landing.styles';

// Sizes
import { landing } from '../../styles/sizes';

export const Choose = () => {
  return (
    <Wrapper>
      <b.Container>
        <b.Box mb={4}>
          <b.Text
            fontFamily='CircularStd-Medium'
            fontSize={48}
            center
            color='white'>
            Choose a better way to work
          </b.Text>
        </b.Box>
        <b.Flex justifyContent='center'>
          <b.Flex alignItems='center'>
            <b.Box mr={2}>
              <Button uppercase backgroundColor='white' color='#612069'>
                Try Slack
              </Button>
            </b.Box>
            <Button uppercase borderColor='white' color='white'>
              Contact Sales
            </Button>
          </b.Flex>
        </b.Flex>
      </b.Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 110px 0;
  background-color: #612069;
`;

const ContentWrapper = styled(b.Box)`
  display: block;
`;

const Buttons = styled(b.Flex)`
  display: block;

  @media ${landing.lg} {
    display: flex;
  }
`;

const Button = styled(b.Anchor)`
  font-size: 14px;
  font-family: 'CircularStd-Medium';
  border-radius: 3px;
  letter-spacing: 1px;
  text-align: center;
  padding: 20px 40px;

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 1.5px solid ${borderColor};
    `}

  @media ${landing.lg} {
    padding: 20px 40px;
    height: 100%;
  }
`;
