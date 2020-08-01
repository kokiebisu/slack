import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Blocks
import * as b from 'global/blocks';

// Components
import { SidebarSection } from 'components/Workspace/Sidebar/Section';
import { Messages } from 'components/Workspace/Sidebar/Message/container';
import { Channels } from 'components/Workspace/Sidebar/Channel/container';

// Query
import { useChannelsQuery } from 'generated/graphql';

// Styles
import {
  Wrapper,
  InviteButton,
} from 'components/Workspace/Sidebar/Section/container.styles';
import { useToggleState, useToggleDispatch } from 'context/toggle-context';

interface Props {}

export const SidebarSections: React.FC<Props> = () => {
  const toggle = useToggleState();
  const dispatchToggle = useToggleDispatch();

  const [revealed, setRevealed] = useState({
    channels: false,
    messages: false,
    apps: false,
  });

  const { teamId } = useParams();

  const { data, loading, refetch } = useChannelsQuery({
    variables: {
      teamId,
    },
  });

  useEffect(() => {
    refetch();
  }, [toggle.channel, refetch]);

  return (
    <Wrapper>
      <SidebarSection
        title='Channels'
        subtitle={
          <b.Text
            fontFamily='SlackLato-Light'
            color='pink__lighter'
            fontSize={15}>
            Add a channel
          </b.Text>
        }
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
        subtitle={
          <InviteButton
            onClick={() => {
              dispatchToggle({ type: 'toggle_invite' });
            }}>
            <b.Text fontFamily='SlackLato-Black' color='white' fontSize={15}>
              Invite people
            </b.Text>
          </InviteButton>
        }
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
