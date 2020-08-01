import * as React from 'react';
import { useState } from 'react';

// Blocks
import * as b from 'global/blocks';

// Svgs
import { RightArrow } from 'assets/svg';

// Styles
import {
  IconWrapper,
  launchArrow,
  Wrapper,
  Name,
  AvatarLetter,
  Avatar,
} from 'styles/Header/LaunchOption';

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
    <Wrapper href={`/client/${url}`}>
      <b.Box
        onMouseEnter={() => {
          setHovered({ ...hovered, launch: true });
        }}
        onMouseLeave={() => {
          setHovered({ ...hovered, launch: false });
        }}>
        <b.Flex alignItems='center' justifyContent='space-between'>
          <b.Box>
            <b.Flex alignItems='center'>
              <Avatar mr={3}>
                <b.Box backgroundColor={color}>
                  <b.Flex alignItems='center' justifyContent='center'>
                    <AvatarLetter>
                      <b.Text>{name.charAt(0).toUpperCase()}</b.Text>
                    </AvatarLetter>
                  </b.Flex>
                </b.Box>
              </Avatar>
              <Name>
                <b.Text
                  fontFamily='CircularPro-Bold'
                  fontSize={17}
                  className={hovered.launch ? `hovered` : ``}>
                  {name}
                </b.Text>
              </Name>
            </b.Flex>
          </b.Box>
          <IconWrapper
            variants={launchArrow}
            animate={hovered.launch ? 'animate' : 'initial'}>
            <RightArrow />
          </IconWrapper>
        </b.Flex>
      </b.Box>
    </Wrapper>
  );
};
