import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// Blocks
import * as b from '../../styles/blocks';

// Motions
import {
  ButtonMotion,
  TransparentButtonMotion,
} from '../../animations/Buttons';

export const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper justifyContent='space-between'>
          <BannerLeft>
            <b.Box wp={95}>
              <b.Box mb={3}>
                <b.Text fontFamily='CircularStd-Medium' fontSize={14} uppercase>
                  Work from home
                </b.Text>
              </b.Box>
              <b.Box>
                <Title fontFamily='KeepCalm-Medium' lineHeight={1.4}>
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
                    Learn More
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
                    Contact Us
                  </Button>
                </ButtonWrapper>
              </Buttons>
              <b.Box mt={3}>
                <b.Text fontSize={14} color='#1d1d1d'>
                  Need to create a workspace? &nbsp;
                  <Link>Get started</Link>
                </b.Text>
              </b.Box>
            </b.Box>
          </BannerLeft>
          <BannerRight>
            <ImageWrapper alignItems='center'>
              <img
                src='https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote.jpg'
                srcSet='https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote.jpg 1x, https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote@2x.jpg 2x'
              />
            </ImageWrapper>
          </BannerRight>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;
`;

const Link = styled.a`
  color: #1264a3;
  border-bottom: 1px solid #1264a3;

  &:hover {
    border-width: 2px;
  }
`;

const Button = styled(b.Button)`
  font-size: 14px;
  font-family: 'CircularStd-Medium';
  border-radius: 3px;
  letter-spacing: 1px;
  width: 100%;
  padding: 20px 0;

  @media (min-width: 1163px) {
    width: auto;
    height: 60px;
    padding: 20px 40px;
  }
`;

const Title = styled(b.Text)`
  font-size: 5vw;
  line-height: 40px;

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 55px;
  }

  @media (min-width: 1163px) {
    font-size: 46px;
  }
`;

const ImageWrapper = styled(b.Flex)`
  img {
    width: 100%;
  }
`;

const ContentWrapper = styled(b.Flex)`
  display: block;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Container = styled(b.Container)`
  max-width: 570px;
  @media (min-width: 768px) {
    max-width: none;
  }
`;

const Buttons = styled(b.Flex)`
  display: block;
  @media (min-width: 1163px) {
    display: flex;
  }
`;

const BannerLeft = styled(b.Box)`
  width: 100%;
  @media (min-width: 768px) {
    width: 45%;
  }
`;

const BannerRight = styled(b.Box)`
  width: 100%;
  margin-top: 20px;
  @media (min-width: 768px) {
    width: 55%;
    margin-top: 0;
  }
`;

const ButtonWrapper = styled(b.Box)`
  margin-top: 15px;
`;
