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
        <IconWrapper>{renderOption(name, clicked)}</IconWrapper>
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
      return <Threads />;
    case 'mentions & reactions':
      return <MentionReaction />;
    case 'drafts':
      return <Drafts />;
    case 'saved items':
      return <SavedItems />;
    case 'channel browser':
      return <ThinHashTag />;
    case 'people':
      return <People />;
    case 'apps':
      return <Apps />;
    case 'files':
      return <Files />;
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

    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

const IconWrapper = styled(b.Box)`
  position: relative;
  top: 2px;
  margin-right: 8px;

  svg {
    width: 15px;
    height: 15px;

    path {
      fill: ${({ theme }) => theme.colors.pink__lighter};
    }
  }
`;

const TextWrapper = styled(b.Box)`
  position: relative;
  top: 2px;
`;

const Title = styled(b.Text)`
  color: ${({ theme }) => theme.colors.pink__lighter};
`;
