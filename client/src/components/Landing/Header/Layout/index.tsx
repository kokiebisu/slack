import * as React from 'react';
import { useState } from 'react';

// Global Styles
import * as b from 'styles/blocks';

// Svg
import { NameLogo } from 'assets/svg/Logo';
import { BottomArrow } from 'assets/svg/Arrows';
import { HamburgerButton } from 'assets/svg';

// Animations
import { launchMotion } from 'animations/Buttons';

// Styles
import {
  Wrapper,
  IconWrapper,
  Right,
  LaunchButtonWrapper,
  LaunchButton,
  SignInButton,
  GetStartedButton,
  GetStartedButtonWrapper,
  IconButtonWrapper,
} from 'components/Landing/Header/Layout/index.styles';

import { MeQuery, useMyTeamsQuery } from 'generated/graphql';
import { Navigation } from 'components/Landing/Header/Navigation';
import { LaunchOptions } from 'components/Landing/Header/Launch/container';
import { useToggleDispatch } from 'context/toggle-context';

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

  const dispatchToggle = useToggleDispatch();

  const [pressed, setPressed] = useState(false);

  return (
    <Wrapper>
      <b.Box>
        <b.Container>
          <b.Flex alignItems='center' justifyContent='space-between'>
            <b.Box>
              <b.Flex alignItems='center'>
                <b.Box top={2} mr={4}>
                  <IconWrapper className='namelogo'>
                    <NameLogo />
                  </IconWrapper>
                </b.Box>
              </b.Flex>
            </b.Box>
            <Right>
              <b.Flex alignItems='center'>
                <Navigation hovered={hovered} onHovered={setHovered} />
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
                <IconButtonWrapper
                  className='hamburgerbutton'
                  onClick={() => dispatchToggle({ type: 'toggle_landing' })}>
                  <HamburgerButton />
                </IconButtonWrapper>
              </b.Flex>
            </Right>
          </b.Flex>

          {pressed && data?.myTeams.teams ? (
            <LaunchOptions teams={data?.myTeams.teams} />
          ) : null}
        </b.Container>
      </b.Box>
    </Wrapper>
  );
};
