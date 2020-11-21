import React from 'react';

import { CheckBullet } from './bullet.check';
import { MoreBullet } from './bullet.more';
import { TogetherBullet } from './bullet.together';
import { BulletProps } from './props';

export const Bullet: React.FC<BulletProps> = ({
  type = 'together',
  ...props
}) => {
  const types = {
    together: <TogetherBullet {...props} />,
    check: <CheckBullet {...props} />,
    more: <MoreBullet {...props} />,
  };
  return types[type];
};
