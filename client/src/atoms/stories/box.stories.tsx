import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps, Text } from 'atoms';
import { css } from 'styled-components';

export default {
  title: 'Design System/Atoms/Box',
  component: Box,
} as Meta;

const BoxTemplate: Story<BoxProps> = ({ ...args }) => <Box {...args} />;

export const primary = BoxTemplate.bind({});
primary.args = {
  styles: css`
    padding: 15px;
    background: blue;
  `,
};

export const withoutContent = BoxTemplate.bind({});
withoutContent.args = {
  styles: css`
    height: 10px;
    width: 10px;
    background-color: red;
  `,
  children: null,
};
