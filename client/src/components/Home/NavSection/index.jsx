import React from 'react';

// Component
import { NavHeader } from './NavHeader';
import { NavContent } from './NavContent';

import styled from 'styled-components';

export const NavSection = () => {
  return (
    <Wrapper>
      <NavHeader />
      <NavContent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0;
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
`;
