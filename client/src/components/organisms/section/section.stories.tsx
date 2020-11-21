import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Section } from './section.component';
import { SectionProps } from './props';
import { ThemeProvider } from 'styled-components';
import { main } from '../../../global/colors';
import { ToggleProvider } from 'context/toggle-context';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Design System/Organisms/Section',
  component: Section,
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

const SectionStories: Story<SectionProps> = (args) => <Section {...args} />;

export const together = SectionStories.bind({});
together.args = {
  type: 'together',
};

export const software = SectionStories.bind({});
software.args = {
  type: 'software',
};

export const choose = SectionStories.bind({});
choose.args = {
  type: 'choose',
};
