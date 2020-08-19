import React from 'react';
import {
  Wrapper,
  InnerTop,
  InnerBottom,
  Title,
  Description,
  CheckList,
  LearnMore,
  ImageWrapper,
  IconWrapper,
} from 'styles/Landing/BetterSoftware';

import * as b from 'global/blocks';

import integrations from 'assets/img/slack-integrations.png';
import enterprise from 'assets/img/slack-enterprise.png';

import { CheckCircle } from 'assets/svg';

export const BetterSoftware = () => {
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
              <ImageWrapper>
                <img src={integrations} />
              </ImageWrapper>
            </b.Flex>
          </b.Box>
        </InnerTop>
        <InnerBottom>
          <b.Box>
            <b.Flex justifyContent='center'>
              <ImageWrapper>
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
