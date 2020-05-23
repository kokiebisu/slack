import React from 'react';
import styled from 'styled-components';

import { Box } from '../../styles/blocks';

import { Profile } from './Profile';
import { Options } from './Options';
import { Channels } from './Channels';

export const Sidebar = () => {
  return (
    <SideBarWrapper>
      <Profile />
      <Options />
      <Box style={{ backgroundColor: 'yellow' }}>
        <Channels />
      </Box>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled(Box)`
  background-color: #3f0f40;
  border-top: 1px solid #532754;
  display: grid;
  grid-template-rows: 65px 280px auto;
`;
