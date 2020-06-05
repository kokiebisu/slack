import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks';

// Components
import { SidebarSection } from './SidebarSection';
import { Messages } from './Messages';
import { Channels } from './Channels';

import _ from 'lodash';
import decode from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import { useChannelsQuery } from '../../../generated/graphql';

interface Props {}

export const SidebarSections: React.FC<Props> = () => {
  const [revealed, setRevealed] = useState({
    channels: false,
    messages: false,
    apps: false,
  });

  const location = useLocation();

  const { data, loading, error } = useChannelsQuery({
    variables: { teamId: location.pathname.split('/')[2] },
  });

  return (
    <Wrapper>
      <SidebarSection
        title='Channels'
        subtitle='Add a channel'
        onReveal={() => {
          setRevealed({ ...revealed, channels: !revealed.channels });
        }}>
        {!loading && data && (
          <>{revealed.channels ? <Channels data={data.channels} /> : null}</>
        )}
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
  border-top: 1.3px solid ${({ theme }) => theme.props.primary__lighter};
  padding: 15px 0;
`;
