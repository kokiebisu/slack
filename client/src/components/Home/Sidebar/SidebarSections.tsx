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

const GET_ALL_TEAMS = gql`
  query {
    allTeams {
      id
    }
  }
`;

interface Props {}

export const SidebarSections: React.FC<Props> = () => {
  const { loading, error, data } = useQuery(GET_ALL_TEAMS);

  const [revealed, setRevealed] = useState({
    channels: false,
    messages: false,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  if (data) {
    console.log(data);
  }

  return (
    <Wrapper>
      <SidebarSection
        title='Channels'
        subtitle='Add a channel'
        onReveal={() =>
          setRevealed({ ...revealed, channels: !revealed.channels })
        }>
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

const Wrapper = styled(b.Box)`
  border-top: 1.3px solid #532653;
  padding: 15px 0;
`;
