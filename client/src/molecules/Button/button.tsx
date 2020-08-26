import React from 'react';
import { Button, Box, Text, Icon } from 'atoms';
import styled from 'styled-components';
import { size } from 'global/sizes';

interface Props {
  text: string;
}

export const Wrapper = styled(Button)`
  display: none;
  padding: 13px 15px;
  text-transform: uppercase;
  font-size: 14px;
  /* color: ${({ theme }) => theme.colors.white}; */
  color: red;
  border: none;
  font-family: 'CircularPro-Bold';
  border-radius: 3px;
  letter-spacing: 1px;
  cursor: pointer;
/* 
  @media ${size.lg} {
    display: block;
  } */
`;

export default () => {
  return (
    <Wrapper onPress={() => console.log('hello')}>
      <Box>
        <Text>Launch Slack</Text>
        <Icon label='BottomArrow' />
      </Box>
    </Wrapper>
  );
};
