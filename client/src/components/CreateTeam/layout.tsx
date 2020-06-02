import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import * as b from '../../styles/blocks';
import { HeaderLogo } from '../../assets/svg/Logo';

import { useHistory } from 'react-router-dom';

import { MockHashTag, SkeletonLine } from './mockup';

import teamphoto_1 from '../../assets/img/createteam_1.png';
import teamphoto_2 from '../../assets/img/createteam_2.png';
import teamphoto_3 from '../../assets/img/createteam_3.png';

// Sizes
import { size } from '../../styles/sizes';

interface Props {
  title: string;
  inputPlaceholder?: string;
  requirePolicy?: boolean;
  opacity: number;
  name?: string;
  description?: string;
  buttonName?: string;
  sendInput: (input: string, name: string | undefined) => void;
  nextLink: string;
  team?: string;
  channel?: string;
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
  sendInput,
  nextLink,
  buttonName,
  children,
}) => {
  const [input, setInput] = useState('');
  const history = useHistory();

  return (
    <Wrapper>
      <b.Flex>
        <Left>
          <b.Flex>
            <LeftWrapper>
              <b.Box>
                <b.Text
                  fontFamily='SlackLato-Black'
                  fontSize={26}
                  color='#1D1C1D'>
                  {title}
                </b.Text>
              </b.Box>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendInput(input, name!);
                  setInput('');
                  history.push(nextLink);
                }}>
                {inputPlaceholder && (
                  <b.Box mt={4} mb={3} width={1}>
                    <Input
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value);
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
                    <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
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
                          color='#E8E8E8'
                          fontFamily='SlackLato-Black'
                          fontSize={15}>
                          Channel
                        </b.Text>
                      ) : (
                        <SkeletonLine width={60} />
                      )}
                    </ChannelWrapper>
                    <b.Box backgroundColor={channel && `#2EA683`} mt={2} px={2}>
                      <b.Flex alignItems='center'>
                        <b.Box mr={1}>
                          <MockHashTag />
                        </b.Box>
                        {channel ? (
                          <b.Text
                            color='#E8E8E8'
                            fontFamily='SlackLato-Black'
                            fontSize={13}>
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
                          color='#121212'
                          fontFamily='SlackLato-Black'
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
                      <ContentWrapper>
                        <Content mt={2}>
                          <b.Box pt={3} pb={3}>
                            <img src={teamphoto_1} />
                          </b.Box>
                          <b.Box py={3}>
                            <img src={teamphoto_2} />
                          </b.Box>
                          <b.Box py={3}>
                            <img src={teamphoto_3} />
                          </b.Box>
                        </Content>
                      </ContentWrapper>
                    )}
                  </b.Box>
                </RightMock>
              </b.Box>
            </RightWrapper>
          </b.Flex>
        </Right>
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  width: 100%;
  height: 100%;
`;

const Left = styled(b.Box)`
  width: 100%;

  @media ${size.md} {
    display: block;
    width: 50%;
    padding-right: 58px;
  }

  & > div {
    justify-content: center;
    align-items: center;

    @media ${size.md} {
      justify-content: flex-end;
    }
  }
`;

const Right = styled(b.Box)`
  display: none;
  background-color: #f8f8f8;

  @media ${size.md} {
    display: block;
    width: 50%;
  }
`;

const LeftWrapper = styled(b.Box)`
  max-width: 400px;
`;

const RightWrapper = styled(b.Box)`
  width: 350px;
  height: 325px;

  & > div {
    height: 100%;
    display: grid;
    grid-template-columns: 125px auto;
    opacity: ${({ opacity }) => `${opacity}`};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  }
`;

const TeamWrapper = styled(b.Box)`
  height: 35px;
`;

const ChannelWrapper = styled(b.Box)`
  display: flex;
  align-items: center;
  height: 20px;
`;

const LeftMock = styled(b.Box)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #573a5a;
  padding: 18px 0;

  & > div {
    height: 100%;
  }
`;

const Line = styled(b.Box)`
  height: 2px;
  width: 100%;
  border-radius: 9999px;
  background-color: #e8e8e8;
`;

const BulletSection = styled(b.Box)`
  margin-top: 12px;
`;

const BulletPoint = styled(b.Box)`
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background-color: #caadcd;
`;

const RightMock = styled(b.Box)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #ffffff;
  padding: 18px 15px;

  & > div {
    height: 100%;
  }
`;

const Input = styled(b.Input)`
  width: 100%;
  border: 1px solid #868686;
  border-radius: 7px;
  padding: 15px 0px 15px 15px;
`;

const NextButton = styled(b.Button)`
  width: 100%;
  padding: 12px 0;
  background-color: #4a144b;
  border-radius: 4px;
  color: white;
  font-family: 'SlackLato-Bold';
  font-size: 18px;

  &:hover {
    background-color: #5c2c5d;
  }
`;

const Policy = styled(b.Box)`
  span {
    color: #3a71a9;
  }
`;

const SectionTitle = styled(b.Box)`
  height: 30px;
`;

const ContentWrapper = styled(b.Box)`
  display: grid;
  grid-template-rows: repeat(3, 30px);
`;

const Content = styled(b.Box)``;
