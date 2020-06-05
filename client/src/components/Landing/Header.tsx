import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Global Styles
import * as b from '../../styles/blocks';
import { landing } from '../../styles/sizes';

// Svg
import { NameLogo } from '../../assets/svg/Logo';
import { BottomArrow } from '../../assets/svg/Arrows';
import { HamburgerButton } from '../../assets/svg';

// Colors
import { avatar } from '../../styles/colors';
import { randomColor } from '../../util/randomColor';

// Animations
import { launchMotion } from '../../animations/Buttons';

// Components
import { Link } from './Landing.styles';
import { WorkspaceOption } from './WorkspaceOption';

// Util
// import { useAuthenticated } from '../../hooks/useAuthenticated';
import { useMeQuery, MeQuery, useMyTeamsQuery } from '../../generated/graphql';

interface Props {
  data: MeQuery | undefined;
}

export const Header: React.FC<Props> = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [hovered, setHovered] = useState({
    why: false,
    solutions: false,
    resources: false,
    enterprise: false,
    pricing: false,
  });

  console.log(`randomColor: `, randomColor(avatar));

  const { data, loading, error } = useMyTeamsQuery();

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
              {data && data.myTeams ? (
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

          {pressed ? (
            <LaunchOptionWrapper>
              <LaunchOption>
                {data?.myTeams.map((team) => {
                  return (
                    <WorkspaceOption
                      key={team.id}
                      name={team.name}
                      url={team.id}
                      color={`${randomColor(avatar)}`}
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

const LaunchOptionWrapper = styled(b.Box)`
  display: none;

  @media ${landing.lg} {
    display: block;
    position: absolute;
    top: 80px;
    right: calc(5%);
    border-radius: 3px;
  }
`;

const LaunchOption = styled(b.Box)`
  padding: 10px;
  min-width: 380px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
`;

const LaunchOptionLink = styled(b.Anchor)`
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;

const Wrapper = styled.div`
  background-color: white;
  height: 70px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.white__dark};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
`;

const Left = styled(b.Flex)``;

const Right = styled(b.Flex)`
  flex-grow: 1;
  justify-content: flex-end;

  @media ${landing.lg} {
    justify-content: space-between;
  }
`;

const Nav = styled.div`
  display: none;
  align-items: center;

  @media ${landing.lg} {
    display: flex;
  }
`;

const NavItem = styled(b.Box)`
  position: relative;
  border: none;
  background-color: transparent;
  padding: 12px 0px;
  margin: 0px 15px;
  font-size: 16px;
  font-family: 'CircularPro-Book';
  cursor: pointer;
`;

const SignInButton = styled(b.Box)`
  color: black;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

const LaunchButtonWrapper = styled(b.Box)``;

const LaunchButton = styled(b.Anchor)`
  display: none;
  padding: 13px 15px;
  text-transform: uppercase;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-family: 'CircularPro-Bold';
  border-radius: 3px;
  letter-spacing: 1px;
  cursor: pointer;

  @media ${landing.lg} {
    display: block;
  }
`;

const GetStartedButtonWrapper = styled(b.Flex)`
  display: none;

  @media ${landing.lg} {
    display: flex;
  }
`;

const GetStartedButton = styled(b.Anchor)`
  letter-spacing: 0.1em;
  background-color: ${({ theme }) => theme.colors.primary__light};
  border-radius: 5px;
  padding: 13px 13px;
`;

const Dropdown = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 45px;
  padding: 13px 20px;
  border-radius: 5px;
`;

const LinkWrapper = styled.div`
  padding: 8px 0;
  display: flex;
`;

const IconWrapper = styled(b.Box)`
  &.namelogo {
    svg {
      width: 100px;
      height: 60px;
      path {
        &:nth-child(2) {
          fill: ${({ theme }) => theme.colors.blue__lighter};
        }
        &:nth-child(3) {
          fill: ${({ theme }) => theme.colors.green__lighter};
        }
        &:nth-child(4) {
          fill: ${({ theme }) => theme.colors.yellow};
        }
        &:nth-child(5) {
          fill: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }

  &.bottomarrow {
    svg {
      height: 10px;
      width: 10px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }

  &.hamburgerbutton {
    svg {
      width: 24px;
      height: 17px;
      path {
        fill: black;
      }
    }

    @media ${landing.lg} {
      display: none;
    }
  }
`;
