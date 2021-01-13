import { Story, Meta } from "@storybook/react/types-6-0";
import { ThemeProvider } from "styled-components";
import { ToggleProvider } from "context/toggle-context";
import { MemoryRouter } from "react-router-dom";
import { Prototype, PrototypeProps } from ".";
import { main } from "global/colors";

export default {
  title: "Design System/Prototype/Landing",
  component: Prototype,
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

const TemplateStories: Story<PrototypeProps> = (args) => (
  <Prototype {...args} />
);

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

export const banner = TemplateStories.bind({});
banner.args = {
  variant: "banner",
};
