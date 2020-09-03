import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, Button, ButtonProps, Text, Icon } from 'atoms';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { lighten } from 'polished';
import { colors } from 'global/colors';
import { navItem } from 'atoms/stories/text.stories';

import {
  primaryButtonStyles,
  inverseButtonStyles,
  transparentButtonStyles,
} from 'atoms/button';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const ButtonTemplate: Story<ButtonProps> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const primary = ButtonTemplate.bind({});
primary.args = {
  children: <Text styles={primaryButtonStyles.text}>Button</Text>,
};

export const signin = ButtonTemplate.bind({});
signin.args = {
  transparent: true,
  size: 'sm',
  children: <Text styles={transparentButtonStyles.text}>Sign in</Text>,
};

export const launch = ButtonTemplate.bind({});
launch.args = {
  styles: primaryButtonStyles.wrapper,
  size: 'md',
  children: (
    <Box styles={primaryButtonStyles.flex}>
      <Box styles={primaryButtonStyles.textwrapper}>
        <Text styles={primaryButtonStyles.text}>Launch</Text>
      </Box>
      <Icon label='BottomArrow' width={10} fill={colors.white} />
    </Box>
  ),
};

export const inverse = ButtonTemplate.bind({});
inverse.args = {
  children: <Text styles={inverseButtonStyles.text}>Button</Text>,
  inverse: true,
};

export const menu = ButtonTemplate.bind({});
menu.args = {
  transparent: true,
  children: <Icon label='HamburgerButton' width={22} fill={colors.black} />,
};
