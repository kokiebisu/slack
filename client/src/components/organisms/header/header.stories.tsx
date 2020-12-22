import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Header, HeaderProps } from "./header.component";

export default {
  title: "Design System/Organisms/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const landing = Template.bind({});
landing.args = {
  variant: "landing",
};

export const create = Template.bind({});
create.args = {
  variant: "create",
};

export const signin = Template.bind({});
signin.args = {
  variant: "signin",
};

export const workspace = Template.bind({});
workspace.args = {
  variant: "workspace",
};

export const find = Template.bind({});
find.args = {
  variant: "find",
};
