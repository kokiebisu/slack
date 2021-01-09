import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Prototype, PrototypeProps } from ".";

export default {
  title: "Design System/Prototype/Auth",
  component: Prototype,
} as Meta;

const TemplateStories: Story<PrototypeProps> = (args) => (
  <Prototype {...args} />
);

export const GetStarted = TemplateStories.bind({});
GetStarted.args = {
  variant: "getstarted",
};
