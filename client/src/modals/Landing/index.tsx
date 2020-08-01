import React, { useEffect } from 'react';
import {
  Wrapper,
  IconWrapper,
  IconButtonWrapper,
  Option,
  Buttons,
  Button,
} from 'styles/Modal/Landing';
import * as b from 'global/blocks';
import { Close } from 'assets/svg';
import { NameLogo } from 'assets/svg/Logo';
import { ChevronRight } from 'assets/svg';
import { useToggleDispatch } from 'context/toggle-context';
import { TransparentButtonMotion } from 'animations/Buttons';

import { useMyTeamsQuery } from 'generated/graphql';

export const LandingModal = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'initial';
    };
  }, []);
  const dispatchToggle = useToggleDispatch();

  const options = [
    { name: 'Why Slack?', sub: [] },
    { name: 'Solutions', sub: [] },
    { name: 'Resources', sub: [] },
    { name: 'Enterprise' },
    { name: 'Pricing' },
  ];

  const { data, loading } = useMyTeamsQuery();

  return (
    <Wrapper>
      <b.Box className='header'>
        <b.Flex justifyContent='space-between' alignItems='center'>
          <IconWrapper className='logo'>
            <NameLogo />
          </IconWrapper>
          <IconButtonWrapper
            className='close'
            onClick={() => dispatchToggle({ type: 'toggle_landing' })}>
            <Close />
          </IconButtonWrapper>
        </b.Flex>
      </b.Box>
      <b.Box className='content'>
        {options.map((option) => {
          return (
            <Option>
              <b.Flex justifyContent='space-between' alignItems='center'>
                <b.Box>
                  <b.Text>{option.name}</b.Text>
                </b.Box>
                {option.sub && (
                  <b.Box>
                    <IconWrapper className='arrow'>
                      <ChevronRight />
                    </IconWrapper>
                  </b.Box>
                )}
              </b.Flex>
            </Option>
          );
        })}
      </b.Box>
      <Buttons>
        <b.Box>
          {!loading &&
          data &&
          data.myTeams.teams! &&
          data.myTeams.teams!.length > 0 ? (
            <Button
              initial='rest'
              animate='rest'
              whileHover='hovered'
              className='button__filled'>
              <b.Button>Sign In</b.Button>
            </Button>
          ) : (
            <Button
              initial='rest'
              animate='rest'
              whileHover='hovered'
              className='button__filled'>
              <b.Button>Launch</b.Button>
            </Button>
          )}
          <Button
            initial='rest'
            animate='rest'
            whileHover='hovered'
            className='button__border'>
            <b.Button variants={TransparentButtonMotion}>
              Download Slack
            </b.Button>
          </Button>
        </b.Box>
      </Buttons>
    </Wrapper>
  );
};
