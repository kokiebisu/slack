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
    <Flex>
      <TeamSectionWrapper>
        <TeamSection />
      </TeamSectionWrapper>
      <NavSectionWrapper>
        <NavSection />
      </NavSectionWrapper>
      <Box height='100vh' width='100%' bg='#F9F9F9'>
        <div>content</div>
      </Box>
    </Flex>
  );
};

const TeamSectionWrapper = styled.div`
  height: 100vh;
  min-width: 4.6rem;
  background-color: #261c25;
`;

const NavSectionWrapper = styled.div`
  height: 100vh;
  min-width: 17.4rem;
  background-color: #3f0e40;
`;
