import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Prototype, PrototypeProps } from ".";

export default {
  title: "Design System/Prototype/GetStarted",
  component: Prototype,
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const Create = TemplateStory.bind({});
Create.args = {
  variant: "create",
};

export const ConfirmDigit = TemplateStory.bind({});
ConfirmDigit.args = {
  variant: "confirmdigit",
};
