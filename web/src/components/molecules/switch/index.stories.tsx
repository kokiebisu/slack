import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { SwitchToggle, SwitchProps } from ".";

export default {
  title: "Design System/Molecules",
  component: SwitchToggle,
} as Meta;

const TemplateStory: Story<SwitchProps> = (args) => <SwitchToggle {...args} />;

export const Switch = TemplateStory.bind({});
Switch.args = {};
