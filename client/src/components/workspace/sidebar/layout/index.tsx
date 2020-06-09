import * as React from 'react';
import { useState } from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Components
import { Options } from '../option/container';
import { SidebarSections } from '../section/container';

// Svgs
import { BottomArrow } from '../../../../assets/svg/Arrows';
import { Write } from '../../../../assets/svg/Reaction';

// Query
import { useMeQuery, useTeamQuery } from '../../../../generated/graphql';

// Styles
import { Wrapper, IconWrapper } from './layout.styles';
import { Profile } from '../profile';
import { useParams } from 'react-router-dom';

interface Props {
  team?: string;
  displayMenu?: () => void;
}

export const Sidebar: React.FC<Props> = ({ displayMenu }) => {
  const [hovered, setHovered] = useState(false);
  const { id } = useParams();
  const response = useTeamQuery({
    variables: { teamId: id },
  });

  return (
    <>
      <Wrapper>
        <b.Box
          className={hovered ? 'profile hovered' : 'profile'}
          onClick={displayMenu}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          <Profile response={response} hovered={hovered} />
        </b.Box>
        <b.Box className='sidebar'>
          <Options />
          <SidebarSections />
        </b.Box>
      </Wrapper>
    </>
  );
};
