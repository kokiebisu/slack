import * as React from 'react';
import * as b from 'global/blocks';
import { IconWrapper } from 'components/shared/components/Options/index.styles';
import { Info } from 'assets/svg';

export const Options = () => {
  return (
    <b.Box>
      <b.Flex alignItems='center'>
        <IconWrapper className='sideoption' mr={2}>
          <Info />
        </IconWrapper>
        <b.Box>
          <b.Text fontSize={14} fontFamily='SlackLato-Regular'>
            Details
          </b.Text>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};
