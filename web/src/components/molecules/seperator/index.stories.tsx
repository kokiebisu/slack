import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Seperator, SeperatorProps } from ".";

export default {
  title: "Design System/Molecules/Seperator",
  component: Seperator,
} as Meta;

const TemplateStory: Story<SeperatorProps> = (args) => <Seperator {...args} />;

export const Date = TemplateStory.bind({});
Date.args = {
  variant: "date",
};
