import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThemeProvider } from "styled-components";
import { Button, ButtonProps } from ".";
import { main } from "../../../global/colors";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
  argTypes: {
    to: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={main}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const TemplateStory: Story<ButtonProps> = (args) => <Button {...args} />;

export const primary = TemplateStory.bind({});
primary.args = {
  variant: "primary",
  onPress: () => alert("button pressed"),
};
primary.argTypes = {
  inverse: {
    control: "boolean",
  },
  size: {
    control: {
      type: "select",
      options: ["sm", "lg"],
    },
  },
};

export const nav = TemplateStory.bind({});
nav.args = {
  variant: "nav",
  onPress: () => alert("button pressed"),
};

export const transparent = TemplateStory.bind({});
transparent.args = {
  variant: "transparent",
  onPress: () => alert("button pressed"),
};

export const socialmedia = TemplateStory.bind({});
socialmedia.args = {
  variant: "socialmedia",
};
socialmedia.argTypes = {
  type: {
    control: {
      type: "select",
      options: ["twitter", "facebook", "youtube", "linkedin"],
    },
  },
};

export const link = TemplateStory.bind({});
link.args = {
  variant: "link",
};

export const launch = TemplateStory.bind({});
launch.args = {
  variant: "launch",
};

export const reaction = TemplateStory.bind({});
reaction.args = {
  variant: "reaction",
};

export const confirm = TemplateStory.bind({});
confirm.args = {
  variant: "confirm",
};

export const email = TemplateStory.bind({});
email.args = {
  variant: "email",
};
email.argTypes = {
  type: {
    control: {
      type: "select",
      options: ["outlook", "gmail"],
    },
  },
};

export const hamburger = TemplateStory.bind({});
hamburger.args = {
  variant: "hamburger",
};

export const workspace = TemplateStory.bind({});
workspace.args = {
  variant: "workspace",
};

export const getstarted = TemplateStory.bind({});
getstarted.args = {
  variant: "getstarted",
};

export const next = TemplateStory.bind({});
next.args = {
  variant: "next",
};

export const square = TemplateStory.bind({});
square.args = {
  variant: "square",
};

export const Auth = TemplateStory.bind({});
Auth.args = {
  variant: "auth",
};

export const Modal = TemplateStory.bind({});
Modal.args = {
  variant: "modal",
};

export const Close = TemplateStory.bind({});
Close.args = {
  variant: "close",
};

export const Search = TemplateStory.bind({});
Search.args = {
  variant: "search",
};
Search.decorators = [
  (Story) => (
    <div style={{ maxWidth: 680 }}>
      <Story />
    </div>
  ),
];

export const Avatar = TemplateStory.bind({});
Avatar.args = {
  variant: "avatar",
};

export const TextEditor = TemplateStory.bind({});
TextEditor.args = {
  variant: "texteditor",
};
TextEditor.argTypes = {
  type: {
    control: {
      type: "select",
      options: ["lightening", "smile", "paperplane", "paperclip"],
    },
  },
};

export const New = TemplateStory.bind({});
New.args = {
  variant: "new",
};
