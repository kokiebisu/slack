import * as React from 'react';
import styled from 'styled-components';

/**
 * Global
 */
import * as b from 'global/blocks';
import { size } from 'global/sizes';

/**
 * Props
 */
import { TogetherTemplateProps } from './props';

/**
 * Components
 */
import { Bullet } from 'components/atoms/bullet/bullet.component';

export const TogetherTemplate: React.FC<TogetherTemplateProps> = () => {
  const bullets = ['share', 'connect', 'collaborate'];
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
                <Bullet type='more' more='channels' />
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
          <Columns>
            <b.Flex>
              {bullets.map((bullet, index) => {
                return (
                  <BulletWrapper key={index}>
                    <Bullet type='together' together={bullet} />
                  </BulletWrapper>
                );
              })}
            </b.Flex>
          </Columns>
        </ColumnWrapper>
      </b.Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 30px;

  @media ${size.lg} {
    padding-top: 0px;
  }
`;

const Inner = styled(b.Box)`
  @media ${size.md} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const LearnMore = styled(b.Box)`
  width: 100%;
  & > a {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.blue};
  }

  & div {
    justify-content: center;
    @media ${size.lg} {
      justify-content: flex-start;
    }
  }
`;

const VideoWrapper = styled(b.Box)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;

  @media ${size.md} {
    flex-grow: 1;
    padding-right: 50px;
    bottom: 50px;
  }

  video {
    border-radius: 5px;
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 1.5rem rgba(105, 105, 105, 0.5);
  }
`;

const Title = styled(b.Text)`
  font-size: 5vw;
  line-height: 43px;
  font-family: 'Larsseit-Bold';

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 55px;
  }

  @media (min-width: 1163px) {
    font-size: 46px;
  }
`;

const Description = styled(b.Text)`
  font-size: 18px;
  line-height: 1.4;
  text-align: center;

  @media ${size.md} {
    text-align: left;
  }
`;

const ColumnWrapper = styled(b.Box)`
  padding-bottom: 62px;
  @media ${size.sm} {
    padding-top: 50px;
  }
`;

const Columns = styled(b.Box)`
  & > div {
    flex-wrap: wrap;
  }
`;

const BulletWrapper = styled.div`
  width: 100%;
  margin-top: 50px;

  @media ${size.lg} {
    width: 50%;
  }

  @media ${size.xl} {
    width: 33%;
  }

  & > div {
    padding-right: 15px;
  }
`;
