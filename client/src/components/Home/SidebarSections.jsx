import React from 'react';
import styled from 'styled-components';

import { Box } from '../../styles/blocks';
import { SidebarSection } from './SidebarSection';
import { Messages } from './Messages';

export const SidebarSections = () => {
  return (
    <Wrapper>
      <SidebarSection
        title='Channels'
        subtitle='Add a channel'></SidebarSection>
      <SidebarSection title='Direct mesages'>
        <Messages />
      </SidebarSection>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  border-top: 1.3px solid #532653;
  padding: 15px 0;
`;
