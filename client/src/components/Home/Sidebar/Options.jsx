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
  return (
    <OptionsWrapper>
      <Container>
        <Option name='Threads'>
          <Threads width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='Mention & reaction'>
          <MentionReaction width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='Drafts'>
          <Drafts width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='Saved items'>
          <SavedItems width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='People'>
          <People width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='Apps'>
          <Apps width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='Files'>
          <Files width={15} height={15} color='#CFC3CF' />
        </Option>
        <Option name='Show less' hoverLetter>
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
