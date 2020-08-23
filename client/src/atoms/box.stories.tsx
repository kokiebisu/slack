import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, Text, BoxProps } from 'atoms';
import React from 'react';
import styled from 'styled-components';

export default {
  title: 'Design System/atoms',
  component: Box,
  argTypes: { label: { control: 'text' } },
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

const BoxTemplate: Story<BoxProps> = ({ children, className, ...args }) => (
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
