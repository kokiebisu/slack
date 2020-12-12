import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Card, CardProps } from "components/molecules/card/card.component";

export default {
  title: "Design System/Molecules/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const launch = Template.bind({});
launch.args = {
  variant: "launch",
};

export const available = Template.bind({});
available.args = {
  variant: "available",
};

export const message = Template.bind({});
message.args = {
  variant: "message",
};

export const activity = Template.bind({});
activity.args = {
  variant: "activity",
};
