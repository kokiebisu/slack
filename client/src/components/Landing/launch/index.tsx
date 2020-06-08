import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../styles/blocks';

// Svgs
import { RightArrow } from '../../../assets/svg/Arrows';

// Styles
import { TeamName, IconWrapper, launchArrow } from './launch.styles';

interface Props {
  name: string;
  url: string;
  color: string;
}

export const WorkspaceOption: React.FC<Props> = ({ name, url, color }) => {
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
        borderBottom='0.5px solid white__dark'>
        <b.Flex alignItems='center' justifyContent='space-between'>
          <b.Box>
            <b.Flex alignItems='center'>
              <b.Box mr={3}>
                <b.Box
                  backgroundColor={color}
                  width={50}
                  height={50}
                  style={{
                    border: '3px solid gray__light',
                    borderRadius: '8px',
                  }}>
                  <b.Flex alignItems='center' justifyContent='center'>
                    <b.Box>
                      <b.Text
                        color='white'
                        fontFamily='SlackLato-Bold'
                        fontSize={18}>
                        {name.charAt(0).toUpperCase()}
                      </b.Text>
                    </b.Box>
                  </b.Flex>
                </b.Box>
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
          <IconWrapper
            variants={launchArrow}
            animate={hovered.launch ? 'animate' : 'initial'}>
            <RightArrow />
          </IconWrapper>
        </b.Flex>
      </b.Box>
    </b.Anchor>
  );
};
