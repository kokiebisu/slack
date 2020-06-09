import * as React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Wrapper, ContentWrapper } from './layout.styles';

// Components
import { HomeHeader } from '../header';
import { Sidebar } from '../sidebar/layout';
import { MenuToggle } from '../menutoggle';
import { useState } from 'react';
import { useMeQuery, useTeamQuery } from '../../../generated/graphql';

interface Props {
  route: React.ReactNode;
}

export const Workspace: React.FC<Props> = ({ route }) => {
  const [toggle, setToggle] = useState(false);

  const { id } = useParams();
  const { data: { me } = {}, loading, error } = useMeQuery();

  const { data: { team } = {} } = useTeamQuery({
    variables: {
      teamId: id,
    },
  });

  return (
    <>
      <Wrapper>
        {error ? (
          <Redirect to='/' />
        ) : (
          <>
            {!loading && me && team && (
              <>
                <HomeHeader />
                {toggle ? <MenuToggle /> : null}
                <ContentWrapper>
                  <Sidebar />
                  {route}
                </ContentWrapper>
              </>
            )}
          </>
        )}
        <HomeHeader />
      </Wrapper>
    </>
  );
};
