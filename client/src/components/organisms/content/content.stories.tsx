import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Content, ContentProps } from "./content.component";

export default {
  title: "Design System/Organisms/Content",
  component: Content,
} as Meta;

const Template: Story<ContentProps> = (args) => <Content {...args} />;

const channel = Template.bind({});
channel.args = {
  variant: "channel",
};

const directMessage = Template.bind({});
directMessage.args = {
  variant: "directmessage",
};
