import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { TextEditor, TextEditorProps } from ".";

export default {
  title: "Design System/Organisms/TextEditor",
  component: TextEditor,
} as Meta;

const Template: Story<TextEditorProps> = (args) => <TextEditor {...args} />;

export const Editor = Template.bind({});
Editor.args = {};
