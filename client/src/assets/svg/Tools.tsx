import * as React from 'react';
import { SVG } from './interface';

export const Move: React.FC<SVG> = (props) => {
  return (
    <svg {...props} viewBox='0 0 640 512'>
      <path
        fill={props.color}
        d='M400 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48zM128 256a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 208a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80zm384-208a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 208a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80zM401 210.73a24 24 0 0 0 15 5.27h64a24 24 0 0 0 0-48h-55.59L351 109.27a24 24 0 0 0-30.62.51l-104 89.11a32 32 0 0 0 3.06 50.94l76.53 51V416a24 24 0 0 0 48 0V288a24 24 0 0 0-10.69-20l-50.11-33.4 71.29-61.1z'
      />
    </svg>
  );
};

export const StartThread: React.FC<SVG> = (props) => {
  return (
    <svg {...props} viewBox='0 0 512 512'>
      <path
        fill={props.color}
        d='M368 168H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-96 96H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z'
      />
    </svg>
  );
};

export const Bookmark: React.FC<SVG> = (props) => {
  return (
    <svg {...props} viewBox='0 0 384 512'>
      <path
        fill={props.color}
        d='M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z'
      />
    </svg>
  );
};

export const More: React.FC<SVG> = (props) => {
  return (
    <svg {...props} viewBox='0 0 128 512'>
      <path
        fill={props.color}
        d='M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z'
      />
    </svg>
  );
};