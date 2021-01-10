import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Prototype, PrototypeProps } from ".";

export default {
  title: "Design System/Prototype/Create",
  component: Prototype,
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const Name = TemplateStory.bind({});
Name.args = {
  variant: "name",
};
