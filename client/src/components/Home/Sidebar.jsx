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
  display: grid;
  grid-template-rows: 65px auto;
  position: relative;
  overflow: hidden;
`;

const SideBarContainer = styled(Box)`
  position: relative;
  height: calc(100vh - 87px);
  overflow-y: scroll;
`;
