import * as React from 'react';
import * as b from '../../../styles/blocks';

import { Wrapper, IconWrapper, Option } from './index.styles';

import { Outlook, Gmail } from '../../../assets/svg/Logo';

export const Options = () => {
  return (
    <Wrapper mt={5}>
      <b.Flex justifyContent='center'>
        <Option mr={4}>
          <b.Flex>
            <IconWrapper className='gmail' mr={2}>
              <Gmail />
            </IconWrapper>
            <b.Box className='option'>
              <b.Text>Open Gmail</b.Text>
            </b.Box>
          </b.Flex>
        </Option>
        <Option>
          <b.Flex>
            <IconWrapper className='outlook' mr={2}>
              <Outlook />
            </IconWrapper>
            <b.Box className='option'>
              <b.Text>Open Outlook</b.Text>
            </b.Box>
          </b.Flex>
        </Option>
      </b.Flex>
    </Wrapper>
  );
};