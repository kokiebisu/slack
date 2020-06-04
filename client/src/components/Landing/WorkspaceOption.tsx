import * as React from 'react';
import { useState } from 'react';
import * as b from '../../styles/blocks';
import styled from 'styled-components';

import { RightArrow } from '../../assets/svg/Arrows';

// Images
import BCIT from '../../assets/img/bcit.png';
import { useMyTeamsQuery } from '../../generated/graphql';

interface Props {
  name: string;
  url: string;
}

export const WorkspaceOption: React.FC<Props> = ({ name, url }) => {
  const [hovered, setHovered] = useState({
    launch: false,
  });

  return (
    <b.Anchor href={`/client/${url}`}>
      <b.Box
        onMouseEnter={() => {
          setHovered({ ...hovered, launch: true });
        }}
        onMouseLeave={() => {
          setHovered({ ...hovered, launch: false });
        }}
        py={2}
        px={2}
        style={{ borderBottom: '0.5px solid #E2E1E2' }}>
        <b.Flex alignItems='center' justifyContent='space-between'>
          <b.Box>
            <b.Flex alignItems='center'>
              <b.Box mr={3}>
                <img
                  style={{ borderRadius: '5px' }}
                  width={50}
                  height={50}
                  src={BCIT}
                  alt='channel'
                />
              </b.Box>
              <b.Box>
                <TeamName
                  fontFamily='CircularPro-Bold'
                  fontSize={17}
                  className={hovered.launch ? `hovered` : ``}>
                  {name}
                </TeamName>
              </b.Box>
            </b.Flex>
          </b.Box>
          <b.Box
            variants={launchArrow}
            animate={hovered.launch ? 'animate' : 'initial'}>
            <RightArrow width={15} height={15} color='#1766A4' />
          </b.Box>
        </b.Flex>
      </b.Box>
    </b.Anchor>
  );
};

const TeamName = styled(b.Text)`
  color: #1d1d1d;

  &.hovered {
    color: #1766a4;
  }
`;

const launchArrow = {
  initial: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    x: 5,
    transition: {
      duration: 0.5,
    },
  },
};
