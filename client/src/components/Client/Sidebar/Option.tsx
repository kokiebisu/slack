import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import * as b from '../../../styles/blocks';

import {
  Threads,
  MentionReaction,
  People,
  Drafts,
  SavedItems,
  Apps,
  Files,
} from '../../../assets/svg';
import { ThinHashTag } from '../../../assets/svg/HashTag';

interface Props {
  name: string;
  link: string;
}

export const Option: React.FC<Props> = ({ name, link }) => {
  const [clicked, setClicked] = useState(false);
  const displayingName = name.charAt(0).toUpperCase() + name.slice(1);
  const history = useHistory();

  return (
    <Wrapper
      className={clicked ? 'clicked' : ''}
      onClick={() => {
        history.push(`/client/${link}`);
      }}>
      <b.Flex>
        <Icon style={{ top: 2 }}>{renderOption(name, clicked)}</Icon>
        <TextWrapper>
          <Title
            className={clicked ? 'clicked' : ''}
            fontFamily='SlackLato-Light'
            fontSize={14}>
            {displayingName}
          </Title>
        </TextWrapper>
      </b.Flex>
    </Wrapper>
  );
};

const renderOption = (option: string, clicked: boolean) => {
  switch (option) {
    case 'threads':
      return (
        <Threads width={15} height={15} color={clicked ? 'white' : '#CFC3CF'} />
      );
    case 'mentions & reactions':
      return (
        <MentionReaction
          width={15}
          height={15}
          color={clicked ? 'white' : 'pink__lighter'}
        />
      );
    case 'drafts':
      return (
        <Drafts
          width={15}
          height={15}
          color={clicked ? 'white' : 'pink__lighter'}
        />
      );
    case 'saved items':
      return (
        <SavedItems
          width={15}
          height={15}
          color={clicked ? 'white' : 'pink__lighter'}
        />
      );
    case 'channel browser':
      return (
        <ThinHashTag
          width={15}
          height={15}
          color={clicked ? 'white' : 'pink__lighter'}
        />
      );
    case 'people':
      return (
        <People
          width={15}
          height={15}
          color={clicked ? 'white' : 'pink__lighter'}
        />
      );
    case 'apps':
      return (
        <Apps
          width={15}
          height={15}
          color={clicked ? 'white' : 'pink__lighter'}
        />
      );
    case 'files':
      return (
        <Files
          width={15}
          height={15}
          color={clicked ? 'white' : 'pink__lighter'}
        />
      );
    default:
      return;
  }
};

const Wrapper = styled(b.Button)`
  padding: 5px 15px;
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
  }
`;

const Icon = styled(b.Box)`
  margin-right: 8px;
`;

const TextWrapper = styled(b.Box)`
  position: relative;
  top: 2px;
`;

const Title = styled(b.Text)`
  color: ${({ theme }) => theme.colors.pink__lighter};
`;
