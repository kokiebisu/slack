import React from 'react';
import { Wrapper } from './index.styles';
import * as b from '../../../../styles/blocks';
import { Close } from '../../../../assets/svg';

export const LandingModal = () => {
  const options = [
    { name: 'Why Slack?' },
    { name: 'Solutions' },
    { name: 'Resources' },
    { name: 'Enterprise' },
    { name: 'Pricing' },
  ];
  return (
    <Wrapper>
      <b.Box className='header'>
        <b.Flex>
          <b.Box>
            <NameLogo />
          </b.Box>
          <b.Box>
            <Close />
          </b.Box>
        </b.Flex>
      </b.Box>
      <b.Box className='content'>
        {options.map((option) => {
          return (
            <b.Box>
              <b.Text>{option.name}</b.Text>
            </b.Box>
          );
        })}
      </b.Box>
    </Wrapper>
  );
};
