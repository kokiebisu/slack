import React, { useState } from 'react';
import styled from 'styled-components';

import { Box } from '../../../styles/blocks';
import { Option } from './Option';

import {
  Threads,
  MentionReaction,
  People,
  Drafts,
  SavedItems,
  Apps,
  Files,
  ShowLess,
} from '../../../assets/svg/SidebarOptions';

export const Options = () => {
  const defaultState = {
    threads: false,
    mention: false,
    drafts: false,
    saved: false,
    people: false,
    app: false,
    files: false,
  };

  const [selected, setSelected] = useState(defaultState);

  const onSelect = (select) => {
    setSelected(defaultState);
    setSelected({
      ...selected,
      [select]: true,
    });
  };

  return (
    <OptionsWrapper>
      <Container>
        <Option name='threads'>
          <Threads width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='mention & reaction'>
          <MentionReaction width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='drafts'>
          <Drafts width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='saved items' select={onSelect}>
          <SavedItems width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='people' select={onSelect}>
          <People width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='apps' select={onSelect}>
          <Apps width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='files' select={onSelect}>
          <Files width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='show less'>
          <ShowLess width={15} height={15} color='#CFC3CF' />
        </Option>
      </Container>
    </OptionsWrapper>
  );
};

const OptionsWrapper = styled(Box)`
  position: relative;
  margin: 5px 0;
  padding: 5px 0;
`;

const Container = styled(Box)``;
