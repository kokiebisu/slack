import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Template } from './landing.component';
import { TemplateProps } from './props';
import { ThemeProvider } from 'styled-components';
import { main } from '../../../global/colors';
import { ToggleProvider } from 'context/toggle-context';
import { MemoryRouter } from 'react-router-dom';

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
