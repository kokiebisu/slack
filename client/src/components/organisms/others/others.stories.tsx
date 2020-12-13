import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Others, OthersProps } from "./others.component";

export default {
  title: "Design System/Organisms/Others",
  component: Others,
} as Meta;

const Template: Story<OthersProps> = (args) => <Others {...args} />;

export const workspace = Template.bind({});
workspace.args = {
  variant: "workspace",
};
workspace.argTypes = {
  opacity: {
    control: {
      type: "number",
    },
  },
};
