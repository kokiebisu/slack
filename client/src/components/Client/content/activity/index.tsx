import * as React from 'react';
import { useState } from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Img
import Thumbsup from '../../../../assets/img/thumbsup.png';

// Components
import { Reactions } from '../../../shared/Reactions';
import { ToolBox } from '../ToolBox';

import {
  Wrapper,
  Content,
  IconWrapper,
  Name,
  Time,
  Message,
} from './activity.styles';

interface Props {}

export const Activity: React.FC<Props> = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Wrapper
      p={3}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <b.Box>
        <b.Text fontSize={13} color='gray__light' fontFamily='SlackLato-Bold'>
          Thomas Bui - Set E &nbsp;
          <b.Span fontFamily='SlackLato-Regular'>
            reacted to your message
          </b.Span>
        </b.Text>
      </b.Box>
      <b.Box mt={2}>
        <Content>
          <IconWrapper>
            <img src={Thumbsup} alt='icon' />
          </IconWrapper>
          <b.Box>
            <b.Box>
              <b.Flex alignItems='center'>
                <Name mr={2}>
                  <b.Text color='black__light' fontFamily='SlackLato-Black'>
                    ken
                  </b.Text>
                </Name>
                <Time>
                  <b.Text
                    color='gray__light'
                    fontFamily='SlackLato-Regular'
                    fontSize={13}>
                    Yesterday at 2:44 PM
                  </b.Text>
                </Time>
              </b.Flex>
            </b.Box>
            <Message mt={1} mb={2}>
              <b.Text>Too</b.Text>
            </Message>
            <b.Box mt={1}>
              <Reactions />
            </b.Box>
          </b.Box>
        </Content>
      </b.Box>
      {/* <ToolBoxWrapper>{hovered ? <ToolBox /> : null}</ToolBoxWrapper> */}
    </Wrapper>
  );
};
