import * as React from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks';

import { Options } from './Options';
import { SidebarSections } from './SidebarSections';

import { BottomArrow } from '../../../assets/svg/Arrows';
import { Write } from '../../../assets/svg/Reaction';
import { useState } from 'react';
import { useMeQuery } from '../../../generated/graphql';
import { useParams } from 'react-router-dom';

interface Props {
  team?: string;
}

export const Sidebar: React.FC<Props> = ({ team }) => {
  const [hovered, setHovered] = useState(false);
  const { data, loading, error } = useMeQuery();

  const { id } = useParams();

  return (
    <>
      <SideBarWrapper>
        <ProfileWrapper
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={hovered ? `hovered` : ``}>
          <Container>
            <b.Box>
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
                    <BottomArrow width={8} height={8} color='white' />
                  </b.Box>
                </b.Flex>
              </b.Box>
              <b.Box>
                <b.Flex alignItems='center'>
                  <StatusIcon />
                  {!loading && data && (
                    <Name
                      className={hovered ? `hovered` : ``}
                      fontSize={13}
                      fontFamily='SlackLato-Regular'>
                      {data.me?.username}
                    </Name>
                  )}
                </b.Flex>
              </b.Box>
            </b.Box>
            <Avatar>
              <Write width={16} height={16} color='#431E44' />
            </Avatar>
          </Container>
        </ProfileWrapper>

        <SideBarContainer>
          <Options />
          <SidebarSections />
        </SideBarContainer>
      </SideBarWrapper>
    </>
  );
};

const SideBarWrapper = styled(b.Box)`
  background-color: #3f0f40;
  display: grid;
  grid-template-rows: 65px auto;
  position: relative;
  overflow: hidden;
`;

const SideBarContainer = styled(b.Box)`
  position: relative;
  height: calc(100vh - 87px);
  overflow-y: scroll;
`;

const ProfileWrapper = styled(b.Button)`
  display: grid;
  padding: 10px 0;
  background-color: #3f0f40;
  align-items: center;
  border-bottom: 1px solid #532754;
  z-index: 10;
  cursor: pointer;

  &.hovered {
    background-color: #350d36 !important;
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
  background-color: #2bac76;
  margin-right: 4px;
`;

const Avatar = styled(b.Box)`
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: white;
  width: 35px;
  height: 35px;
`;

const Name = styled(b.Text)`
  color: #d8cfd9;

  &.hovered {
    color: white !important;
  }
`;
