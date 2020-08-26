import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps, Text } from 'atoms';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const ButtonTemplate: Story<ButtonProps> = ({ ...args }) => (
  <Button {...args}>Button</Button>
);

export const primary = ButtonTemplate.bind({});
primary.args = {
  children: <Text>Button</Text>,
};
