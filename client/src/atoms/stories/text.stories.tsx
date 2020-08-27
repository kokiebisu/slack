import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, TextProps, Text, Icon } from 'atoms';
import styled from 'styled-components';
import { colors } from 'global/colors';
import theme from 'styled-theming';

export default {
  title: 'Design System/Atoms/Text',
  component: Text,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const hover = theme('mode', {
  light: colors.blue,
});

const Wrapper = styled(Text)`
  &.navitem {
    &:hover {
      color: ${hover};
      cursor: pointer;
    }
  }
`;

const TextTemplate: Story<TextProps> = ({ ...args }) => <Wrapper {...args} />;

export const navItem = TextTemplate.bind({});
navItem.args = {
  children: 'Text',
  className: 'navitem',
};
