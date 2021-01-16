import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThemeProvider } from "styled-components";
import { Accordion, AccordionProps } from ".";
import { main } from "../../../global/colors";

export default {
  title: "Design System/Organisms/Accordion",
  component: Accordion,
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

const TemplateStory: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = TemplateStory.bind({});
Default.args = {};
