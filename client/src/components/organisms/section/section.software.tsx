import React from 'react';

// import {
//   Wrapper,
//   InnerTop,
//   InnerBottom,
//   Title,
//   Description,
//   CheckList,
//   LearnMore,
//   ImageWrapper,
//   IconWrapper,
// } from 'styles/Landing/BetterSoftware';

import styled from 'styled-components';
import * as b from 'global/blocks';

// Breakpoints;
import { size } from 'global/sizes';

import integrations from 'assets/img/slack-integrations.png';
import enterprise from 'assets/img/slack-enterprise.png';

import { CheckCircle } from 'assets/svg';
import { SoftwareSectionProps } from './props';

export const SoftwareSection: React.FC<SoftwareSectionProps> = () => {
  return (
    <Wrapper>
      <b.Container>
        <InnerTop>
          <b.Box>
            <b.Flex flexDirection='column' alignItems='center'>
              <Title>
                <b.Text>Slack makes other software better</b.Text>
              </Title>
              <Description>
                <b.Text>
                  Make your tools more accessible and useful by connecting them
                  all in one place.
                </b.Text>
              </Description>
              <CheckList>
                <ul>
                  <li>
                    <b.Flex>
                      <IconWrapper className='checkcircle'>
                        <b.Box>
                          <CheckCircle />
                        </b.Box>
                      </IconWrapper>
                      <b.Box>Connect over 2,200 ready-to-use Slack apps</b.Box>
                    </b.Flex>
                  </li>
                  <li>
                    <b.Flex>
                      <IconWrapper className='checkcircle'>
                        <b.Box>
                          <CheckCircle />
                        </b.Box>
                      </IconWrapper>
                      <b.Box>Build your own tim-saving workflows</b.Box>
                    </b.Flex>
                  </li>
                  <li>
                    <b.Flex>
                      <IconWrapper className='checkcircle'>
                        <b.Box>
                          <CheckCircle />
                        </b.Box>
                      </IconWrapper>
                      <b.Box>
                        Integrate your internal tools with the Slack APIs
                      </b.Box>
                    </b.Flex>
                  </li>
                </ul>
              </CheckList>
              <LearnMore>
                <b.Anchor>
                  <b.Flex>
                    <b.Text>Learn more about integrations</b.Text>
                    <b.Text>&nbsp;→</b.Text>
                  </b.Flex>
                </b.Anchor>
              </LearnMore>
            </b.Flex>
          </b.Box>
          <b.Box>
            <b.Flex justifyContent='center'>
              <ImageWrapper className='integrations'>
                <img src={integrations} />
              </ImageWrapper>
            </b.Flex>
          </b.Box>
        </InnerTop>
        <InnerBottom>
          <b.Box>
            <b.Flex justifyContent='center'>
              <ImageWrapper className='enterprise'>
                <img src={enterprise} />
              </ImageWrapper>
            </b.Flex>
          </b.Box>
          <b.Box>
            <b.Flex flexDirection='column' alignItems='center'>
              <Title>
                <b.Text>Enterprise-grade for everyone</b.Text>
              </Title>
              <Description>
                <b.Text>
                  Companies large and small rely on Slack to help them securely
                  scale their business.
                </b.Text>
              </Description>
              <CheckList>
                <ul>
                  <li>
                    <b.Flex>
                      <IconWrapper className='checkcircle'>
                        <b.Box>
                          <CheckCircle />
                        </b.Box>
                      </IconWrapper>
                      <b.Box>Bridge global departments and offices</b.Box>
                    </b.Flex>
                  </li>
                  <li>
                    <b.Flex>
                      <IconWrapper className='checkcircle'>
                        <b.Box>
                          <CheckCircle />
                        </b.Box>
                      </IconWrapper>
                      <b.Box>
                        Scale up with channels and workspaces of any size
                      </b.Box>
                    </b.Flex>
                  </li>
                  <li>
                    <b.Flex>
                      <IconWrapper className='checkcircle'>
                        <b.Box>
                          <CheckCircle />
                        </b.Box>
                      </IconWrapper>
                      <b.Box>
                        Meet your security and compliance requirements
                      </b.Box>
                    </b.Flex>
                  </li>
                </ul>
              </CheckList>
              <LearnMore>
                <b.Anchor>
                  <b.Flex>
                    <b.Text>Learn more about Slack for enterprise</b.Text>
                    <b.Text>&nbsp;→</b.Text>
                  </b.Flex>
                </b.Anchor>
              </LearnMore>
            </b.Flex>
          </b.Box>
        </InnerBottom>
      </b.Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 70px;

  background-color: ${({ theme }) => theme.colors.white__darker};
`;

const InnerTop = styled(b.Box)`
  margin-bottom: 50px;
  @media ${size.sm} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  & > div:first-child {
    @media ${size.sm} {
      display: flex;
      align-items: center;
      width: 50%;
    }
    @media ${size.md} {
      width: 40%;
    }
  }

  & > div:last-child {
    @media ${size.sm} {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 50%;
    }
    @media ${size.md} {
      width: 60%;
    }
  }
`;

const InnerBottom = styled(b.Box)`
  display: flex;
  flex-direction: column-reverse;
  @media ${size.sm} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & > div:first-child {
    @media ${size.sm} {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
    }
    @media ${size.md} {
      width: 60%;
    }
  }

  & > div:last-child {
    margin-bottom: 30px;
    @media ${size.sm} {
      display: flex;
      align-items: center;
      width: 50%;
      margin-bottom: 0px;
    }
    @media ${size.md} {
      width: 40%;
    }
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

const ImageWrapper = styled(b.Box)`
  position: relative;
  border-radius: 5px;
  &.integrations {
    width: 50%;

    @media ${size.sm} {
      width: 100%;
    }
  }
  &.enterprise {
    max-width: 230px;

    @media ${size.md} {
      max-width: 400px;
    }
  }

  & img {
    width: 100%;
  }
`;

const Title = styled(b.Box)`
  & p {
    font-family: 'SlackLato-Light';
    color: ${({ theme }) => theme.colors.black__light};
    font-size: 48px;
    line-height: 1.2;
    font-family: 'Larsseit-Bold';
  }
`;

const Description = styled(b.Box)`
  margin-top: 16px;
  & p {
    font-size: 18px;
    line-height: 1.4;
    text-align: center;

    @media ${size.md} {
      text-align: left;
    }
  }
`;

const CheckList = styled(b.Box)`
  width: 100%;
  margin: 20px 0;
  & ul {
    padding: 0;
    margin: 0;
    list-style: none;

    & li {
      margin: 15px 0;
    }
  }
`;

const IconWrapper = styled(b.Box)`
  display: flex;
  align-items: center;
  margin-right: 10px;
  & > div {
    & > svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

const ColumnWrapper = styled(b.Box)`
  padding-bottom: 62px;
  @media ${size.sm} {
    padding-top: 50px;
  }
`;
