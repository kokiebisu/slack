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

import { home } from '../styles/sizes';
import { useTeamQuery } from '../generated/graphql';
import { useClientState, useClientDispatch } from '../context/client-context';

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
                <MenuToggle>
                  <b.Box m={3} p={2} borderBottom='1px solid black'>
                    <b.Box>
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
                                    You're set to active. &nbsp;
                                  </b.Text>
                                </b.Box>
                                <b.Box>
                                  <b.Text
                                    fontFamily='SlackLato-Regular'
                                    fontSize={12}
                                    color='blue'>
                                    Change
                                  </b.Text>
                                </b.Box>
                              </b.Flex>
                            </b.Box>
                          </b.Box>
                        </b.Flex>
                        <b.Box my={2} backgroundColor='#FFFFFF'>
                          <b.Flex>
                            <b.Box mr={3}>smile</b.Box>
                            <b.Box>
                              <b.Text>Update your status</b.Text>
                            </b.Box>
                          </b.Flex>
                        </b.Box>
                        <b.Box>
                          <b.Flex justifyContent='space-between'>
                            <b.Box>
                              <b.Text>Pause notifications</b.Text>
                            </b.Box>
                            <b.Box>
                              <b.Flex>
                                <b.Box>
                                  <b.Text>On</b.Text>
                                </b.Box>
                                <b.Box>arrow</b.Box>
                              </b.Flex>
                            </b.Box>
                          </b.Flex>
                        </b.Box>
                        <b.Box>
                          <b.Text>View Profile</b.Text>
                        </b.Box>
                        <b.Box>
                          <b.Text>Preferences</b.Text>
                        </b.Box>
                      </b.Box>
                    </b.Box>
                  </b.Box>
                  <b.Box></b.Box>
                </MenuToggle>
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
  top: 60px;
  left: 15px;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.white__dark};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray__light};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;
