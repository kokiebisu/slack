import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Layout, LayoutProps } from "components/layout/layout.component";
import { clearInterval } from "timers";

export default {
  title: "Design System/Layout",
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const center = Template.bind({});
center.args = {
  variant: "center",
};

export const workspace = Template.bind({});
workspace.args = {
  variant: "workspace",
};
