import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../styles/blocks';

// Components
import { Activity } from './Activity';

// Svgs
import { AtSign, Close, Settings, Transition } from '../../../assets/svg';

interface Props {
  group: string;
}

export const MentionPage: React.FC<Props> = ({ group }) => {
  useEffect(() => {
    document.title = `Mentions & reactions | ${group}`;
  }, []);

  return (
    <Wrapper>
      <TopWrapper>
        <TopContainer>
          <b.Box>
            <b.Text
              color='black__light'
              fontFamily='SlackLato-Black'
              fontSize={15}>
              Mentions & reactions
            </b.Text>
          </b.Box>
          <b.Flex alignItems='center'>
            <SideOption mr={2}>
              <IconWrapper className='sideoption'>
                <Settings />
              </IconWrapper>
            </SideOption>
            <SideOption>
              <IconWrapper className='sideoption'>
                <Transition />
              </IconWrapper>
            </SideOption>
          </b.Flex>
        </TopContainer>
      </TopWrapper>
      <BottomWrapper>
        <BottomContainer>
          <Notice p={3}>
            <b.Box>
              <b.Flex justifyContent='space-between'>
                <b.Flex alignItems='center'>
                  <IconWrapper className='atsign' mr={2}>
                    <AtSign />
                  </IconWrapper>
                  <b.Box mb={1}>
                    <b.Text
                      color='black__light'
                      fontSize={18}
                      fontFamily='SlackLato-Bold'
                      letterSpacing='-0.025em'>
                      See new activity in real time
                    </b.Text>
                  </b.Box>
                </b.Flex>
                <IconWrapper className='close'>
                  <Close />
                </IconWrapper>
              </b.Flex>
            </b.Box>
            <b.Box mt={3}>
              <b.Text
                fontFamily='SlackLato-Regular'
                fontSize={15}
                color='black__light'>
                When people react to your messages or mention you or your
                keywords, you’ll see it here.
              </b.Text>
            </b.Box>
          </Notice>
          <Activity />
          <Activity />
        </BottomContainer>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  display: grid;
  grid-template-rows: 65px auto;
`;

const TopWrapper = styled(b.Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white__dark};
  height: 100%;
`;

const TopContainer = styled(b.Flex)`
  justify-content: space-between;
  align-items: center;
  height: inherit;
  padding: 0 19px;
`;

const BottomWrapper = styled(b.Box)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white__dark};
`;

const BottomContainer = styled(b.Box)`
  width: 100%;
  margin: 20px 20px 0 20px;
`;

const Notice = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.white__dark};
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 25px;
`;

const SideOption = styled(b.Box)`
  padding: 8px 10px 6px 10px;
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
    border-radius: 3px;
  }
`;

const IconWrapper = styled(b.Box)`
  &.atsign {
    svg {
      width: 17px;
      height: 17px;
      path {
        fill: ${({ theme }) => theme.colors.orange__dark};
      }
    }
  }

  &.close {
    svg {
      width: 13px;
      height: 13px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  &.sideoption {
    width: 17px;
    height: 17px;
    path {
      fill: ${({ theme }) => theme.colors.gray};
    }
  }
`;
