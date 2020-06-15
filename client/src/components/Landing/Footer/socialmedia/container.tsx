import * as React from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Styles
import { Wrapper } from './container.styles';
import {
  TwitterLogo,
  FacebookLogo,
  LinkedinLogo,
  YoutubeLogo,
} from '../../../../assets/svg/Logo';
import { SocialMedia } from '.';

export const SocialMedias = () => {
  const icons = [
    { type: 'twitter', component: <TwitterLogo /> },
    { type: 'facebook', component: <FacebookLogo /> },
    { type: 'youtube', component: <YoutubeLogo /> },
    { type: 'linkedin', component: <LinkedinLogo /> },
  ];

  return (
    <Wrapper>
      {icons.map((icon) => {
        return <SocialMedia {...icon} />;
      })}
    </Wrapper>
  );
};
