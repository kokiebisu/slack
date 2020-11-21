import React from 'react';
import { TogetherBullet } from './bullet.together';
import { BulletProps } from './props';

export const Bullet: React.FC<BulletProps> = ({
  type = 'together',
  ...props
}) => {
  const types = {
    together: <TogetherBullet {...props} />,
  };
  return types[type];
};
