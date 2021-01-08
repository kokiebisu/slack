import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Modal, ModalProps } from "./modal.component";

export default {
  title: "Design System/Organisms/Modal",
  component: Modal,
} as Meta;

const TemplateStory: Story<ModalProps> = (args) => <Modal {...args} />;

export const Launch = TemplateStory.bind({});
Launch.args = {
  variant: "launch",
};

export const Landing = TemplateStory.bind({});
Landing.args = {
  variant: "landing",
};

export const Invite = TemplateStory.bind({});
Invite.args = {
  variant: "invite",
};

export const Channel = TemplateStory.bind({});
Channel.args = {
  variant: "channel",
};

export const workspace = TemplateStory.bind({});
workspace.args = {
  variant: "workspace",
};
workspace.argTypes = {
  opacity: {
    control: {
      type: "number",
    },
  },
};
