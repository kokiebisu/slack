import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

// Layout
import { NavSection } from '../components/Home/NavSection';
import { TeamSection } from '../components/Home/TeamSection';

import { Box, Flex, Input } from '../components/Blocks';

const ALL_USERS = gql`
  query {
    allUsers {
      username
      email
    }
  }
`;

export default () => {
  const { data, loading, error } = useQuery(ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <>
      <Wrapper>
        <TopHeader />
        <MainContent>
          <SectionWrapper>
            <TeamSectionWrapper>
              <TeamSection />
            </TeamSectionWrapper>
            <NavSectionWrapper>
              <NavSection />
            </NavSectionWrapper>
            <ContentWrapper>
              <div>content</div>
            </ContentWrapper>
          </SectionWrapper>
        </MainContent>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TopHeader = styled.div`
  background-color: red;
  flex:none
  width: 100vw;
  height: 34px;
`;

const SectionWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const MainContent = styled.div`
  flex-grow: 1;
  height: 100%;
`;

const TeamSectionWrapper = styled.div`
  height: 100%;
  min-width: 4.6rem;
  border-right: 0.5px solid #552d56;
  background-color: #27042a;
`;

const NavSectionWrapper = styled.div`
  height: 100%;
  min-width: 17.4rem;
  background-color: #3f0e40;
  border-right: 0.5px solid #552d56;
`;

const ContentWrapper = styled.div`
  height: 100%;
  flex-grow: 1;
`;
