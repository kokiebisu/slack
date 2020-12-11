import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Card, CardProps } from "components/molecules/card/card.component";

export default {
  title: "Design System/Molecules/Card",
  component: Card,
} as Meta;

const CardStories: Story<CardProps> = (args) => <Card {...args} />;

export const launch = CardStories.bind({});
launch.args = {
  variant: "launch",
};

export const policy = CardStories.bind({});
policy.args = {
  variant: "policy",
};
