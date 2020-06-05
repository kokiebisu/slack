import React from 'react';
import styled from 'styled-components';

import * as b from '../../styles/blocks';
import { Smile } from '../../assets/svg';
import { AngleRight } from '../../assets/svg/Arrows';

// Images
import slackappicon from '../../assets/img/slack-app.png';

const UpdateState: React.FC<{}> = () => {
  return (
    <UpdateStateWrapper>
      <b.Flex alignItems='center'>
        <b.Box>
          <IconWrapper className='smile'>
            <Smile />
          </IconWrapper>
        </b.Box>
        <b.Box ml={3}>
          <b.Text fontSize={15} color='gray__light'>
            Update your status
          </b.Text>
        </b.Box>
      </b.Flex>
    </UpdateStateWrapper>
  );
};

const UpdateStateWrapper = styled(b.Box)`
  margin: 15px 25px 5px 25px;
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  border-radius: 5px;
  background-color: #ffffff;

  & > div {
    padding: 5px 0;
  }
`;

interface MenuOptionProps {
  name: string;
  withToggle?: boolean;
  openApp?: boolean;
}

const MenuOption: React.FC<MenuOptionProps> = ({
  name,
  withToggle,
  openApp,
}) => {
  return (
    <MenuOptionWrapper>
      <b.Flex justifyContent='space-between' alignItems='center'>
        <b.Box>
          <b.Text fontSize={15} fontFamily='SlackLato-Regular' color='gray'>
            {name}
          </b.Text>
        </b.Box>
        {(withToggle || openApp) && (
          <b.Box>
            <b.Flex>
              {openApp ? (
                <IconWrapper className='slackapp'>
                  <b.Box>
                    <img src={slackappicon} />
                  </b.Box>
                </IconWrapper>
              ) : (
                <IconWrapper className='angleright'>
                  <AngleRight />
                </IconWrapper>
              )}
            </b.Flex>
          </b.Box>
        )}
      </b.Flex>
    </MenuOptionWrapper>
  );
};

const MenuOptionWrapper = styled(b.Box)`
  padding: 5px 25px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    svg {
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

interface ProfileOptionProps {
  title: string;
  subtitle: string;
  state?: string;
  tier?: string;
}

const ProfileOption: React.FC<ProfileOptionProps> = ({
  title,
  subtitle,
  state,
  tier,
}) => {
  return (
    <ProfileOptionWrapper>
      <b.Flex>
        <b.Box pr={2}>
          <b.Flex justifyContent='center' alignItems='center'>
            <b.Box
              height={35}
              width={35}
              borderRadius={3}
              backgroundColor='blue'
            />
          </b.Flex>
        </b.Box>
        <b.Box>
          <b.Box mb={1}>
            <b.Text
              fontSize={15}
              color='black__light'
              fontFamily='SlackLato-Bold'>
              {title}
            </b.Text>
          </b.Box>
          <b.Box>
            <b.Flex>
              <b.Box>
                <b.Text
                  fontFamily='SlackLato-Regular'
                  fontSize={12}
                  color='gray'>
                  {subtitle}
                  <b.Span fontFamily='SlackLato-Bold'>{state}</b.Span> &nbsp;
                </b.Text>
              </b.Box>
              {state && (
                <b.Box>
                  <b.Text
                    fontFamily='SlackLato-Bold'
                    fontSize={12}
                    color='blue'>
                    Change
                  </b.Text>
                </b.Box>
              )}
            </b.Flex>
          </b.Box>
        </b.Box>
      </b.Flex>
      {tier && (
        <b.Box mt={2}>
          <b.Text fontSize={13} fontFamily='SlackLato-Regular' lineHeight={1.6}>
            Your workspace is currently on the {tier} version of Slack. See
            upgrade options
          </b.Text>
        </b.Box>
      )}
    </ProfileOptionWrapper>
  );
};

const ProfileOptionWrapper = styled(b.Box)`
  padding: 5px 25px;
`;

export const MenuToggle = () => {
  return (
    <Wrapper py={2}>
      <Section className='first'>
        <b.Box>
          <ProfileOption
            title='kenichkona'
            subtitle="You're set to "
            state='active'
          />
          <UpdateState />
          <MenuOption name='Pause notifications' withToggle />
          <MenuOption name='View Profile' />
          <MenuOption name='Preferences' />
        </b.Box>
      </Section>
      <Section className='second'>
        <b.Box>
          <ProfileOption title='asdf' subtitle='url.slack.com' tier='free' />
        </b.Box>
      </Section>
      <Section className='third'>
        <MenuOption name='Invite people to Slack' />
        <MenuOption name='Settings & administration' withToggle />
        <MenuOption name='Tools' withToggle />
        <MenuOption name='Help' withToggle />
        <MenuOption name='Sign out of asdf' />
      </Section>
      <Section className='fourth'>
        <MenuOption name='Add workspaces' withToggle />
        <MenuOption name='Open the Slack App' openApp />
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  width: 310px;
  position: absolute;
  top: 96px;
  left: 15px;
  z-index: 9999;
  height: calc(100vh - 130px);
  background-color: ${({ theme }) => theme.colors.white__dark};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;

  @media (max-height: 500px) {
    top: 10px;
    height: calc(100vh - 20px);
  }
`;

const IconWrapper = styled(b.Box)`
  position: relative;
  &.smile {
    margin: 0 5px;
    padding: 1.5px;

    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  &.angleright {
    svg {
      width: 10px;
      height: 10px;
    }
  }

  &.slackapp {
    left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27px;
    height: 27px;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
    border-radius: 100%;

    & > div {
      width: 18px;
      height: 18px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Section = styled(b.Box)`
  &.first {
    padding: 15px 0;
  }

  &.second {
    padding: 15px 0;
  }

  &.third {
    padding: 5px 0;
  }

  &.fourth {
    padding: 5px 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  }
`;
