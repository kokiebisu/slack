import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks';

// Components
import { SidebarSection } from './SidebarSection';
import { Messages } from './Messages';
import { Channels } from './Channels';

// Graphql
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import _ from 'lodash';
import decode from 'jwt-decode';

interface Props {}

export const SidebarSections: React.FC<Props> = () => {
  const [revealed, setRevealed] = useState({
    channels: false,
    messages: false,
    apps: false,
  });

  return (
    <Wrapper>
      <SidebarSection
        title='Channels'
        subtitle='Add a channel'
        onReveal={() =>
          setRevealed({ ...revealed, channels: !revealed.channels })
        }>
        <>{revealed.channels ? <Channels /> : null}</>
      </SidebarSection>
      <SidebarSection
        title='Direct mesages'
        subtitle='Invite people'
        onReveal={() =>
          setRevealed({ ...revealed, messages: !revealed.messages })
        }>
        {revealed.messages ? <Messages /> : null}
      </SidebarSection>
      <SidebarSection
        title='Apps'
        onReveal={() =>
          setRevealed({ ...revealed, apps: !revealed.apps })
        }></SidebarSection>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  border-top: 1.3px solid #532653;
  padding: 15px 0;
`;
