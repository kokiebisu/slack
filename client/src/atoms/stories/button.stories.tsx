import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, Button, ButtonProps, Text, Icon } from 'atoms';
import styled from 'styled-components';
import { colors } from 'global/colors';
import { navItem } from 'atoms/stories/text.stories';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const Flex = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled(Box)`
  margin-right: 15px;
`;

const ButtonTemplate: Story<ButtonProps> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const primary = ButtonTemplate.bind({});
primary.args = {
  children: <Text>Button</Text>,
};

export const signin = ButtonTemplate.bind({});
signin.args = {
  transparent: true,
  size: 'sm',
  children: <Text>Sign in</Text>,
};

export const launch = ButtonTemplate.bind({});
launch.args = {
  size: 'md',
  children: (
    <Flex>
      <TextWrapper>
        <Text>Launch</Text>
      </TextWrapper>
      <Icon label='BottomArrow' width={10} fill={colors.white} />
    </Flex>
  ),
};

export const inverse = ButtonTemplate.bind({});
inverse.args = {
  children: <Text>Button</Text>,
  inverse: true,
};
