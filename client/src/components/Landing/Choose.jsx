import React from 'react';
import styled from 'styled-components';
import * as b from '../../styles/blocks';

// Sizes
import { landing } from '../../styles/sizes';

export const Choose = () => {
  return (
    <Wrapper>
      <b.Container>
        <b.Box mb={4}>
          <SectionName fontFamily='Larsseit-Bold' center color='white'>
            Choose a better way to work
          </SectionName>
        </b.Box>
        <b.Box>
          <Buttons justifyContent='center' alignItems='center'>
            <ButtonWrapper>
              <Button className='white'>
                <b.Text
                  fontFamily='CircularPro-Bold'
                  color='#611F69'
                  uppercase
                  fontSize={14}>
                  Try Slack
                </b.Text>
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button className='purple'>
                <b.Text
                  fontFamily='CircularPro-Bold'
                  color='white'
                  fontSize={14}
                  uppercase>
                  Contact Sales
                </b.Text>
              </Button>
            </ButtonWrapper>
          </Buttons>
        </b.Box>
      </b.Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 110px 0;
  background-color: #612069;
`;

const Buttons = styled(b.Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${landing.mmd} {
    flex-direction: row;
  }
`;

const ButtonWrapper = styled(b.Box)`
  margin-right: 0;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${landing.mmd} {
    margin-bottom: 0;
    display: inline-block;
    margin-right: 5px;
    width: auto;
  }
`;

const Button = styled(b.Button)`
  text-align: center;
  padding: 20px 35px;
  border-radius: 5px;
  width: 85%;

  @media ${landing.sm} {
    width: 80%;
  }

  @media ${landing.md} {
    width: 65%;
  }

  @media ${landing.mmd} {
    display: flex;
    width: auto;
  }

  &.white {
    background-color: white;
    border: 1px solid #612069;

    &:hover {
      padding: 19px 34px;
      border: 2px solid #611f69;
    }
  }

  &.purple {
    background-color: #612069;
    border: 1px solid white;

    &:hover {
      padding: 19px 34px;
      border: 2px solid white;
    }
  }
`;

const SectionName = styled(b.Text)`
  font-size: 6vw;

  @media ${landing.sm} {
    font-size: 5.5vw;
  }

  @media ${landing.md} {
    font-size: 4.5vw;
  }
`;
