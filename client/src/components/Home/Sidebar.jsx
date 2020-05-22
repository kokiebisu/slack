import React from 'react';
import styled from 'styled-components';

import { Box } from '../../styles/blocks';

import { Profile } from './Profile';

export const Sidebar = () => {
  return (
    <SideBarWrapper>
      <Box>
        <Profile />
      </Box>
      <Box style={{ backgroundColor: 'blue' }}>
        <Box></Box>
      </Box>
      <Box style={{ backgroundColor: 'yellow' }}>hw</Box>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled(Box)`
  background-color: #3f0f40;
  border-top: 1px solid #532754;
  display: grid;
  grid-template-rows: 65px 280px auto;
`;
