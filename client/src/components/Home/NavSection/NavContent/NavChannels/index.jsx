import React from 'react';

import { Box, Text, Flex } from '../../../../Blocks';

import styled from 'styled-components';

import { ChannelSection } from './ChannelSection';

export const NavChannels = () => {
  return (
    <Wrapper>
      <ChannelSection title='Channel' subtitle='Add Channel' />
      <ChannelSection title='Direct Message' subtitle='Invite Member' />
      <ChannelSection title='App' subtitle='' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 0;
`;
