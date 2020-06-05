import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Thumbsup from '../../../assets/img/thumbsup.png';

import { Reactions } from '../../shared/Reactions';

import * as b from '../../../styles/blocks';

import { ToolBox } from './ToolBox';

interface Props {}

export const Activity: React.FC<Props> = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <ActivityWrapper
      p={3}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <TopContainer>
        <b.Text fontSize={13} color='gray__light' fontFamily='SlackLato-Bold'>
          Thomas Bui - Set E &nbsp;
          <b.Span fontFamily='SlackLato-Regular'>
            reacted to your message
          </b.Span>
        </b.Text>
      </TopContainer>
      <b.Box mt={2}>
        <ActivityContent>
          <b.Box>
            <img width={30} height={30} src={Thumbsup} alt='icon' />
          </b.Box>
          <b.Box>
            <b.Box>
              <b.Flex alignItems='center'>
                <UserWrapper mr={2}>
                  <b.Text color='black__light' fontFamily='SlackLato-Black'>
                    ken
                  </b.Text>
                </UserWrapper>
                <b.Box>
                  <b.Text
                    color='gray__light'
                    fontFamily='SlackLato-Regular'
                    fontSize={13}>
                    Yesterday at 2:44 PM
                  </b.Text>
                </b.Box>
              </b.Flex>
            </b.Box>
            <Message mt={1} mb={2}>
              <b.Text
                color='black__light'
                fontFamily='SlackLato-Regular'
                fontSize={13}>
                Too
              </b.Text>
            </Message>
            <b.Box mt={1}>
              <Reactions />
            </b.Box>
          </b.Box>
        </ActivityContent>
      </b.Box>
      <ToolBoxWrapper>{hovered ? <ToolBox /> : null}</ToolBoxWrapper>
    </ActivityWrapper>
  );
};

const ActivityWrapper = styled(b.Button)`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white__dark};
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 25px;
`;

const ActivityContent = styled(b.Box)`
  display: grid;
  grid-template-columns: 50px auto;
`;

const TopContainer = styled(b.Box)`
  text-align: left;
`;

const UserWrapper = styled(b.Box)`
  position: relative;
  bottom: 1px;
`;

const Message = styled(b.Box)`
  text-align: left;
`;

const ToolBoxWrapper = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 10px;
  right: 10px;
`;
