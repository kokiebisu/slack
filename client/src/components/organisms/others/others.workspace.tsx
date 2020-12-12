import * as React from "react";

// Blocks
import * as b from "global/blocks";

// Styles
import {
  RightWrapper,
  TeamWrapper,
  LeftMock,
  ChannelWrapper,
  BulletSection,
  RightMock,
  SectionTitle,
  BulletPoint,
  Line,
  ContentWrapper,
} from "styles/CreateTeam/Miniworkspace";

// Components

import { Bullet } from "components/atoms/bullet/bullet.component";

// Imgs
import teamphoto_1 from "assets/img/createteam_1.png";
import teamphoto_2 from "assets/img/createteam_2.png";
import teamphoto_3 from "assets/img/createteam_3.png";
import { stagger, fadeInUp } from "animations/FadeInStagger";
import styled, { css } from "styled-components";

export const WorkspaceOthers: React.FC<{
  team?: string;
  channel?: string;
  opacity?: number;
}> = ({ team, channel, opacity = 1, children }) => {
  return (
    <RightWrapper>
      <b.Box animate={{ opacity: opacity }} initial={{ opacity: 0 }}>
        <LeftMock>
          <b.Box>
            <TeamWrapper px={2}>
              {team ? (
                <b.Text color="white" fontFamily="SlackLato-Black">
                  {team}
                </b.Text>
              ) : (
                <SkeletonLine width={90} />
              )}
            </TeamWrapper>

            <ChannelWrapper px={2}>
              {channel ? (
                <b.Text
                  color="white__dark"
                  fontFamily="SlackLato-Black"
                  fontSize={15}
                >
                  Channel
                </b.Text>
              ) : (
                <SkeletonLine width={60} />
              )}
            </ChannelWrapper>
            <b.Box backgroundColor={channel && "green__light"} mt={2} px={2}>
              <b.Flex alignItems="center">
                <b.Box mr={1}>
                  <Bullet variant="hashtag" />
                </b.Box>
                {channel ? (
                  <b.Text
                    color="white__dark"
                    fontFamily="SlackLato-Bold"
                    fontSize={12}
                  >
                    {channel}
                  </b.Text>
                ) : (
                  <SkeletonLine width={80} top={2} />
                )}
              </b.Flex>
            </b.Box>
            {children}
            <b.Box px={2}>
              <b.Flex alignItems="center">
                <b.Box mr={1}>
                  <Bullet variant="hashtag" />
                </b.Box>
                <SkeletonLine width={80} top={2} />
              </b.Flex>
            </b.Box>
            <b.Box px={2}>
              <b.Flex alignItems="center">
                <b.Box mr={1}>
                  <Bullet variant="hashtag" />
                </b.Box>
                <SkeletonLine width={80} top={2} />
              </b.Flex>
            </b.Box>
            <b.Box mt={4} px={2}>
              <b.Box>
                <b.Flex alignItems="center">
                  <b.Box mr={1}>
                    <BulletPoint />
                  </b.Box>
                  <SkeletonLine width={80} />
                </b.Flex>
              </b.Box>
            </b.Box>
            <BulletSection px={2}>
              <b.Box>
                <b.Flex alignItems="center">
                  <b.Box mr={1}>
                    <BulletPoint />
                  </b.Box>
                  <SkeletonLine width={80} />
                </b.Flex>
              </b.Box>
            </BulletSection>
            <BulletSection px={2}>
              <b.Box>
                <b.Flex alignItems="center">
                  <b.Box mr={1}>
                    <BulletPoint />
                  </b.Box>
                  <SkeletonLine width={80} />
                </b.Flex>
              </b.Box>
            </BulletSection>
          </b.Box>
        </LeftMock>
        <RightMock>
          <b.Box>
            <SectionTitle>
              {channel ? (
                <b.Text color="black" fontFamily="SlackLato-Bold" fontSize={17}>
                  {channel}
                </b.Text>
              ) : (
                <SkeletonLine width={70} color="#E8E8E8" />
              )}
            </SectionTitle>
            <b.Box>
              <Line />
            </b.Box>
            {channel && (
              <ContentWrapper variants={stagger}>
                <b.Box mt={2}>
                  <b.Box pt={3} pb={3} variants={fadeInUp}>
                    <img src={teamphoto_1} alt="team_photo_1" />
                  </b.Box>
                  <b.Box py={3} variants={fadeInUp}>
                    <img src={teamphoto_2} alt="team_photo_2" />
                  </b.Box>
                  <b.Box py={3} variants={fadeInUp}>
                    <img src={teamphoto_3} alt="team_photo_3" />
                  </b.Box>
                </b.Box>
              </ContentWrapper>
            )}
          </b.Box>
        </RightMock>
      </b.Box>
    </RightWrapper>
  );
};

const SkeletonLine = styled(b.Box)`
  position: relative;
  background-color: ${({ color }) => (color ? `${color}` : "pink__light")};
  height: 7px;
  border-radius: 5px;
  width: ${({ width }) => `${width}%`};

  ${({ top }) =>
    top &&
    css`
      top: ${top}px;
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom}px;
    `}
`;
