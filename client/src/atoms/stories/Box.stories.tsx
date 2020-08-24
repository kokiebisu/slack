import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps, Text } from 'atoms';
import styled from 'styled-components';

export default {
  title: 'Design System/Atoms/Box',
  component: Box,
} as Meta;

const Wrapper = styled(Box)`
  &.no-content {
    height: 10px;
    width: 10px;
    background-color: red;
  }
  &.with-content {
    padding: 15px;
    background: blue;
  }
`;

const data = {
  children: <Text>Box</Text>,
};

const BoxTemplate: Story<BoxProps> = ({ ...args }) => <Wrapper {...args} />;

export const base = BoxTemplate.bind({});
base.args = {
  className: 'with-content',
  ...data,
};

export const withoutContent = BoxTemplate.bind({});
withoutContent.args = {
  className: 'no-content',
};
