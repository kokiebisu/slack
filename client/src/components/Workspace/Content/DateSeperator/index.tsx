import * as React from 'react';

// Blocks
import * as b from 'styles/blocks';

// Components
import {
  Wrapper,
  Date,
  IconWrapper,
} from 'components/Workspace/Content/DateSeperator/index.styles';
import { BottomArrow } from 'assets/svg/Arrows';

interface Props {
  date: string;
}

export const DateSeperator: React.FC<Props> = ({ date }) => {
  return (
    <Wrapper>
      <b.Box className='divider' />
      <b.Box className='date_modal'>
        <b.Box>
          <b.Flex alignItems='center'>
            <Date mr={2}>
              <b.Text>{date}</b.Text>
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
