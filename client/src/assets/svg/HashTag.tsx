import * as React from 'react';
import styled, { css } from 'styled-components';

import * as b from '../../styles/blocks';

// Interface
import { Wrapper, SVG } from './interface';

export const ThinHashTag: React.FC<SVG> = (props) => {
  return (
    <Wrapper {...props} viewBox='0 0 16 16'>
      <path
        fill={props.color}
        d='M15 6v-2h-2.6l0.6-2.8-2-0.4-0.7 3.2h-3l0.7-2.8-2-0.4-0.7 3.2h-3.3v2h2.9l-0.9 4h-3v2h2.6l-0.6 2.8 2 0.4 0.7-3.2h3l-0.7 2.8 2 0.4 0.7-3.2h3.3v-2h-2.9l0.9-4h3zM9 10h-3l1-4h3l-1 4z'></path>
    </Wrapper>
  );
};

export const FatHashtag: React.FC<SVG> = (props) => {
  return (
    <Wrapper {...props} viewBox='0 -21 469.33333 469'>
      <g>
        <path
          fill={props.color}
          d='m448 106.839844h-64.8125l21.398438-79.808594c3.050781-11.371094-3.691407-23.082031-15.082032-26.132812-11.390625-3.050782-23.105468 3.710937-26.132812 15.082031l-24.339844 90.859375h-151.511719l21.398438-79.808594c3.050781-11.371094-3.691407-23.082031-15.082031-26.132812-11.394532-3.027344-23.082032 3.710937-26.113282 15.082031l-24.363281 90.859375h-79.359375c-11.777344 0-21.332031 9.535156-21.332031 21.332031 0 11.800781 9.554687 21.335937 21.332031 21.335937h67.902344l-34.324219 128h-76.246094c-11.773437 0-21.332031 9.535157-21.332031 21.332032s9.558594 21.332031 21.332031 21.332031h64.8125l-21.398437 79.808594c-3.050782 11.371093 3.691406 23.082031 15.082031 26.132812 1.835937.492188 3.691406.726563 5.503906.726563 9.410157 0 18.050781-6.273438 20.589844-15.808594l24.382813-90.859375h151.507812l-21.398438 79.808594c-3.046874 11.371093 3.691407 23.082031 15.085938 26.132812 1.832031.492188 3.6875.726563 5.523438.726563 9.410156 0 18.046874-6.273438 20.585937-15.808594l24.363281-90.859375h79.359375c11.777344 0 21.335938-9.535156 21.335938-21.332031s-9.558594-21.332032-21.335938-21.332032h-67.902343l34.324218-128h76.246094c11.777344 0 21.332031-9.535156 21.332031-21.335937 0-11.796875-9.554687-21.332031-21.332031-21.332031zm-154.753906 170.667968h-151.507813l34.324219-128h151.511719zm0 0'
          data-original='#000000'
          className='active-path'
          data-old_color='#000000'
        />
      </g>
    </Wrapper>
  );
};

export const ChannelHashtag: React.FC<SVG> = (props) => {
  return (
    <Wrapper {...props} viewBox='0 0 32 32'>
      <g>
        <g id='hash'>
          <path
            fill={props.color}
            d='M30,12V8h-5.004l1-8h-4l-1,8h-7.998l1-8h-4l-1,8H2v4h6.498L7.5,20H2v4h5l-1,8h4l1-8h8l-1.002,8H22
          l1-8h7v-4h-6.5l0.996-8H30z M19.5,20h-8l0.998-8h7.998L19.5,20z'
          />
        </g>
      </g>
    </Wrapper>
  );
};
