import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Prototype, PrototypeProps } from "./workspace.component";

export default {
  title: "Design System/Prototype/Workspace",
  component: Prototype,
} as Meta;

const Template: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const channel = Template.bind({});
channel.args = {
  variant: "channel",
};

export const directMessage = Template.bind({});
directMessage.args = {
  variant: "directmessage",
};

export const draft = Template.bind({});
draft.args = {
  variant: "draft",
};

export const mention = Template.bind({});
mention.args = {
  variant: "mention",
};

export const saved = Template.bind({});
saved.args = {
  variant: "saved",
};

export const threads = Template.bind({});
threads.args = {
  variant: "threads",
};
