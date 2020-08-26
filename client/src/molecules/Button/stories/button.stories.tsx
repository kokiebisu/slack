import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps } from 'atoms';
import styled from 'styled-components';
import Button from 'molecules/Button/button';

export default {
  title: 'Design System/Molecules/Button',
  component: Box,
} as Meta;

const ButtonTemplate: Story<BoxProps> = ({ ...args }) => <Button {...args} />;

export const base = ButtonTemplate.bind({});
base.args = {};
