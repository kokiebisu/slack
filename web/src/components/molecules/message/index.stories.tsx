import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Message, MessageProps } from ".";

export default {
  title: "Design System/Molecules/Message",
  component: Message,
} as Meta;

const Template: Story<MessageProps> = (args) => <Message {...args} />;

export const client = Template.bind({});
client.args = {
  variant: "client",
};
client.argTypes = {
  type: {
    control: {
      type: "select",
      options: ["channel", "random", "general", "directMessage"],
    },
  },
};
