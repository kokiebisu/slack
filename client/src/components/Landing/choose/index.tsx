import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../styles/blocks';

// Breakpoints
import { landing } from '../../../styles/sizes';

// Styles
import {
  Wrapper,
  SectionName,
  Buttons,
  ButtonWrapper,
  Button,
} from './choose.styles';

interface Props {}

export const Choose: React.FC<Props> = () => {
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
                  color='primary__light'
                  uppercase
                  fontSize={14}>
                  Try Slack
                </b.Text>
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button className='purple__light'>
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
