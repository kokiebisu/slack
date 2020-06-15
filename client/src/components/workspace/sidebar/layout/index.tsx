import * as React from 'react';
import { useState, useEffect } from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Components
import { Options } from '../option/container';
import { SidebarSections } from '../section/container';

// Svgs
import { BottomArrow } from '../../../../assets/svg/Arrows';
import { Write } from '../../../../assets/svg/Reaction';

// Query
import {
  useMeQuery,
  useTeamQuery,
  useTeamLazyQuery,
} from '../../../../generated/graphql';

// Styles
import { Wrapper, IconWrapper } from './index.styles';
import { Profile } from '../profile';
import { useParams } from 'react-router-dom';
import { useToggleState } from '../../../../context/toggle-context';

interface Props {
  team?: string;
  displayMenu?: () => void;
}

export const Sidebar: React.FC<Props> = ({ displayMenu }) => {
  const [hovered, setHovered] = useState(false);
  const { teamId } = useParams();
  const { data: { team } = {}, loading } = useTeamQuery({
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
