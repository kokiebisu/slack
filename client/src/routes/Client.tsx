import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { HomeHeader } from '../components/Client/HomeHeader';
import { Sidebar } from '../components/Client/Sidebar';

import { ThreadsPage } from '../components/Client/Content/ThreadsPage';
import { MentionPage } from '../components/Client/Content/MentionPage';
import { DraftPage } from '../components/Client/Content/DraftPage';
import { SavedPage } from '../components/Client/Content/SavedPage';

import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
  useParams,
  RouteComponentProps,
} from 'react-router-dom';
import { StaticContext } from 'react-router';

// Block
import * as b from '../styles/blocks';

// Svgs
import { Smile } from '../assets/svg';

import { home } from '../styles/sizes';
import { useTeamQuery } from '../generated/graphql';
import { useClientState, useClientDispatch } from '../context/client-context';
import { AngleRight } from '../assets/svg/Arrows';

type Props = RouteComponentProps<
  {},
  StaticContext,
  { from: { pathname: string } }
>;

export const ClientRoutes: React.FC<Props> = () => {
  const match = useRouteMatch();
  const { id } = useParams();
  const groupName = 'bcit-sept-2018';

  const { data, loading, error } = useTeamQuery({
    variables: {
      teamId: id,
    },
  });

  return (
    <>
      <BrowserRouter>
        <Wrapper>
          {!loading && data && (
            <>
              <HomeHeader team={data.team.name} />
              <ContentWrapper>
                <Sidebar team={data.team.name} />

                <Switch>
                  <Route path={match.url + '/threads'}>
                    <ThreadsPage group={groupName} />
                  </Route>
                  <Route path={match.url + '/activity-page'}>
                    <MentionPage group={groupName} />
                  </Route>
                  <Route path={match.url + '/drafts'}>
                    <DraftPage group={groupName} />
                  </Route>
                  <Route path={match.url + '/saved-page'}>
                    <SavedPage group={groupName} />
                  </Route>
                </Switch>
              </ContentWrapper>
              <MenuToggle>
                <b.Box my={3}>
                  <FirstSection py={2}>
                    <b.Box mx={3}>
                      <b.Box>
                        <b.Flex>
                          <b.Box pr={2}>
                            <b.Flex justifyContent='center' alignItems='center'>
                              <b.Box
                                height={35}
                                width={35}
                                borderRadius={3}
                                backgroundColor='blue'
                              />
                            </b.Flex>
                          </b.Box>
                          <b.Box>
                            <b.Box mb={1}>
                              <b.Text
                                fontSize={15}
                                color='black__light'
                                fontFamily='SlackLato-Bold'>
                                kenichikona
                              </b.Text>
                            </b.Box>
                            <b.Box>
                              <b.Flex>
                                <b.Box>
                                  <b.Text
                                    fontFamily='SlackLato-Regular'
                                    fontSize={12}
                                    color='gray'>
                                    You're set to{' '}
                                    <b.Span fontFamily='SlackLato-Bold'>
                                      active.
                                    </b.Span>{' '}
                                    &nbsp;
                                  </b.Text>
                                </b.Box>
                                <b.Box>
                                  <b.Text
                                    fontFamily='SlackLato-Bold'
                                    fontSize={12}
                                    color='blue'>
                                    Change
                                  </b.Text>
                                </b.Box>
                              </b.Flex>
                            </b.Box>
                          </b.Box>
                        </b.Flex>
                      </b.Box>
                      <UpdateStatus>
                        <b.Flex alignItems='center'>
                          <b.Box>
                            <IconWrapper className='smile'>
                              <Smile />
                            </IconWrapper>
                          </b.Box>
                          <b.Box>
                            <b.Text>Update your status</b.Text>
                          </b.Box>
                        </b.Flex>
                      </UpdateStatus>
                      <b.Box py={2}>
                        <b.Flex justifyContent='space-between'>
                          <b.Box>
                            <b.Text>Pause notifications</b.Text>
                          </b.Box>
                          <b.Box>
                            <b.Flex>
                              <b.Box>
                                <b.Text>On</b.Text>
                              </b.Box>
                              <IconWrapper className='angleright'>
                                <AngleRight />
                              </IconWrapper>
                            </b.Flex>
                          </b.Box>
                        </b.Flex>
                      </b.Box>
                      <b.Box py={2}>
                        <b.Text>View Profile</b.Text>
                      </b.Box>
                      <b.Box py={2}>
                        <b.Text>Preferences</b.Text>
                      </b.Box>
                    </b.Box>
                  </FirstSection>
                  <SecondSection>
                    <b.Box>
                      <b.Flex>
                        <b.Box pr={2}>
                          <b.Flex justifyContent='center' alignItems='center'>
                            <b.Box
                              height={35}
                              width={35}
                              borderRadius={3}
                              backgroundColor='blue'
                            />
                          </b.Flex>
                        </b.Box>
                        <b.Box>
                          <b.Box mb={1}>
                            <b.Text
                              fontSize={15}
                              color='black__light'
                              fontFamily='SlackLato-Bold'>
                              kenichikona
                            </b.Text>
                          </b.Box>
                          <b.Box>
                            <b.Flex>
                              <b.Box>
                                <b.Text
                                  fontFamily='SlackLato-Regular'
                                  fontSize={12}
                                  color='gray'>
                                  You're set to{' '}
                                  <b.Span fontFamily='SlackLato-Bold'>
                                    active.
                                  </b.Span>{' '}
                                </b.Text>
                              </b.Box>
                            </b.Flex>
                          </b.Box>
                        </b.Box>
                      </b.Flex>
                      <b.Box mt={2}>
                        <b.Text
                          fontSize={13}
                          fontFamily='SlackLato-Regular'
                          lineHeight={1.6}>
                          Your workspace is currently on the free version of
                          Slack. See upgrade options
                        </b.Text>
                      </b.Box>
                    </b.Box>
                  </SecondSection>
                  <ThirdSection>
                    <b.Box>
                      <b.Text>Invite people to Slack</b.Text>
                    </b.Box>
                    <b.Box>
                      <b.Flex>
                        <b.Box>
                          <b.Text>Settings & administration</b.Text>
                        </b.Box>
                        <IconWrapper className='angleright'>
                          <AngleRight />
                        </IconWrapper>
                      </b.Flex>
                    </b.Box>
                    <b.Box>
                      <b.Flex>
                        <b.Box>
                          <b.Text>Tools</b.Text>
                        </b.Box>
                        <IconWrapper className='angleright'>
                          <AngleRight />
                        </IconWrapper>
                      </b.Flex>
                    </b.Box>
                    <b.Box>
                      <b.Flex>
                        <b.Box>
                          <b.Text>Help</b.Text>
                        </b.Box>
                        <IconWrapper className='angleright'>
                          <AngleRight />
                        </IconWrapper>
                      </b.Flex>
                    </b.Box>
                    <b.Box>
                      <b.Text>Sign out of asdf</b.Text>
                    </b.Box>
                  </ThirdSection>
                  <FourthSection>
                    <b.Box>
                      <b.Flex>
                        <b.Box>
                          <b.Text>Add workspaces</b.Text>
                        </b.Box>
                        <IconWrapper className='angleright'>
                          <AngleRight />
                        </IconWrapper>
                      </b.Flex>
                    </b.Box>
                    <b.Box>
                      <b.Flex>
                        <b.Box>
                          <b.Text>Open the Slack App</b.Text>
                        </b.Box>
                        <IconWrapper className='angleright'>
                          <AngleRight />
                        </IconWrapper>
                      </b.Flex>
                    </b.Box>
                  </FourthSection>
                </b.Box>
              </MenuToggle>
            </>
          )}
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

const Wrapper = styled(b.Box)`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 37px auto;
`;

const ContentWrapper = styled(b.Box)`
  height: calc(100vh - 37px);
  display: grid;
  grid-template-columns: 220px auto;

  @media ${home.lg} {
    grid-template-columns: 260px auto;
  }
`;

const MenuToggle = styled(b.Box)`
  width: 310px;
  position: absolute;
  top: 96px;
  left: 15px;
  z-index: 9999;
  height: calc(100vh - 130px);
  background-color: ${({ theme }) => theme.colors.white__dark};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;

  & > div {
    border-bottom: 1px solid ${({ theme }) => theme.colors.white__dark};
  }

  @media (max-height: 500px) {
    top: 10px;
    height: calc(100vh - 20px);
  }
`;

const IconWrapper = styled(b.Box)`
  position: relative;
  &.smile {
    margin: 0 5px;
    padding: 1.5px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &.angleright {
    top: 1px;
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

const UpdateStatus = styled(b.Box)`
  margin: 15px 0 5px 0;
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  border-radius: 5px;
  background-color: #ffffff;

  & > div {
    padding: 5px 0;
  }
`;

const FirstSection = styled(b.Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray__lighter};
`;

const SecondSection = styled(b.Box)`
  padding: 20px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray__lighter};
`;

const ThirdSection = styled(b.Box)`
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray__lighter};
`;

const FourthSection = styled(b.Box)`
  padding: 20px;
`;
