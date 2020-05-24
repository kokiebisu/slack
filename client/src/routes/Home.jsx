import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

import { HomeHeader } from '../components/Home/HomeHeader';
import { Sidebar } from '../components/Home/Sidebar';
// Block
import { Box } from '../styles/blocks';

import { home } from '../styles/sizes';

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
        <HomeHeader />
        <ContentWrapper>
          <Sidebar />
          <Box style={{ backgroundColor: 'red' }}>he</Box>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 37px auto;
`;

const ContentWrapper = styled(Box)`
  height: calc(100vh - 37px);
  display: grid;
  grid-template-columns: 220px auto;

  @media ${home.lg} {
    grid-template-columns: 260px auto;
  }
`;
