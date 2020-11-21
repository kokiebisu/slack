import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FooterProps } from './props';
import { Footer } from 'components/organisms/footer/footer.component';

export default {
  title: 'Design System/Organisms/Footer',
  component: Footer,
} as Meta;

const FooterStories: Story<FooterProps> = (args) => <Footer {...args} />;

export const landing = FooterStories.bind({});
landing.args = {
  type: 'landing',
};
