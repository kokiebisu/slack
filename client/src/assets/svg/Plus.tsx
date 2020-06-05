import * as React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../util/svgUtil';

export const BoldPlus: React.FC<SVG> = (props) => {
  return (
    <Wrapper {...props} viewBox='0 0 448 448'>
      <path
        d='m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0'
        fill={props.color}
      />
    </Wrapper>
  );
};

export const Plus: React.FC<SVG> = (props) => {
  return (
    <Wrapper {...props} viewBox='0 0 512 512'>
      <g>
        <g>
          <path
            fill={props.color}
            d='M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
              v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z'
          />
        </g>
      </g>
    </Wrapper>
  );
};
