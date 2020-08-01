import * as React from 'react';

// Blocks
import * as b from 'global/blocks';

// Styles
import {
  Wrapper,
  VideoWrapper,
  Title,
  Inner,
  Description,
  ColumnWrapper,
  LearnMore,
} from 'components/Landing/BringTeam/Layout/index.styles';
import { ColumnCards } from 'components/Landing/BringTeam/Card/container';

interface Props {}

export const BringTeam: React.FC<Props> = () => {
  return (
    <Wrapper>
      <b.Container>
        <Inner>
          <b.Box>
            <b.Flex flexDirection='column' alignItems='center'>
              <b.Box>
                <Title
                  fontFamily='CircularPro-Bold'
                  color='black__light'
                  lineHeight={1.4}>
                  Bring your team together in channels
                </Title>
              </b.Box>
              <b.Box my={3}>
                <Description>
                  A channel is the place for everything related to a project,
                  topic or team. Everyone in a channel sees the same messages
                  and stays on the same page.
                </Description>
              </b.Box>
              <LearnMore>
                <b.Anchor>
                  <b.Flex>
                    <b.Text>Learn more about channels</b.Text>
                    <b.Text>&nbsp;→</b.Text>
                  </b.Flex>
                </b.Anchor>
              </LearnMore>
            </b.Flex>
          </b.Box>
          <b.Box mt={4} className='video'>
            <b.Flex justifyContent='center'>
              <VideoWrapper>
                <video
                  playsInline
                  autoPlay
                  muted
                  loop
                  poster='https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/channels/image/bring-your-team-together-in-channels.jpg'>
                  <source
                    src='https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/channels/mp4/bring-your-team-together-in-channels.mp4'
                    type='video/mp4'
                  />
                  <source
                    src='https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/channels/webm/bring-your-team-together-in-channels.webm'
                    type='video/mp4'
                  />
                </video>
              </VideoWrapper>
            </b.Flex>
          </b.Box>
        </Inner>
        <ColumnWrapper>
          <ColumnCards />
        </ColumnWrapper>
      </b.Container>
    </Wrapper>
  );
};
