import React from 'react';
import {
  Wrapper,
  InnerTop,
  Title,
  Description,
  CheckList,
  LearnMore,
  ImageWrapper,
  IconWrapper,
} from './index.styles';

import * as b from '../../../../styles/blocks';

import integrations from '../../../../assets/img/slack-integrations.png';

import { CheckCircle } from '../../../../assets/svg';

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
      </b.Container>
    </Wrapper>
  );
};
