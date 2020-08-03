import * as React from 'react';
import * as b from 'global/blocks';

// Svgs
import { SmilePlus } from 'assets/svg';

// Styles
import { IconWrapper } from 'styles/Workspace/Content/Reactions';

// Components
import { Reaction } from 'components/Workspace/Content/Reaction';

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
