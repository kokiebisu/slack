import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Modal, ModalProps } from "./modal.component";

export default {
  title: "Design System/Organisms/Modal",
  component: Modal,
} as Meta;

const ModalStories: Story<ModalProps> = (args) => <Modal {...args} />;

export const launch = ModalStories.bind({});
launch.args = {
  variant: "launch",
};
