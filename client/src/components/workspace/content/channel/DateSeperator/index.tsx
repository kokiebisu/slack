import * as React from 'react';

// Blocks
import * as b from '../../../../../styles/blocks';

// Components
import { Wrapper, Date, IconWrapper } from './index.styles';
import { BottomArrow } from '../../../../../assets/svg/Arrows';

// Svg

export const DateSeperator = () => {
  return (
    <Wrapper>
      <b.Box className='divider' />
      <b.Box className='date_modal'>
        <b.Box>
          <b.Flex alignItems='center'>
            <Date mr={2}>
              <b.Text>Friday, June 5th</b.Text>
            </Date>
            <IconWrapper className='bottom_arrow'>
              <BottomArrow />
            </IconWrapper>
          </b.Flex>
        </b.Box>
      </b.Box>
    </Wrapper>
  );
};
