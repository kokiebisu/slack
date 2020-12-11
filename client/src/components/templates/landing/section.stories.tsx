import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThemeProvider } from "styled-components";
import { ToggleProvider } from "context/toggle-context";
import { MemoryRouter } from "react-router-dom";
import { Template, TemplateProps } from "./landing.component";
import { main } from "../../../global/colors";

export default {
  title: "Design System/Organisms/Section/Landing",
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
  variant: "together",
};

export const software = TemplateStories.bind({});
software.args = {
  variant: "software",
};

export const choose = TemplateStories.bind({});
choose.args = {
  variant: "choose",
};
