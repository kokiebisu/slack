import * as React from 'react';
import * as b from '../../../../styles/blocks';

// Svgs
import { Lock } from '../../../../assets/svg';
import { ThinHashTag } from '../../../../assets/svg/HashTag';

// Styles
import { Name, IconWrapper } from './channel.styles';

interface Props {
  id: string;
  name: string;
  isPublic: boolean;
}

export const Channel: React.FC<Props> = ({ name, isPublic }) => {
  return (
    <b.Box py={2}>
      <b.Flex alignItems='center'>
        <IconWrapper className='tag' pr={2}>
          {isPublic ? <ThinHashTag /> : <Lock />}
        </IconWrapper>
        <Name>
          <b.Text>{name}</b.Text>
        </Name>
      </b.Flex>
    </b.Box>
  );
};
