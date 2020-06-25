import * as React from 'react';
import { useParams, useHistory } from 'react-router';

// Blocks
import * as b from '../../../../styles/blocks';

// Svgs
import { Lock } from '../../../../assets/svg';
import { FatHashTag } from '../../../../assets/svg/HashTag';

// Styles
import { Wrapper, Name, IconWrapper } from './index.styles';

interface Props {
  id: string;
  name: string;
  isPublic: boolean;
}

export const Channel: React.FC<Props> = ({ id, name, isPublic }) => {
  const { teamId } = useParams();

  const history = useHistory();

  return (
    <Wrapper
      onClick={() => {
        history.push(`/client/${teamId}/channel/${id}`);
      }}>
      <b.Flex alignItems='center'>
        <IconWrapper className='tag' pr={2}>
          {isPublic ? <FatHashTag /> : <Lock />}
        </IconWrapper>
        <Name>
          <b.Text>{name}</b.Text>
        </Name>
      </b.Flex>
    </Wrapper>
  );
};
