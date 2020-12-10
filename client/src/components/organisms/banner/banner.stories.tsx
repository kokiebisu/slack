import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

/**
 * Props
 */
import { BannerProps } from './props';

/**
 * Components
 */
import { Banner } from './banner.component';

export default {
  title: 'Design System/Organisms/Banner',
  component: Banner,
} as Meta;

const BannerStories: Story<BannerProps> = (args) => <Banner {...args} />;

export const landing = BannerStories.bind({});
landing.args = {
  type: 'landing',
};
