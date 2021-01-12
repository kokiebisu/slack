import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Prototype, PrototypeProps } from ".";

export default {
  title: "Design System/Prototype/Client",
  component: Prototype,
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const SetupTeamName = TemplateStory.bind({});
SetupTeamName.args = {
  variant: "setup-team-name",
};

export const SetupChannels = TemplateStory.bind({});
SetupChannels.args = {
  variant: "setup-channels",
};

export const SetupInvites = TemplateStory.bind({});
SetupInvites.args = {
  variant: "setup-invites",
};

export const Channel = TemplateStory.bind({});
Channel.args = {
  variant: "channel",
};
