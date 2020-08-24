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

const BoxTemplate: Story<BoxProps> = ({ children, ...args }) => (
  <Wrapper {...args}>{children}</Wrapper>
);

export const base = BoxTemplate.bind({});
base.args = {
  className: 'with-content',
  children: <Text>Hello</Text>,
};

export const withoutContent = BoxTemplate.bind({});
withoutContent.args = {
  className: 'no-content',
};
