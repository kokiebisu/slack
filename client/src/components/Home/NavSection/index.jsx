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
  // const [rotated, setRotated] = useState(false);
  // const rotateArrow = () => {
  //   if (!rotated) {
  //     TweenLite.to(arrow, 0.3, { rotation: 90 });
  //     setRotated(true);
  //     return;
  //   }
  //   TweenLite.to(arrow, 0.3, { rotation: 0 });
  //   setRotated(false);
  // };
  return (
    <s.Wrapper>
      <NavHeader />
      <NavContent />
    </s.Wrapper>
  );
};
