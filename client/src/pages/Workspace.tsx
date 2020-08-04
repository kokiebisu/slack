import * as React from 'react';

import { Redirect, useParams } from 'react-router-dom';

// Styles
import { Wrapper, ContentWrapper } from 'styles/Workspace';

// Components
import { HomeHeader } from 'components/Header/Workspace';
import { Sidebar } from 'components/Workspace/Sidebar';
import { MenuToggle } from 'components/Workspace/MenuToggle';
import { ChannelModal } from 'modals/Channel';

// Queries
import { useMeQuery, useTeamQuery } from 'generated/graphql';
import { useToggleState } from 'context/toggle-context';
import { InviteModal } from 'modals/Invite';
import { useEffect } from 'react';

interface Props {
  route: React.ReactNode;
}

export const Workspace: React.FC<Props> = ({ route }) => {
  const state = useToggleState();

  const { teamId } = useParams();
  localStorage.setItem('teamId', teamId);
  const { loading: meLoading, error } = useMeQuery();

  const { loading: teamLoading } = useTeamQuery({
    variables: {
      teamId,
    },
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'initial';
    };
  }, []);

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
                {state.invite && <InviteModal />}
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
