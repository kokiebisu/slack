import * as React from 'react';
import { SVG, Wrapper } from '../../util/svgUtil';

export const Minus: React.FC<SVG> = (props) => {
  return (
    <Wrapper {...props} viewBox='0 0 409.6 409.6'>
      <g>
        <g>
          <path
            fill={props.color}
            d='M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467
            c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z'
          />
        </g>
      </g>
    </Wrapper>
  );
};
