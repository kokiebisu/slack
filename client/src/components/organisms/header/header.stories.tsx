import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';

/**
 * Context
 */
import { ToggleProvider } from 'context/toggle-context';

/**
 * Props
 */
import { HeaderProps } from './props';

/**
 * Global
 */
import { main } from '../../../global/colors';

/**
 * Components
 */
import { Header } from './header.component';

export default {
  title: 'Design System/Organisms/Header',
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <ToggleProvider>
          <ThemeProvider theme={main}>
            <Story />
          </ThemeProvider>
        </ToggleProvider>
      </MemoryRouter>
    ),
  ],
} as Meta;

const HeaderStories: Story<HeaderProps> = (args) => <Header {...args} />;

export const landing = HeaderStories.bind({});
landing.args = {
  type: 'landing',
};

export const create = HeaderStories.bind({});
create.args = {
  type: 'create',
};
