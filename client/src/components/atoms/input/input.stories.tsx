import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThemeProvider } from "styled-components";
import { Input, InputProps } from "./input.component";
import { main } from "../../../global/colors";

export default {
  title: "Design System/Atoms/Input",
  component: Input,
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

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const plain = Template.bind({});
plain.args = {
  variant: "plain",
};

export const password = Template.bind({});
password.args = {
  variant: "password",
};
