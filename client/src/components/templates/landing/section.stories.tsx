import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { ToggleProvider } from 'context/toggle-context';
import { MemoryRouter } from 'react-router-dom';

/**
 * Components
 */
import { Template } from './landing.component';

/**
 * Props
 */
import { TemplateProps } from './props';

/**
 * Global
 */
import { main } from '../../../global/colors';

export default {
  title: 'Design System/Organisms/Section/Landing',
  component: Template,
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

const TemplateStories: Story<TemplateProps> = (args) => <Template {...args} />;

export const together = TemplateStories.bind({});
together.args = {
  type: 'together',
};

export const software = TemplateStories.bind({});
software.args = {
  type: 'software',
};

export const choose = TemplateStories.bind({});
choose.args = {
  type: 'choose',
};
