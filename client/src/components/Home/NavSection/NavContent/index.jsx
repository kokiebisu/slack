import React from 'react';
import styled from 'styled-components';

// Components
import { NavOptions } from './NavOptions';
import { NavChannels } from './NavChannels';

export const NavContent = () => {
  return (
    <Wrapper>
      <NavOptions />
      <NavChannels />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
