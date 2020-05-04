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
      <Overlay>
        <img
          height='100%'
          src='https://a.slack-edge.com/80588/spacesuit/source/images/backgrounds/bg-halftone-black-20p@2x.png'
        />
      </Overlay>
      <ContentWrapper>
        <Container>
          <b.Box>
            <b.Box mb={4}>
              <Title center color='white' fontFamily='CircularStd-Medium'>
                Choose a better way to work
              </Title>
            </b.Box>
            <b.Box>
              <b.Flex justifyContent='center' alignItems='center'>
                <b.Box>
                  <b.Flex>
                    <b.Box my={2} mr={2}>
                      <Button backgroundColor='white' color='#612069'>
                        <a href=''>Try Slack</a>
                      </Button>
                    </b.Box>
                    <b.Box my={2}>
                      <Button
                        backgroundColor='#612069'
                        color='white'
                        borderColor='white'>
                        <a href=''>Contact Sales</a>
                      </Button>
                    </b.Box>
                  </b.Flex>
                </b.Box>
              </b.Flex>
            </b.Box>
          </b.Box>
        </Container>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 400px;
`;

const ContentWrapper = styled(b.Box)`
  height: 400px;
  padding: 90px 0 90px 0;
  background-color: #612069;
`;

const Overlay = styled(b.Box)`
  position: absolute;
  z-index: 50;
  width: 100%;
  height: 400px;
`;

const Container = styled(b.Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  font-size: 14px;
  font-family: 'CircularStd-Medium';
  border-radius: 3px;
  letter-spacing: 1px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  padding: 20px;

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

  a {
    text-decoration: none;
    ${({ color }) =>
      color &&
      css`
        color: ${color};
      `}
  }

  @media ${landing.lg} {
    padding: 20px 40px;
  }
`;
