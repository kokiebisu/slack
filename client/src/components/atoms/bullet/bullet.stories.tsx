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

const BulletStories: Story<BulletProps> = (args) => <Bullet {...args} />;

export const together = BulletStories.bind({});
together.args = {
  variant: "together",
};

export const check = BulletStories.bind({});
check.args = {
  variant: "check",
};

export const more = BulletStories.bind({});
more.args = {
  variant: "more",
};
