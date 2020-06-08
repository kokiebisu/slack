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
import { useMeQuery } from '../../../../generated/graphql';

// Styles
import {
  Wrapper,
  Profile,
  IconWrapper,
  StatusIcon,
  Name,
  Avatar,
} from './layout.styles';

interface Props {
  team?: string;
  displayMenu?: () => void;
}

export const Sidebar: React.FC<Props> = ({ team, displayMenu }) => {
  const [hovered, setHovered] = useState(false);
  const { data: { me } = {}, loading } = useMeQuery();

  return (
    <>
      <Wrapper>
        <b.Box
          className={hovered ? 'profile hovered' : 'profile'}
          onClick={displayMenu}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          <Profile>
            <b.Box>
              {!loading && me && (
                <>
                  <b.Box>
                    <b.Flex alignItems='center'>
                      <b.Box mr={1}>
                        <b.Text
                          fontFamily='SlackLato-Bold'
                          fontSize={14}
                          color='white'>
                          {team}
                        </b.Text>
                      </b.Box>
                      <b.Box mb={1}>
                        <IconWrapper className='bottomarrow'>
                          <BottomArrow />
                        </IconWrapper>
                      </b.Box>
                    </b.Flex>
                  </b.Box>
                  <b.Box>
                    <b.Flex alignItems='center'>
                      <StatusIcon />
                      <Name
                        className={hovered ? `hovered` : ``}
                        fontSize={13}
                        fontFamily='SlackLato-Regular'>
                        {me?.user && me?.user.fullname}
                      </Name>
                    </b.Flex>
                  </b.Box>
                </>
              )}
            </b.Box>
            <Avatar>
              <IconWrapper className='write'>
                <Write />
              </IconWrapper>
            </Avatar>
          </Profile>
        </b.Box>
        <b.Box className='sidebar'>
          <Options />
          <SidebarSections />
        </b.Box>
      </Wrapper>
    </>
  );
};
