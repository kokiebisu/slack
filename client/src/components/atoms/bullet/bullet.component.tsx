import React from "react";

import { CheckBullet } from "./bullet.check";
import { MoreBullet } from "./bullet.more";
import { TogetherBullet } from "./bullet.together";

export interface BulletProps {
  variant?: string;
  [x: string]: any;
}

export const Bullet: React.FC<BulletProps> = ({
  variant = "together",
  ...props
}) => {
  const variants = {
    together: <TogetherBullet {...props} />,
    check: <CheckBullet {...props} />,
    more: <MoreBullet {...props} />,
  };
  return <div data-testid={`${variant}-bullet`}>{variants[variant]}</div>;
};
