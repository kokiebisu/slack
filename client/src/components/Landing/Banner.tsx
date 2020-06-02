import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../styles/blocks';

// Shared Components
import { Title, Link } from './Landing.styles';

// Motions
import {
  ButtonMotion,
  TransparentButtonMotion,
} from '../../animations/Buttons';

// Breakpoints
import { landing } from '../../styles/sizes';

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
                  color='#1D1D1D'
                  fontSize={13}
                  uppercase>
                  Work from home
                </b.Text>
              </b.Box>
              <b.Box>
                <Title
                  fontFamily='Larsseit-Bold'
                  lineHeight={1.4}
                  color='#1D1D1D'>
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
                    borderColor='#612069'
                    color='#612069'
                    variants={TransparentButtonMotion}>
                    Learn more
                  </Button>
                </ButtonWrapper>
              </Buttons>
              <b.Box mt={3}>
                <b.Text fontSize={14} color='#1d1d1d'>
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

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 30px;
`;

const ContentWrapper = styled(b.Flex)`
  display: block;

  @media ${landing.sm} {
    display: flex;
  }
`;

const BannerLeft = styled(b.Box)`
  width: 100%;
  @media ${landing.sm} {
    width: 45%;
  }
`;

const Buttons = styled(b.Flex)`
  display: block;
  @media ${landing.lg} {
    display: flex;
  }
`;

const ButtonWrapper = styled(b.Box)`
  margin-top: 15px;
  margin-left: 0px;

  @media ${landing.lg} {
    margin-top: 0;
    margin-left: 15px;
  }
`;

const Button = styled(b.Button)`
  font-size: 14px;
  font-family: 'CircularPro-Bold';
  border-radius: 3px;
  letter-spacing: 1px;
  width: 100%;
  padding: 20px 0;

  @media ${landing.lg} {
    width: auto;
    height: 60px;
    padding: 20px 40px;
  }
`;

const BannerRight = styled(b.Box)`
  width: 100%;
  margin-top: 20px;
  @media ${landing.sm} {
    width: 55%;
    margin-top: 0;
  }
`;

const ImageWrapper = styled(b.Flex)`
  img {
    width: 100%;
  }
`;
