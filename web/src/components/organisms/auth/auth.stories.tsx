import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Prototype, PrototypeProps } from "components/organisms/auth";

export default {
  title: "Design System/Prototype/Auth",
  component: Prototype,
} as Meta;

const Template: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const signin = Template.bind({});
signin.args = {
  variant: "signin",
};
signin.decorators = [
  (Story) => (
    <div style={{ maxWidth: 620 }}>
      <Story />
    </div>
  ),
];

export const signup = Template.bind({});
signup.args = {
  variant: "signup",
};
signup.decorators = [
  (Story) => (
    <div style={{ maxWidth: 370 }}>
      <Story />
    </div>
  ),
];

export const find = Template.bind({});
find.args = {
  variant: "find",
};
find.decorators = [
  (Story) => (
    <div style={{ maxWidth: 370 }}>
      <Story />
    </div>
  ),
];

export const confirm = Template.bind({});
confirm.args = {
  variant: "confirm",
};

export const invited = Template.bind({});
invited.args = {
  variant: "invited",
};
invited.decorators = [
  (Story) => (
    <div style={{ maxWidth: 370 }}>
      <Story />
    </div>
  ),
];
