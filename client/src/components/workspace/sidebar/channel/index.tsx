import * as React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

// Blocks
import * as b from '../../../../styles/blocks';

// Svgs
import { Lock } from '../../../../assets/svg';
import { FatHashTag } from '../../../../assets/svg/HashTag';

// Styles
import { Name, IconWrapper } from './channel.styles';
import { useParams, useHistory } from 'react-router';
import { useRef } from 'react';

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

export const Wrapper = styled(b.Button)`
  padding: 5px 0px 5px 23px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary__dark};
  }

  &:focus {
    background: ${({ theme }) => theme.colors.blue__light};
    outline: 0;

    p {
      color: white;
    }

    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;
