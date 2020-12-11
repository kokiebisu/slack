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
