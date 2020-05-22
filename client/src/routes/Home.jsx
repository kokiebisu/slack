import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

// Block
import { Box, Flex, Button, Text } from '../styles/blocks';

// Svg
import { Clock } from '../assets/svg/Clock';
import { Magnify } from '../assets/svg/Magnify';
import { Present } from '../assets/svg/Present';
import { Info } from '../assets/svg/Info';
import { Write } from '../assets/svg/Write';
import { BottomArrow } from '../assets/svg/Arrows';

// Layout
import { NavSection } from '../components/Home/NavSection';
import { TeamSection } from '../components/Home/TeamSection';

import { Content } from '../components/Home/Content';

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
        <Box height={37} background='#350D36'>
          <Flex alignItems='center' justifyContent='center'>
            <Box style={{ flex: 1 }} pr={4} pl={3}>
              <Flex style={{ justifyContent: 'flex-end' }}>
                <Clock width={18} height={18} color='white' />
              </Flex>
            </Box>
            <Input
              style={{ maxWidth: 500, flex: 5 }}
              borderRadius={5}
              background='#431E44'>
              <Box>
                <Flex alignItems='center' justifyContent='center'>
                  <Box px={1}>
                    <Magnify width={12} height={12} color='#D9D2D9' />
                  </Box>
                  <Box px={1} style={{ top: 3 }}>
                    <Text fontFamily='Segoe' fontSize={12} color='#D9D2D9'>
                      Search bcit-cst-sept-2018
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Input>
            <Box style={{ flex: 1 }} pr={3} pl={3}>
              <Flex style={{ justifyContent: 'flex-end' }}>
                <Button background='#CD2553' borderRadius={4}>
                  <Flex alignItems='center' justifyContent='center'>
                    <Box pr={2} style={{ top: 1 }}>
                      <Present width={14} height={14} color='white' />
                    </Box>
                    <Box style={{ top: 2 }}>
                      <Text fontFamily='Segoe' fontSize={13} color='white'>
                        See what's new
                      </Text>
                    </Box>
                  </Flex>
                </Button>
                <Button ml={2} background='transparent'>
                  <Flex alignItems='center'>
                    <Info width={18} height={18} color='white' />
                  </Flex>
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <ContentWrapper>
          <SideBar>
            <Box>
              <ProfileWrapper>
                <Profile>
                  <Box>
                    <Box>
                      <Flex alignItems='center'>
                        <Box mr={1}>
                          <Text
                            fontFamily='OpenSans-Semibold'
                            fontSize={14}
                            color='white'>
                            bcit-cst-sept2018
                          </Text>
                        </Box>
                        <Box mb={1}>
                          <BottomArrow width={8} height={8} color='white' />
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex alignItems='center'>
                        <StatusIcon />
                        <Text
                          fontSize={13}
                          color='#D8CFD9'
                          fontFamily='OpenSans-Light'>
                          Kenichi Okiebisu
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                  <Avatar>
                    <Write width={16} height={16} color='#431E44' />
                  </Avatar>
                </Profile>
              </ProfileWrapper>
            </Box>
            <Box style={{ backgroundColor: 'blue' }}>
              <Box></Box>
            </Box>
            <Box style={{ backgroundColor: 'yellow' }}>hw</Box>
          </SideBar>
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
  display: grid;
  grid-template-columns: 270px auto;
`;

const SideBar = styled(Box)`
  background-color: #3f0f40;
  border-top: 1px solid #532754;
  display: grid;
  grid-template-rows: 65px 280px auto;
`;

const ProfileWrapper = styled(Box)`
  height: 100%;
  display: grid;
  margin: 0 15px;
  background-color: 'yellow';
  align-items: center;
`;

const Profile = styled(Box)`
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: auto min-content;
`;

const Input = styled(Button)`
  height: 24px;
  border: 1.3px solid #684a68;
  padding: 0 8px;
`;

const StatusIcon = styled(Box)`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #2bac76;
  margin-right: 4px;
`;

const Avatar = styled(Box)`
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: white;
  width: 35px;
  height: 35px;
`;

// const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   left: 0;
//   top: 0;
//   display: flex;
//   flex-direction: column;
//   background-color: red;
// `;

// const TopHeader = styled.div`
//   background-color: red;
//   flex:none
//   width: 100vw;
//   height: 34px;
// `;

// const SectionWrapper = styled.div`
//   display: flex;
//   height: 100%;
// `;

// const MainContent = styled.div`
//   flex-grow: 1;
//   height: 100%;
// `;

// const TeamSectionWrapper = styled.div`
//   height: 100%;
//   min-width: 4.6rem;
//   border-right: 0.5px solid #552d56;
//   background-color: #27042a;
// `;

// const NavSectionWrapper = styled.div`
//   height: 100%;
//   min-width: 17.4rem;
//   background-color: #3f0e40;
//   border-right: 0.5px solid #552d56;
// `;

// const ContentWrapper = styled.div`
//   height: 100%;
//   flex-grow: 1;
// `;
