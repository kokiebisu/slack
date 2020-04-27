import React from 'react';
import { useState } from 'react';

// Component
import { NavHeader } from './NavHeader';
import { NavContent } from './NavContent';

// Block
import { LayoutWrapper } from '../../Blocks';

// Custom
import * as s from './NavSection.styles';

export const NavSection = () => {
  return (
    <s.Wrapper>
      <NavHeader />
      <NavContent />
    </s.Wrapper>
  );
};
