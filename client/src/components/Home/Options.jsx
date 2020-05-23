import React, { useState } from 'react';
import styled from 'styled-components';

import { Box } from '../../styles/blocks';
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
} from '../../assets/svg/SidebarOptions';

export const Options = () => {
  return (
    <OptionsWrapper>
      <Container>
        <Option name='Threads'>
          <Threads width={15} height={15} color='#A0A0A4' />
        </Option>
        <Option name='Mention & reaction'>
          <MentionReaction width={15} height={15} color='#A0A0A4' />
        </Option>
        <Option name='Drafts'>
          <Drafts width={15} height={15} color='#A0A0A4' />
        </Option>
        <Option name='Saved items'>
          <SavedItems width={15} height={15} color='#A0A0A4' />
        </Option>
        <Option name='People'>
          <People width={15} height={15} color='#A0A0A4' />
        </Option>
        <Option name='Apps'>
          <Apps width={15} height={15} color='#A0A0A4' />
        </Option>
        <Option name='Files'>
          <Files width={15} height={15} color='#A0A0A4' />
        </Option>
        <Option name='Show less'>
          <ShowLess />
        </Option>
      </Container>
    </OptionsWrapper>
  );
};

const OptionsWrapper = styled(Box)`
  border-top: 1.3px solid #532653;
`;

const Container = styled(Box)`
  margin: 10px 15px;
`;
