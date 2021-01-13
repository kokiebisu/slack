import React from "react";

/** variants */
import { CheckBullet } from "./bullet.check";
import { HashtagBullet } from "./bullet.hashtag";
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
  const variants: { [variant: string]: any } = {
    together: <TogetherBullet {...props} />,
    check: <CheckBullet {...props} />,
    more: <MoreBullet {...props} />,
    hashtag: <HashtagBullet {...props} />,
  };
  return <div data-testid={`${variant}-bullet`}>{variants[variant]}</div>;
};
