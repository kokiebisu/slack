import * as React from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Styles
import { Wrapper, VideoWrapper, Title } from './index.styles';
import { ColumnCards } from '../card/container';

interface Props {}

export const BreakOut: React.FC<Props> = () => {
  return (
    <Wrapper>
      <b.Container>
        <b.Box>
          <b.Flex flexDirection='column' alignItems='center'>
            <b.Box>
              <Title
                fontFamily='CircularPro-Bold'
                color='black__light'
                lineHeight={1.4}>
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
              <video
                playsInline
                autoPlay
                muted
                loop
                poster='https://a.slack-edge.com/faab8/marketing/img/homepage/video/brand-campaign_inline-poster.jpg'>
                <source
                  src='https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_inline-video.mp4'
                  type='video/mp4'
                />
              </video>
            </VideoWrapper>
          </b.Flex>
        </b.Box>
        <b.Box pt={50} pb={62}>
          <ColumnCards />
        </b.Box>
      </b.Container>
    </Wrapper>
  );
};
