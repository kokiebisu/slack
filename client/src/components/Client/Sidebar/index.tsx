import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../styles/blocks';

// Components
import { Options } from './Options';
import { SidebarSections } from './SidebarSections';

// Svgs
import { BottomArrow } from '../../../assets/svg/Arrows';
import { Write } from '../../../assets/svg/Reaction';

// Query
import { useMeQuery } from '../../../generated/graphql';

interface Props {
  team?: string;
  displayMenu?: () => void;
}

export const Sidebar: React.FC<Props> = ({ team, displayMenu }) => {
  const [hovered, setHovered] = useState(false);
  const { data: { me } = {}, loading } = useMeQuery();

  return (
    <>
      <SideBarWrapper>
        {loading ? null : (
          <>
            <ProfileWrapper
              onClick={displayMenu}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={hovered ? `hovered` : ``}>
              <Container>
                <b.Box>
                  {me && me.user && (
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
                  )}
                  {me && me.user && (
                    <b.Box>
                      <b.Flex alignItems='center'>
                        <StatusIcon />
                        <Name
                          className={hovered ? `hovered` : ``}
                          fontSize={13}
                          fontFamily='SlackLato-Regular'>
                          {me?.user.fullname}
                        </Name>
                      </b.Flex>
                    </b.Box>
                  )}
                </b.Box>
                <b.Box>
                  <Avatar>
                    <IconWrapper className='write'>
                      <Write />
                    </IconWrapper>
                  </Avatar>
                </b.Box>
              </Container>
            </ProfileWrapper>
            <SideBarContainer>
              <Options />
              <SidebarSections />
            </SideBarContainer>
          </>
        )}
      </SideBarWrapper>
    </>
  );
};

const SideBarWrapper = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-template-rows: 65px auto;
  position: relative;
  overflow: hidden;
`;

const SideBarContainer = styled(b.Box)`
  position: relative;
  height: calc(100vh - 87px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const ProfileWrapper = styled(b.Button)`
  display: grid;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary__lighter};
  z-index: 10;
  cursor: pointer;

  &.hovered {
    background-color: ${({ theme }) => theme.colors.primary__dark};
  }

  &:focus {
    outline: none;
  }
`;

const Container = styled(b.Box)`
  height: 100%;
  padding: 0 15px;
  display: grid;
  align-items: center;
  grid-template-columns: auto min-content;
`;

const StatusIcon = styled(b.Box)`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.green__lighter};
  margin-right: 4px;
`;

const Avatar = styled(b.Box)`
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.white};
  width: 35px;
  height: 35px;
`;

const Name = styled(b.Text)`
  color: ${({ theme }) => theme.colors.pink__lighter};

  &.hovered {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const IconWrapper = styled(b.Box)`
  .bottomarrow {
    svg {
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }

  &.write {
    svg {
      width: 16px;
      height: 16px;
      path {
        fill: ${({ theme }) => theme.colors.primary__lighter};
      }
    }
  }
`;
