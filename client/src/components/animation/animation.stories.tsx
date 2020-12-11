import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Animation, AnimationProps } from "./animation.component";

export default {
  title: "Design System/Animation",
  component: Animation,
} as Meta;

const Template: Story<AnimationProps> = (args) => <Template {...args} />;

export const loading = Template.bind({});
loading.args = {
  type: "loading",
};
