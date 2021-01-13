import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Toggle, ToggleProps } from ".";

export default {
  title: "Design System/Molecules",
  component: Toggle,
} as Meta;

const TemplateStory: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Switch = TemplateStory.bind({});
Switch.args = {
  variant: "switch",
};

export const Menu = TemplateStory.bind({});
Menu.args = {
  variant: "menu",
};
