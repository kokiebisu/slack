import * as React from 'react';

// Blocks
import * as b from 'styles/blocks';

// Styles
import {
  Wrapper,
  IconWrapper,
  Option,
} from 'components/ConfirmDigit/Options/index.styles';

// Svgs
import { Outlook, Gmail } from 'assets/svg/Logo';

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
