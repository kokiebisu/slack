import React from "react";
import styled, { css } from "styled-components";
import * as b from "global/blocks";
import { size } from "global/sizes";

/** components */
import { Button } from "components/atoms/button";

export const BannerPrototype: React.FC<{}> = () => {
  return (
    <Wrapper>
      <b.Container>
        <Content>
          <b.Box>
            <b.Box className="content__left">
              <b.Box>
                <div>
                  <Header>Slack is where work happens</Header>
                </div>
                <b.Box my={4}>
                  <Description>
                    With channels in Slack, you and your team know where to go
                    to ask questions, share updates and stay in the loop.
                  </Description>
                </b.Box>
                <Buttons>
                  <b.Box mr={2} mb={2}>
                    <Button variant="primary" title="Try for free" />
                  </b.Box>
                  <div>
                    <Button variant="primary" inverse title="Contact Sales" />
                  </div>
                </Buttons>
              </b.Box>
            </b.Box>
            <b.Box className="content__right">
              <BannerVideo className="desktop">
                <b.Flex alignItems="center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/desktop/image/hero-image.png"
                  >
                    <source
                      src="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/desktop/mp4/hero-image.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/desktop/webm/hero-image.webm"
                      type="video/mp4"
                    />
                  </video>
                </b.Flex>
              </BannerVideo>
              <BannerVideo className="tablet">
                <b.Flex alignItems="center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/tablet/image/hero-image-tablet.png"
                  >
                    <source
                      src="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/tablet/mp4/hero-image-tablet.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/tablet/webm/hero-image-tablet.webm"
                      type="video/mp4"
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

const Wrapper = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.white__darker};
`;

const Content = styled(b.Box)`
  & > div {
    @media ${size.xs} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  & div {
    &.content__left {
      width: 100%;

      @media ${size.md} {
        max-width: 450px;
        height: min-content;
      }
      & > div {
        @media ${size.md} {
          width: 95%;
        }
      }
    }
    &.content__right {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      @media ${size.xs} {
        margin-top: 0;
      }
    }
  }
`;

const Header = styled.h3`
  font-family: "Larsseit-Bold";
  line-height: 1.1;
  font-size: 60px;
  color: ${({ theme }) => theme.colors.black__light};
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.3;
`;

const Buttons = styled(b.Box)`
  display: block;
  @media ${size.lg} {
    display: flex;
  }
`;

const BannerVideo = styled(b.Box)`
  &.tablet {
    display: block;
    width: 100%;
    & video {
      width: 100%;
    }
    @media ${size.md} {
      max-width: 400px;
    }

    @media ${size.lg} {
      display: none;
    }
  }

  &.desktop {
    display: none;
    @media ${size.lg} {
      display: block;
      width: 100%;
      max-width: 1000px;
      & video {
        width: 100%;
      }
    }
  }
`;

export const Link = styled(b.Anchor)`
  text-transform: none;

  &.hovered {
    color: #1264a3;
    border-bottom: 1px solid #1264a3;
    cursor: pointer !important;
  }

  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `}
`;

export const Title = styled(b.Text)`
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
