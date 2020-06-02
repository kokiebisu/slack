import * as React from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks';

import { Profile } from './Profile';
import { Options } from './Options';
import { SidebarSections } from './SidebarSections';

interface Props {}

export const Sidebar: React.FC<Props> = () => {
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

const SideBarWrapper = styled(b.Box)`
  background-color: #3f0f40;
  display: grid;
  grid-template-rows: 65px auto;
  position: relative;
  overflow: hidden;
`;

const SideBarContainer = styled(b.Box)`
  position: relative;
  height: calc(100vh - 87px);
  overflow-y: scroll;
`;
