import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../styles/blocks';

// Motions
import {
  ButtonMotion,
  TransparentButtonMotion,
} from '../../../animations/Buttons';

// Breakpoints
import { landing } from '../../../styles/sizes';

import {
  Wrapper,
  ContentWrapper,
  BannerLeft,
  Buttons,
  Button,
  ButtonWrapper,
  BannerRight,
  ImageWrapper,
  Link,
  Title,
} from './banner.styles';

interface Props {}

export const Banner: React.FC<Props> = () => {
  const [hovered, setHovered] = useState({
    started: false,
  });

  return (
    <Wrapper>
      <b.Container>
        <ContentWrapper justifyContent='space-between'>
          <BannerLeft>
            <b.Box wp={95}>
              <b.Box mb={3}>
                <b.Text
                  fontFamily='CircularPro-Bold'
                  color='black__light'
                  fontSize={13}
                  uppercase>
                  Work from home
                </b.Text>
              </b.Box>
              <b.Box>
                <Title
                  fontFamily='Larsseit-Bold'
                  lineHeight={1.4}
                  color='black__light'>
                  Slack brings the team together, wherever you are
                </Title>
              </b.Box>
              <b.Box my={4}>
                <b.Text fontSize={20} lineHeight={1.5}>
                  With all of your communication and tools in one place, remote
                  teams will stay productive no matter where you’re working
                  from.
                </b.Text>
              </b.Box>
              <Buttons>
                <b.Box initial='rest' animate='rest' whileHover='hovered'>
                  <Button
                    noborder
                    uppercase
                    color='white'
                    variants={ButtonMotion}>
                    Try Slack for free
                  </Button>
                </b.Box>
                <ButtonWrapper
                  initial='rest'
                  animate='rest'
                  whileHover='hovered'>
                  <Button
                    uppercase
                    transparent
                    borderColor='primary__light'
                    color='primary__light'
                    variants={TransparentButtonMotion}>
                    Learn more
                  </Button>
                </ButtonWrapper>
              </Buttons>
              <b.Box mt={3}>
                <b.Text fontSize={14} color='black__light'>
                  Need to create a workspace? &nbsp;
                  <Link
                    className={hovered.started ? `hovered` : ``}
                    onMouseEnter={() =>
                      setHovered({ ...hovered, started: true })
                    }
                    onMouseLeave={() =>
                      setHovered({ ...hovered, started: false })
                    }>
                    Get started
                  </Link>
                </b.Text>
              </b.Box>
            </b.Box>
          </BannerLeft>
          <BannerRight>
            <ImageWrapper alignItems='center'>
              <img
                src='https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote.jpg'
                srcSet='https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote.jpg 1x, https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote@2x.jpg 2x'
                alt='hero'
              />
            </ImageWrapper>
          </BannerRight>
        </ContentWrapper>
      </b.Container>
    </Wrapper>
  );
};
