import React, { useState, useEffect, useRef } from 'react';
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
} from '../../../assets/svg/SidebarOptions';
import { Hashtag } from '../../../assets/svg/SidebarSections';

export const Option = ({ name, link }) => {
  const [clicked, setClicked] = useState(false);

  const displayingName = name.charAt(0).toUpperCase() + name.slice(1);
  const history = useHistory();

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setClicked(false);
          return;
        }
        setClicked(true);
      }

      document.addEventListener('mousedown', handleClick);
      return () => {
        document.removeEventListener('mousedown', handleClick);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <Wrapper
      ref={wrapperRef}
      className={clicked ? `clicked` : ``}
      onClick={() => {
        history.push(`/client/${link}`);
      }}>
      <b.Flex>
        <Icon style={{ top: 2 }}>{renderOption(name, clicked)}</Icon>
        <TextWrapper>
          <Title
            className={clicked ? `clicked` : ``}
            fontFamily='SlackLato-Light'
            fontSize={14}>
            {displayingName}
          </Title>
        </TextWrapper>
      </b.Flex>
    </Wrapper>
  );
};

const renderOption = (option, clicked) => {
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
          color={clicked ? 'white' : '#CFC3CF'}
        />
      );
    case 'drafts':
      return (
        <Drafts width={15} height={15} color={clicked ? 'white' : '#CFC3CF'} />
      );
    case 'saved items':
      return (
        <SavedItems
          width={15}
          height={15}
          color={clicked ? 'white' : '#CFC3CF'}
        />
      );
    case 'channel browser':
      return (
        <Hashtag width={15} height={15} color={clicked ? 'white' : '#CFC3CF'} />
      );
    case 'people':
      return (
        <People width={15} height={15} color={clicked ? 'white' : '#CFC3CF'} />
      );
    case 'apps':
      return (
        <Apps width={15} height={15} color={clicked ? 'white' : '#CFC3CF'} />
      );
    case 'files':
      return (
        <Files width={15} height={15} color={clicked ? 'white' : '#CFC3CF'} />
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
    background: #350d36;
  }

  &.clicked {
    background: #1264a3;
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
  color: #cfc3cf;

  &.clicked {
    color: white !important;
  }
`;
