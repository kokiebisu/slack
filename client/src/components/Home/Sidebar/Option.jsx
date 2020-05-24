import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import { Flex, Box, Text, Button } from '../../../styles/blocks';

import {
  Threads,
  MentionReaction,
  People,
  Drafts,
  SavedItems,
  Apps,
  Files,
} from '../../../assets/svg/SidebarOptions';
import { display } from 'styled-system';
import { Hashtag } from '../../../assets/svg/SidebarSections';

export const Option = ({ name, link }) => {
  const [hovered, setHovered] = useState(false);
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
      className={clicked ? `clicked` : hovered ? `hovered` : ``}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        history.push(`/client/${link}`);
      }}>
      <Flex>
        <Icon style={{ top: 1 }}>{renderOption(name, clicked)}</Icon>
        <TextWrapper>
          <Title
            className={clicked ? `clicked` : ``}
            fontFamily='Segoe'
            fontSize={15}>
            {displayingName}
          </Title>
        </TextWrapper>
      </Flex>
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

const Wrapper = styled(Button)`
  padding: 5px 15px;
  width: 100%;
  cursor: pointer;

  &.hovered {
    background: #350d36;
  }

  &.clicked {
    background: #1264a3;
  }
`;

const Icon = styled(Box)`
  margin-right: 8px;
`;

const TextWrapper = styled(Box)`
  position: relative;
  top: 2px;
`;

const Title = styled(Text)`
  color: #cfc3cf;

  &.clicked {
    color: white !important;
  }
`;