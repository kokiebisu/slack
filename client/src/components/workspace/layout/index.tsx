import * as React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Wrapper, ContentWrapper } from './layout.styles';

// Components
import { HomeHeader } from '../header';
import { Sidebar } from '../sidebar/layout';
import { MenuToggle } from '../menutoggle';
import { useState, useEffect } from 'react';
import {
  useMeQuery,
  useTeamQuery,
  useMyTeamsLazyQuery,
  useTeamLazyQuery,
} from '../../../generated/graphql';
import { useToggleState } from '../../../context/toggle-context';
import { ChannelModal } from '../channelmodal';

interface Props {
  route: React.ReactNode;
}

export const Workspace: React.FC<Props> = ({ route }) => {
  const state = useToggleState();

  const { teamId } = useParams();
  const { data: { me } = {}, loading: meLoading, error } = useMeQuery();
  const [channels, setChannels] = useState();
  const { data, loading: teamLoading } = useTeamQuery({
    variables: {
      teamId,
    },
  });

  return (
    <>
      <Wrapper>
        {error ? (
          <Redirect to='/' />
        ) : (
          <>
            {!teamLoading && !meLoading && (
              <>
                {state.channel && <ChannelModal />}
                <HomeHeader />

                {state.menu ? <MenuToggle /> : null}
                <ContentWrapper>
                  <Sidebar />
                  {route}
                </ContentWrapper>
              </>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
};
