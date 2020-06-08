import * as React from 'react';

// Svgs
import { SmilePlus } from '../../../../assets/svg/Reaction';

// Styles
import { IconWrapper } from './container.styles';

// Components
import { Reaction } from '.';

interface Props {}

export const Reactions: React.FC<Props> = () => {
  return (
    <b.Box>
      <b.Flex>
        <Reaction />
        <IconWrapper>
          <SmilePlus />
        </IconWrapper>
      </b.Flex>
    </b.Box>
  );
};
