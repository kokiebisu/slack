import * as React from 'react';
import { SVG } from './interface';

export const HashTag: React.FC<SVG> = (props) => {
  return (
    <svg {...props} viewBox='0 0 16 16'>
      <path
        fill={props.color}
        d='M15 6v-2h-2.6l0.6-2.8-2-0.4-0.7 3.2h-3l0.7-2.8-2-0.4-0.7 3.2h-3.3v2h2.9l-0.9 4h-3v2h2.6l-0.6 2.8 2 0.4 0.7-3.2h3l-0.7 2.8 2 0.4 0.7-3.2h3.3v-2h-2.9l0.9-4h3zM9 10h-3l1-4h3l-1 4z'></path>
    </svg>
  );
};
