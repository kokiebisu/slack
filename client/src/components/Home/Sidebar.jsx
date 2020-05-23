import React from 'react';
import styled from 'styled-components';

import { Box } from '../../styles/blocks';

import { Profile } from './Profile';
import { Options } from './Options';
import { SidebarSections } from './SidebarSections';

export const Sidebar = () => {
  return (
    <SideBarWrapper>
      <Profile />
      <SideBarContainer>
        <Options />
        <SidebarSections />
      </SideBarContainer>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled(Box)`
  background-color: #3f0f40;
  border-top: 1px solid #532754;
  display: grid;
  grid-template-rows: 65px auto;
`;

const SideBarContainer = styled(Box)`
  overflow-y: scroll;
  overflow: hidden;
`;
