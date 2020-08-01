import * as React from 'react';
import * as b from 'styles/blocks';

// Svgs
import { SmilePlus } from 'assets/svg/Reaction';

// Styles
import { IconWrapper } from 'components/Workspace/Content/Reaction/container.styles';

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
