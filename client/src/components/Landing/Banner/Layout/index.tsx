import * as React from 'react';
import { useState } from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Motions
import {
  ButtonMotion,
  TransparentButtonMotion,
} from '../../../../animations/Buttons';

// Styles
import {
  Wrapper,
  Content,
  Buttons,
  Button,
  BannerVideo,
  Header,
  Description,
} from './index.styles';

interface Props {}

export const Banner: React.FC<Props> = () => {
  const [hovered, setHovered] = useState({
    started: false,
  });

  return (
    <Wrapper>
      <b.Container>
        <Content>
          <b.Box>
            <b.Box className='content__left'>
              <b.Box>
                <Header>
                  <b.Text>Slack is where work happens</b.Text>
                </Header>
                <Description my={4}>
                  <b.Text>
                    With channels in Slack, you and your team know where to go
                    to ask questions, share updates and stay in the loop.
                  </b.Text>
                </Description>
                <Buttons>
                  <b.Box>
                    <Button
                      initial='rest'
                      animate='rest'
                      whileHover='hovered'
                      className='button__filled'>
                      <b.Button variants={ButtonMotion}>Try for free</b.Button>
                    </Button>
                    <Button
                      initial='rest'
                      animate='rest'
                      whileHover='hovered'
                      className='button__border'>
                      <b.Button variants={TransparentButtonMotion}>
                        Contact Sales
                      </b.Button>
                    </Button>
                  </b.Box>
                </Buttons>
              </b.Box>
            </b.Box>
            <b.Box className='content__right'>
              <BannerVideo className='desktop'>
                <b.Flex alignItems='center'>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster='https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/desktop/image/hero-image.png'>
                    <source
                      src='https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/desktop/mp4/hero-image.mp4'
                      type='video/mp4'
                    />
                    <source
                      src='https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/desktop/webm/hero-image.webm'
                      type='video/mp4'
                    />
                  </video>
                </b.Flex>
              </BannerVideo>
              <BannerVideo className='tablet'>
                <b.Flex alignItems='center'>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster='https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/tablet/image/hero-image-tablet.png'>
                    <source
                      src='https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/tablet/mp4/hero-image-tablet.mp4'
                      type='video/mp4'
                    />
                    <source
                      src='https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/tablet/webm/hero-image-tablet.webm'
                      type='video/mp4'
                    />
                  </video>
                </b.Flex>
              </BannerVideo>
            </b.Box>
          </b.Box>
        </Content>
      </b.Container>
    </Wrapper>
  );
};
