import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Global Styles
import * as b from '../../../styles/blocks';
import { landing } from '../../../styles/sizes';

// Svg
import { NameLogo } from '../../../assets/svg/Logo';
import { BottomArrow } from '../../../assets/svg/Arrows';
import { HamburgerButton } from '../../../assets/svg';

// Animations
import { launchMotion } from '../../../animations/Buttons';

// Components
import { Link } from './header.styles';
import { WorkspaceOption } from '../launch';

// Styles
import {
  HeaderWrapper,
  Wrapper,
  IconWrapper,
  Left,
  Right,
  NavItem,
  Dropdown,
  LinkWrapper,
  Nav,
  LaunchButtonWrapper,
  LaunchButton,
  SignInButton,
  LaunchOptionWrapper,
  LaunchOption,
  LaunchOptionLink,
  GetStartedButton,
  GetStartedButtonWrapper,
} from './header.styles';

// Util
// import { useAuthenticated } from '../../hooks/useAuthenticated';
import { MeQuery, useMyTeamsQuery } from '../../../generated/graphql';

interface Props {
  data: MeQuery | undefined;
}

export const Header: React.FC<Props> = () => {
  const [hovered, setHovered] = useState({
    why: false,
    solutions: false,
    resources: false,
    enterprise: false,
    pricing: false,
  });

  const { data, loading } = useMyTeamsQuery();

  const [pressed, setPressed] = useState(false);

  return (
    <HeaderWrapper>
      <Wrapper>
        <b.Container>
          <b.Flex alignItems='center' justifyContent='space-between'>
            <Left alignItems='center'>
              <b.Box top={2} mr={4}>
                <IconWrapper className='namelogo'>
                  <NameLogo />
                </IconWrapper>
              </b.Box>
            </Left>
            <Right justifyContent='space-between' alignItems='center'>
              <Nav>
                <NavItem
                  onHoverStart={() => {
                    setHovered({ ...hovered, why: true });
                  }}
                  onHoverEnd={() => {
                    setHovered({ ...hovered, why: false });
                  }}>
                  <b.Text>Why Slack?</b.Text>
                  {!hovered.solutions && hovered.why ? (
                    <Dropdown>
                      <LinkWrapper>
                        <Link>Features</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>How it replaces email</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Security</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Customers</Link>
                      </LinkWrapper>
                    </Dropdown>
                  ) : null}
                </NavItem>
                <NavItem
                  onHoverStart={() => {
                    setHovered({ ...hovered, solutions: true });
                  }}
                  onHoverEnd={() => {
                    setHovered({ ...hovered, solutions: false });
                  }}>
                  <b.Text>Solutions</b.Text>
                  {!hovered.resources && hovered.solutions ? (
                    <Dropdown>
                      <LinkWrapper>
                        <Link>Remote Work</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Distance Learning</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Engineering</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Financial Services</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Sales</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>IT</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Marketing</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Customer Support</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Human Resources</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Project Management</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Media</Link>
                      </LinkWrapper>
                    </Dropdown>
                  ) : null}
                </NavItem>
                <NavItem
                  onHoverStart={() =>
                    setHovered({ ...hovered, resources: true })
                  }
                  onHoverEnd={() =>
                    setHovered({ ...hovered, resources: false })
                  }>
                  <b.Text>Resources</b.Text>
                  {!hovered.why && hovered.resources ? (
                    <Dropdown>
                      <LinkWrapper>
                        <Link>Resources Library</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Slack Tips</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Blog</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Webinars</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Slack Certified Program</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Help Center</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>API</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>App Directory</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Download</Link>
                      </LinkWrapper>
                    </Dropdown>
                  ) : null}
                </NavItem>
                <NavItem>
                  <Link>Enterprise</Link>
                </NavItem>
                <NavItem>
                  <Link>Pricing</Link>
                </NavItem>
              </Nav>
              {!loading &&
              data &&
              data.myTeams.teams! &&
              data.myTeams.teams!.length > 0 ? (
                <LaunchButtonWrapper
                  initial='rest'
                  whileHover='hovered'
                  animate='rest'
                  onClick={() => setPressed(!pressed)}>
                  <LaunchButton variants={launchMotion}>
                    <b.Flex alignItems='center'>
                      <b.Text>Launch Slack</b.Text>
                      <b.Box ml={2}>
                        <IconWrapper className='bottomarrow'>
                          <BottomArrow />
                        </IconWrapper>
                      </b.Box>
                    </b.Flex>
                  </LaunchButton>
                </LaunchButtonWrapper>
              ) : (
                <GetStartedButtonWrapper alignItems='center'>
                  <b.Anchor href='/signin'>
                    <SignInButton mr={3}>
                      <b.Text fontFamily='CircularPro-Book'>Sign in</b.Text>
                    </SignInButton>
                  </b.Anchor>
                  <GetStartedButton href='/get-started'>
                    <b.Text
                      fontSize={14}
                      fontFamily='CircularPro-Book'
                      color='white'
                      uppercase>
                      Get Started
                    </b.Text>
                  </GetStartedButton>
                </GetStartedButtonWrapper>
              )}
              <IconWrapper className='hamburgerbutton'>
                <HamburgerButton />
              </IconWrapper>
            </Right>
          </b.Flex>

          {pressed && data?.myTeams.teams ? (
            <LaunchOptionWrapper>
              <LaunchOption>
                {data?.myTeams.teams!.map((team) => {
                  return (
                    <WorkspaceOption
                      key={team.id}
                      name={team.name}
                      url={team.id}
                      color={team.avatarBackground}
                    />
                  );
                })}
                <b.Box pt={4} pb={3}>
                  <b.Box>
                    <LaunchOptionLink
                      href='/get-started/create'
                      color='blue'
                      fontFamily='CircularPro-Book'>
                      <b.Text textAlign='center'>Create a new workspace</b.Text>
                    </LaunchOptionLink>
                  </b.Box>
                  <b.Box mt={3}>
                    <LaunchOptionLink
                      href='/signin-workspace'
                      color='blue'
                      fontFamily='CircularPro-Book'>
                      <b.Text textAlign='center'>
                        Sign in to another workspace
                      </b.Text>
                    </LaunchOptionLink>
                  </b.Box>
                </b.Box>
              </LaunchOption>
            </LaunchOptionWrapper>
          ) : null}
        </b.Container>
      </Wrapper>
    </HeaderWrapper>
  );
};
