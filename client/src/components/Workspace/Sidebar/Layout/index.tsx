import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

// Blocks
import * as b from 'global/blocks';

// Components
import { Options } from 'components/Workspace/Sidebar/Option/container';
import { SidebarSections } from 'components/Workspace/Sidebar/Section/container';
import { Profile } from 'components/Workspace/Sidebar/Profile';

// Query
import { useTeamQuery } from 'generated/graphql';

// Styles
import { Wrapper } from 'components/Workspace/Sidebar/Layout/index.styles';

interface Props {
  team?: string;
  displayMenu?: () => void;
}

export const Sidebar: React.FC<Props> = ({ displayMenu }) => {
  const [hovered, setHovered] = useState(false);
  const { teamId } = useParams();
  const { data: { team } = {} } = useTeamQuery({
    variables: { teamId },
  });

  return (
    <>
      <Wrapper>
        <b.Box
          className={hovered ? 'profile hovered' : 'profile'}
          onClick={displayMenu}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          {team && team.team && <Profile team={team.team} hovered={hovered} />}
        </b.Box>
        <b.Box className='sidebar' style={{ overflowY: 'scroll' }}>
          <Options />
          <SidebarSections />
        </b.Box>
      </Wrapper>
    </>
  );
};
