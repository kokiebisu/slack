import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HeaderProps } from './props';
import { ThemeProvider } from 'styled-components';
import { main } from '../../../global/colors';
import { Header } from './header.component';

export default {
  title: 'Design System/Organisms/Header',
  component: Header,
  decorators: [
    (Story) => (
      <ThemeProvider theme={main}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const HeaderStories: Story<HeaderProps> = (args) => <Header {...args} />;

export const landing = HeaderStories.bind({});
landing.args = {
  type: 'landing',
};
