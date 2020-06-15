import * as React from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Components
import { Option } from '.';

// Styles
import {
  Wrapper,
  ChangeRegionButton,
  IconWrapper,
  ArrowWrapper,
  Link,
} from './container.styles';

// Svgs
import { Globe } from '../../../../assets/svg';
import { BottomArrow } from '../../../../assets/svg/Arrows';

export const Options = () => {
  const options = [
    { name: 'Status', url: '/' },
    { name: 'Privacy & Terms', url: '/' },
    { name: 'Contact Us', url: '/' },
  ];
  return (
    <Wrapper>
      <b.Flex alignItems='center'>
        <b.Flex>
          {options.map((option) => {
            return <Option {...option} />;
          })}
        </b.Flex>
        <ChangeRegionButton>
          <b.Flex alignItems='center'>
            <IconWrapper className='globe' mr={1}>
              <Globe />
            </IconWrapper>
            <b.Text>Change Region</b.Text>
            <b.Box ml={2}>
              <IconWrapper className='bottom__arrow'>
                <BottomArrow />
              </IconWrapper>
            </b.Box>
          </b.Flex>
        </ChangeRegionButton>
      </b.Flex>
    </Wrapper>
  );
};