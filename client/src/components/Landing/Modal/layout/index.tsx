import React from 'react';
import {
  Wrapper,
  IconWrapper,
  IconButtonWrapper,
  Option,
} from './index.styles';
import * as b from '../../../../styles/blocks';
import { Close } from '../../../../assets/svg';
import { NameLogo } from '../../../../assets/svg/Logo';
import { ChevronRight } from '../../../../assets/svg/Arrows';
import { useToggleDispatch } from '../../../../context/toggle-context';

export const LandingModal = () => {
  const dispatchToggle = useToggleDispatch();

  const options = [
    { name: 'Why Slack?', sub: [] },
    { name: 'Solutions', sub: [] },
    { name: 'Resources', sub: [] },
    { name: 'Enterprise' },
    { name: 'Pricing' },
  ];
  return (
    <Wrapper>
      <b.Box className='header'>
        <b.Flex justifyContent='space-between' alignItems='center'>
          <IconWrapper className='logo'>
            <NameLogo />
          </IconWrapper>
          <IconButtonWrapper
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
    </Wrapper>
  );
};
