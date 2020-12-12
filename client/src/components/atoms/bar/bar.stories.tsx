import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Bar, BarProps } from "./bar.component";

export default {
  title: "Design System/Atoms/Bar",
  component: Bar,
  argTypes: {
    to: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<BarProps> = (args) => <Bar {...args} />;

export const validation = Template.bind({});
validation.args = {
  variant: "validation",
};
