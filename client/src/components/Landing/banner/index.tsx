import * as React from 'react';
import { useState } from 'react';

// Blocks
import * as b from '../../../styles/blocks';

// Motions
import {
  ButtonMotion,
  TransparentButtonMotion,
} from '../../../animations/Buttons';

// Styles
import {
  Wrapper,
  Content,
  Buttons,
  Button,
  BannerImage,
  Link,
  SubHeader,
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
          <b.Box className='content__wrapper'>
            <b.Box className='content__left'>
              <b.Box wp={95}>
                <SubHeader mb={3}>
                  <b.Text>Work from home</b.Text>
                </SubHeader>
                <Header>
                  <b.Text>
                    Slack brings the team together, wherever you are
                  </b.Text>
                </Header>
                <Description my={4}>
                  <b.Text>
                    With all of your communication and tools in one place,
                    remote teams will stay productive no matter where you’re
                    working from.
                  </b.Text>
                </Description>
                <Buttons>
                  <b.Box>
                    <Button
                      initial='rest'
                      animate='rest'
                      whileHover='hovered'
                      className='button__filled'>
                      <b.Button variants={ButtonMotion}>
                        Try Slack for free
                      </b.Button>
                    </Button>
                    <Button
                      initial='rest'
                      animate='rest'
                      whileHover='hovered'
                      className='button__border'>
                      <b.Button variants={TransparentButtonMotion}>
                        Learn more
                      </b.Button>
                    </Button>
                  </b.Box>
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
            </b.Box>
            <b.Box className='content__right'>
              <BannerImage>
                <b.Flex alignItems='center'>
                  <img
                    src='https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote.jpg'
                    srcSet='https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote.jpg 1x, https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote@2x.jpg 2x'
                    alt='hero'
                  />
                </b.Flex>
              </BannerImage>
            </b.Box>
          </b.Box>
        </Content>
      </b.Container>
    </Wrapper>
  );
};
