import React, { useState } from 'react';
import styled from 'styled-components';

import { Box } from '../../styles/blocks';
import { SidebarSection } from './SidebarSection';
import { Messages } from './Messages';
import { Channels } from './Channels';

export const SidebarSections = () => {
  const [revealed, setRevealed] = useState({
    channels: false,
    messages: false,
  });

  return (
    <Wrapper>
      <SidebarSection
        title='Channels'
        subtitle='Add a channel'
        onReveal={() => setRevealed(!revealed)}>
        {revealed.channels ? <Channels /> : null}
      </SidebarSection>
      <SidebarSection
        title='Direct mesages'
        subtitle='Invite people'
        onReveal={() =>
          setRevealed({ ...revealed, messages: !revealed.messages })
        }>
        {revealed.messages ? <Messages /> : null}
      </SidebarSection>
      <SidebarSection title='Apps'></SidebarSection>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  border-top: 1.3px solid #532653;
  padding: 15px 0;
`;
