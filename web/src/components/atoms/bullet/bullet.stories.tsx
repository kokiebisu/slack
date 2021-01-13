import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Bullet, BulletProps } from "./bullet.component";

export default {
  title: "Design System/Atoms/Bullet",
  component: Bullet,
  argTypes: {
    to: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<BulletProps> = (args) => <Bullet {...args} />;

export const together = Template.bind({});
together.args = {
  variant: "together",
};

export const check = Template.bind({});
check.args = {
  variant: "check",
};

export const more = Template.bind({});
more.args = {
  variant: "more",
};

export const hashtag = Template.bind({});
hashtag.args = {
  variant: "hashtag",
};
