import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Sidebar, SidebarProps } from ".";

export default {
  title: "Design System/Organisms/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <div style={{ width: 380 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const TemplateStory: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Plain = TemplateStory.bind({});
Plain.args = {};

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
