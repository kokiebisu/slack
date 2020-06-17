import * as React from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Svgs
import { Wrapper, IconWrapper, Status } from './index.styles';

export const Message = () => {
  return (
    <Wrapper py={2}>
      <b.Flex alignItems='center'>
        <IconWrapper className='status' pr={2}>
          <Status />
        </IconWrapper>
        <b.Box style={{ top: 3 }}>
          <b.Text
            fontFamily='SlackLato-Light'
            color='pink__lighter'
            fontSize={15}>
            ken
          </b.Text>
        </b.Box>
      </b.Flex>
    </Wrapper>
  );
};
