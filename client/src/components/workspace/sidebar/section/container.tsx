import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

// Blocks
import * as b from '../../../../styles/blocks';

// Components
import { SidebarSection } from '.';
import { Messages } from '../message/container';
import { Channels } from '../channel/container';

// Query
import { useChannelsQuery } from '../../../../generated/graphql';

// Styles
import { Wrapper } from './container.styles';
import { useToggleState } from '../../../../context/toggle-context';

interface Props {}

export const SidebarSections: React.FC<Props> = () => {
  const toggle = useToggleState();
  const [revealed, setRevealed] = useState({
    channels: false,
    messages: false,
    apps: false,
  });

  const { id } = useParams();

  const { data, loading, error, refetch } = useChannelsQuery({
    variables: {
      teamId: id,
    },
  });

  useEffect(() => {
    refetch();
  }, [toggle.channel]);

  return (
    <Wrapper>
      <SidebarSection
        title='Channels'
        subtitle='Add a channel'
        onReveal={() => {
          setRevealed({ ...revealed, channels: !revealed.channels });
        }}>
        {!loading && data && (
          <>
            {revealed.channels && data.channels ? (
              <Channels data={data!.channels.channels} />
            ) : null}
          </>
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
        onReveal={() => setRevealed({ ...revealed, apps: !revealed.apps })}
      />
    </Wrapper>
  );
};
