import * as React from 'react';

// Styles
import { Wrapper } from 'styles/Footer/SocialMedias';

// Svgs
import {
  TwitterLogo,
  FacebookLogo,
  LinkedinLogo,
  YoutubeLogo,
} from 'assets/svg/Logo';

// Components
import { SocialMedia } from 'components/Footer/SocialMedia';

export const SocialMedias = () => {
  const icons = [
    { type: 'twitter', component: <TwitterLogo /> },
    { type: 'facebook', component: <FacebookLogo /> },
    { type: 'youtube', component: <YoutubeLogo /> },
    { type: 'linkedin', component: <LinkedinLogo /> },
  ];

  return (
    <Wrapper>
      {icons.map((icon, index) => {
        return <SocialMedia key={index} {...icon} />;
      })}
    </Wrapper>
  );
};
