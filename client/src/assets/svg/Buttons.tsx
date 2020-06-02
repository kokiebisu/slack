import * as React from 'react';
import { SVG } from './interface';

export const HamburgerButton: React.FC<SVG> = (props) => {
  return (
    <svg {...props} viewBox='0 0 24 17'>
      <path d='M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z' />
    </svg>
  );
};
