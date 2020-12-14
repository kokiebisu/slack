import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Auth, AuthProps } from "components/organisms/auth/auth.component";

export default {
  title: "Design System/Organisms/Auth",
  component: Auth,
} as Meta;

const Template: Story<AuthProps> = (args) => <Auth {...args} />;

export const signin = Template.bind({});
signin.args = {
  variant: "signin",
};

export const getStarted = Template.bind({});
getStarted.args = {
  variant: "getstarted",
};
getStarted.decorators = [
  (Story) => (
    <div style={{ maxWidth: 780 }}>
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

export const confirm = Template.bind({});
confirm.args = {
  variant: "confirm",
};

export const invited = Template.bind({});
invited.args = {
  variant: "invited",
};
