import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Dialog, DialogProps } from "./dialog.component";

export default {
  title: "Design System/Atoms/Dialog",
  component: Dialog,
  argTypes: {
    to: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<DialogProps> = (args) => <Dialog {...args} />;

export const error = Template.bind({});
error.args = {
  variant: "error",
};
error.decorators = [
  (Story) => (
    <div style={{ maxWidth: 300 }}>
      <Story />
    </div>
  ),
];

export const password = Template.bind({});
password.args = {
  variant: "password",
};

export const Email = Template.bind({});
Email.args = {
  variant: "email",
};
