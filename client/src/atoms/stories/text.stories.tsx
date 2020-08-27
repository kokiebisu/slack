import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, TextProps, Text, Icon } from 'atoms';
import styled, { css } from 'styled-components';
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

const TextTemplate: Story<TextProps> = ({ ...args }) => <Text {...args} />;

export const navItem = TextTemplate.bind({});
navItem.args = {
  styles: css`
    margin: 0 15px;
    &:hover {
      color: ${hover};
      cursor: pointer;
    }
  `,
};
