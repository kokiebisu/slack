import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// Components
import { Container, Flex, Text, Box } from '../../styles/blocks';

export const Banner = () => {
  return (
    <Box>
      <BannerWrapper>
        <Container>
          <Flex justifyContent='space-between'>
            <BannerLeft>
              <ContentWrapper>
                <Box mb={2}>
                  <Text fontFamily='CircularStd-Medium' fontSize={14} uppercase>
                    Work from home
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={42} fontFamily='LitSans-Medium'>
                    Slack brings the team together, wherever you are
                  </Text>
                </Box>
                <Box my={4}>
                  <Text fontSize={20} lineHeight={1.5}>
                    With all of your communication and tools in one place,
                    remote teams will stay productive no matter where you’re
                    working from.
                  </Text>
                </Box>
                <Flex>
                  <Box initial='rest' animate='rest' whileHover='hovered'>
                    <Button variants={ButtonMotion}>Learn More</Button>
                  </Box>
                  <Box initial='rest' animate='rest' whileHover='hovered'>
                    <Button variants={TransparentButtonMotion} transparent>
                      Contact Us
                    </Button>
                  </Box>
                </Flex>
                <Box mt={3}>
                  <Text fontSize={14} color='#1d1d1d'>
                    Need to create a workspace? &nbsp;
                    <Link>Get started</Link>
                  </Text>
                </Box>
              </ContentWrapper>
            </BannerLeft>
            <BannerRight>
              <img
                src='https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote.jpg'
                srcSet='https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote.jpg 1x, https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote@2x.jpg 2x'
              />
            </BannerRight>
          </Flex>
        </Container>
      </BannerWrapper>
    </Box>
  );
};

const BannerWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;
`;

const BannerLeft = styled.div`
  width: 45%;
`;

const ContentWrapper = styled.div`
  width: 90%;
  color: #1d1d1d;
`;

const RunnerHeader = styled(Text)`
  text-transform: uppercase;
`;

const Link = styled(motion.a)`
  color: #1264a3;
  border-bottom: 1px solid #1264a3;

  &:hover {
    border-width: 2px;
  }
`;

const Button = styled(motion.button)`
  height: 60px;
  padding: 20px 40px;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  border: none;
  font-family: 'CircularStd-Medium';
  border-radius: 3px;
  letter-spacing: 1px;
  cursor: pointer;

  ${({ transparent }) =>
    transparent &&
    css`
      background-color: white;
      border-style: solid;
      border-color: '#612069';
      color: #612069;
    `}
`;

const BannerRight = styled.div`
  display: flex;
  align-items: center;
  width: 55%;

  img {
    width: 100%;
  }
`;

// Motion

const ButtonMotion = {
  rest: {
    backgroundColor: '#612069',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hovered: {
    backgroundColor: '#18071A',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const TransparentButtonMotion = {
  rest: {
    borderWidth: 1,
    transition: {
      duration: 0.1,
      type: 'tween',
      ease: 'easeOut',
    },
  },
  hovered: {
    borderWidth: 2,
    transition: {
      duration: 0.1,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};
