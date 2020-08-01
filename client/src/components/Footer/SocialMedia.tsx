import * as React from 'react';

// Blocks
import * as b from 'global/blocks';

// Styles
import { IconWrapper } from 'styles/Footer/SocialMedia';

interface Props {
  type: string;
  component: React.ReactNode;
}

export const SocialMedia: React.FC<Props> = ({ type, component }) => {
  return (
    <b.Box mx={2}>
      <IconWrapper className={`socialmedia ${type}`}>{component}</IconWrapper>
    </b.Box>
  );
};
