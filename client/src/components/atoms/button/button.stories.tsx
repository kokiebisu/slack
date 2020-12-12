import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThemeProvider } from "styled-components";
import { Button, ButtonProps } from "./button.component";
import { main } from "../../../global/colors";

export default {
  title: "Design System/Atoms/Button",
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

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const primary = Template.bind({});
primary.args = {
  variant: "primary",
  onPress: () => alert("button pressed"),
};
primary.argTypes = {
  inverse: {
    control: "boolean",
  },
  size: {
    control: {
      type: "select",
      options: ["sm", "lg"],
    },
  },
};

export const nav = Template.bind({});
nav.args = {
  variant: "nav",
  onPress: () => alert("button pressed"),
};

export const transparent = Template.bind({});
transparent.args = {
  variant: "transparent",
  onPress: () => alert("button pressed"),
};

export const socialmedia = Template.bind({});
socialmedia.args = {
  variant: "socialmedia",
};

export const link = Template.bind({});
link.args = {
  variant: "link",
};

export const launch = Template.bind({});
launch.args = {
  variant: "launch",
};
