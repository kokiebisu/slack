import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Layout, LayoutProps } from "components/layout/layout.component";

export default {
  title: "Design System/Layout",
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const workspace = Template.bind({});
workspace.args = {
  variant: "workspace",
};

export const getstarted = Template.bind({});
getstarted.args = {
  variant: "getstarted",
};
