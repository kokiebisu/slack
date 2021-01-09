import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Page, PageProps } from ".";

export default {
  title: "Design System/Pages",
  component: Page,
} as Meta;

const TemplateStory: Story<PageProps> = (args) => <Page {...args} />;

export const Landing = TemplateStory.bind({});
Landing.args = {
  variant: "landing",
};

export const GetStarted = TemplateStory.bind({});
GetStarted.args = {
  variant: "getstarted",
};

export const SignIn = TemplateStory.bind({});
SignIn.args = {
  variant: "signin",
};

export const FindTeam = TemplateStory.bind({});
FindTeam.args = {
  variant: "findteam",
};

export const CreateTeam = TemplateStory.bind({});
CreateTeam.args = {
  variant: "createteam",
};

export const ConfirmDigit = TemplateStory.bind({});
ConfirmDigit.args = {
  variant: "confirmdigit",
};

export const Workspace = TemplateStory.bind({});
Workspace.args = {
  variant: "workspace",
};
