import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from './button.component';
import { ButtonProps } from './props';
import { ThemeProvider } from 'styled-components';
import { main } from '../../../global/colors';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
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

const ButtonStories: Story<ButtonProps> = (args) => <Button {...args} />;

export const primary = ButtonStories.bind({});
primary.args = {
  type: 'primary',
};
primary.argTypes = {
  inverse: {
    control: 'boolean',
  },
  size: {
    control: {
      type: 'select',
      options: ['sm', 'lg'],
    },
  },
};

export const nav = ButtonStories.bind({});
nav.args = {
  type: 'nav',
};
