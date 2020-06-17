import * as React from 'react';

import { Redirect, useParams } from 'react-router-dom';

// Styles
import { Wrapper, ContentWrapper } from './index.styles';

// Components
import { HomeHeader } from '../Header';
import { Sidebar } from '../Sidebar/layout';
import { MenuToggle } from '../MenuToggle';
import { ChannelModal } from '../ChannelModal';

// Queries
import { useMeQuery, useTeamQuery } from '../../../generated/graphql';
import { useToggleState } from '../../../context/toggle-context';

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
