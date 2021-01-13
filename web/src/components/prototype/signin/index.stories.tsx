import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Prototype } from ".";

export default {
  title: "Design System/Prototype/SignIn",
  component: Prototype,
} as Meta;

const TemplateStory: Story<{}> = (args) => <Prototype {...args} />;

export const SignIn = TemplateStory.bind({});
SignIn.args = {};
