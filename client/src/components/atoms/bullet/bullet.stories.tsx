import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Bullet } from './bullet.component';
import { BulletProps } from './props';

export default {
  title: 'Design System/Atoms/Bullet',
  component: Bullet,
  argTypes: {
    to: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const BulletStories: Story<BulletProps> = (args) => <Bullet {...args} />;

export const together = BulletStories.bind({});
together.args = {
  type: 'together',
};

export const check = BulletStories.bind({});
check.args = {
  type: 'check',
};

export const more = BulletStories.bind({});
more.args = {
  type: 'more',
};
