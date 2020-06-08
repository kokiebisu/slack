import * as React from 'react';
import { Dispatch, SetStateAction, FormEvent } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Blocks
import * as b from '../../../styles/blocks';

// Svgs
import { NameLogo } from '../../../assets/svg/Logo';

// Components
import { MockHashTag, SkeletonLine } from '../mockup';

// Imgs
import teamphoto_1 from '../../../assets/img/createteam_1.png';
import teamphoto_2 from '../../../assets/img/createteam_2.png';
import teamphoto_3 from '../../../assets/img/createteam_3.png';

// Sizes
import { size } from '../../../styles/sizes';

// Animations
import { stagger, fadeInUp } from '../../../animations/FadeInStagger';

// Styles
import {
  Wrapper,
  HeaderWrapper,
  HeaderContainer,
  InnerWrapper,
  Left,
  Right,
  LeftWrapper,
  RightWrapper,
  TeamWrapper,
  ChannelWrapper,
  LeftMock,
  Line,
  BulletSection,
  BulletPoint,
  RightMock,
  Input,
  NextButton,
  Policy,
  SectionTitle,
  ContentWrapper,
  IconWrapper,
} from './layout.styles';

interface Props {
  title: string;
  inputPlaceholder?: string;
  requirePolicy?: boolean;
  opacity: number;
  name?: string;
  description?: string;
  buttonName?: string;
  team?: string;
  channel?: string;
  authenticated?: boolean;
  transaction: (e: FormEvent<HTMLFormElement>) => void;
  input: string;
  modifyInput: Dispatch<SetStateAction<string>>;
}

export const CreateTeamLayout: React.FC<Props> = ({
  title,
  inputPlaceholder,
  team,
  channel,
  requirePolicy,
  opacity,
  name,
  description,
  buttonName,
  children,
  authenticated,
  transaction,
  input,
  modifyInput,
}) => {
  return (
    <Wrapper exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <HeaderWrapper>
        <HeaderContainer>
          <b.Container>
            <b.Flex alignItems='center' justifyContent='center'>
              <Link to='/'>
                <IconWrapper mr={4} className='namelogo'>
                  <NameLogo />
                </IconWrapper>
              </Link>
            </b.Flex>
          </b.Container>
        </HeaderContainer>
      </HeaderWrapper>
      <InnerWrapper>
        <b.Flex>
          <Left>
            <b.Flex>
              <LeftWrapper>
                <b.Box>
                  <b.Text
                    fontFamily='SlackLato-Black'
                    fontSize={26}
                    color='black__light'>
                    {title}
                  </b.Text>
                </b.Box>
                <form onSubmit={transaction}>
                  {inputPlaceholder && (
                    <b.Box mt={4} mb={3} width={1}>
                      <Input
                        value={input}
                        onChange={(e) => {
                          modifyInput(e.target.value);
                        }}
                        placeholder={inputPlaceholder}
                      />
                    </b.Box>
                  )}
                  {description && (
                    <b.Box mt={4} mb={3} width={1}>
                      <b.Text lineHeight={1.7}>{description}</b.Text>
                    </b.Box>
                  )}
                  <b.Box width={1}>
                    <NextButton name={name} type='submit'>
                      <b.Text>{buttonName ? `${buttonName}` : `Next`}</b.Text>
                    </NextButton>
                  </b.Box>
                </form>
                {requirePolicy ? (
                  <Policy my={4}>
                    <b.Text fontSize={12} fontFamily='SlackLato-Light'>
                      By continuing, you're agreeing to our{' '}
                      <span>Customer Terms of Service</span>,{' '}
                      <span>Privacy Policy</span>, and{' '}
                      <span>Cookie Policy</span>.
                    </b.Text>
                  </Policy>
                ) : null}
              </LeftWrapper>
            </b.Flex>
          </Left>
          <Right pl={5}>
            <b.Flex alignItems='center'>
              <RightWrapper>
                <b.Box animate={{ opacity: opacity }} initial={{ opacity: 0 }}>
                  <LeftMock>
                    <b.Box>
                      <TeamWrapper px={2}>
                        {team ? (
                          <b.Text color='white' fontFamily='SlackLato-Black'>
                            {team}
                          </b.Text>
                        ) : (
                          <SkeletonLine width={90} />
                        )}
                      </TeamWrapper>

                      <ChannelWrapper px={2}>
                        {channel ? (
                          <b.Text
                            color='white__dark'
                            fontFamily='SlackLato-Black'
                            fontSize={15}>
                            Channel
                          </b.Text>
                        ) : (
                          <SkeletonLine width={60} />
                        )}
                      </ChannelWrapper>
                      <b.Box
                        backgroundColor={channel && 'green__light'}
                        mt={2}
                        px={2}>
                        <b.Flex alignItems='center'>
                          <b.Box mr={1}>
                            <MockHashTag />
                          </b.Box>
                          {channel ? (
                            <b.Text
                              color='white__dark'
                              fontFamily='SlackLato-Bold'
                              fontSize={12}>
                              {channel}
                            </b.Text>
                          ) : (
                            <SkeletonLine width={80} top={2} />
                          )}
                        </b.Flex>
                      </b.Box>
                      {children}
                      <b.Box px={2}>
                        <b.Flex alignItems='center'>
                          <b.Box mr={1}>
                            <MockHashTag />
                          </b.Box>
                          <SkeletonLine width={80} top={2} />
                        </b.Flex>
                      </b.Box>
                      <b.Box px={2}>
                        <b.Flex alignItems='center'>
                          <b.Box mr={1}>
                            <MockHashTag />
                          </b.Box>
                          <SkeletonLine width={80} top={2} />
                        </b.Flex>
                      </b.Box>
                      <b.Box mt={4} px={2}>
                        <b.Box>
                          <b.Flex alignItems='center'>
                            <b.Box mr={1}>
                              <BulletPoint />
                            </b.Box>
                            <SkeletonLine width={80} />
                          </b.Flex>
                        </b.Box>
                      </b.Box>
                      <BulletSection px={2}>
                        <b.Box>
                          <b.Flex alignItems='center'>
                            <b.Box mr={1}>
                              <BulletPoint />
                            </b.Box>
                            <SkeletonLine width={80} />
                          </b.Flex>
                        </b.Box>
                      </BulletSection>
                      <BulletSection px={2}>
                        <b.Box>
                          <b.Flex alignItems='center'>
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
                          <b.Text
                            color='black'
                            fontFamily='SlackLato-Bold'
                            fontSize={17}>
                            {channel}
                          </b.Text>
                        ) : (
                          <SkeletonLine width={70} color='#E8E8E8' />
                        )}
                      </SectionTitle>
                      <b.Box>
                        <Line />
                      </b.Box>
                      {channel && (
                        <ContentWrapper variants={stagger}>
                          <b.Box mt={2}>
                            <b.Box pt={3} pb={3} variants={fadeInUp}>
                              <img src={teamphoto_1} alt='team_photo_1' />
                            </b.Box>
                            <b.Box py={3} variants={fadeInUp}>
                              <img src={teamphoto_2} alt='team_photo_2' />
                            </b.Box>
                            <b.Box py={3} variants={fadeInUp}>
                              <img src={teamphoto_3} alt='team_photo_3' />
                            </b.Box>
                          </b.Box>
                        </ContentWrapper>
                      )}
                    </b.Box>
                  </RightMock>
                </b.Box>
              </RightWrapper>
            </b.Flex>
          </Right>
        </b.Flex>
      </InnerWrapper>
    </Wrapper>
  );
};
