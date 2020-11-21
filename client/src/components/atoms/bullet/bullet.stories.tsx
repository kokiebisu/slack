import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Bullet } from './bullet.component';
import { BulletProps } from './props';
import { ThemeProvider } from 'styled-components';
import { main } from '../../../global/colors';

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
  decorators: [
    (Story) => (
      <ThemeProvider theme={main}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const ButtonStories: Story<BulletProps> = (args) => <Bullet {...args} />;

export const together = ButtonStories.bind({});
together.args = {
  type: 'together',
};
