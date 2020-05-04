import React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../styles/blocks';

// Shared Components
import { Title } from './Landing.styles';

export const BreakOut = () => {
  return (
    <Wrapper>
      <Container>
        <b.Box>
          <b.Flex flexDirection='column' alignItems='center'>
            <b.Box>
              <Title fontFamily='KeepCalm-Medium' lineHeight={1.4}>
                Break out of the inbox
              </Title>
            </b.Box>
            <b.Box my={3}>
              <b.Text center fontSize={16} lineHeight={1.5}>
                Working in channels gives everyone on your team a shared view of
                progress and purpose.
              </b.Text>
            </b.Box>
          </b.Flex>
        </b.Box>
        <b.Box mt={4}>
          <b.Flex justifyContent='center'>
            <VideoWrapper>
              <video playsInline autoPlay muted loop>
                <source
                  src='https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_inline-video.mp4'
                  type='video/mp4'
                />
              </video>
            </VideoWrapper>
          </b.Flex>
        </b.Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 30px;
`;

const Container = styled(b.Container)`
  max-width: 570px;
  @media (min-width: 768px) {
    max-width: none;
  }
`;

const VideoWrapper = styled(b.Box)`
  video {
    width: 100%;
  }

  @media (min-width: 962px) {
    max-width: 800px;
  }
`;
