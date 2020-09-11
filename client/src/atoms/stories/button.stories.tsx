import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, Button, ButtonProps, Text, Icon } from 'atoms';
import { colors } from 'global/colors';
import {
  primaryButtonStyles,
  transparentButtonStyles,
  inverseButtonStyles,
} from 'atoms/styles/button.styles';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const primary = ButtonTemplate.bind({});
primary.args = {
  styles: primaryButtonStyles,
  children: <Text styles={primaryButtonStyles.text}>Primary</Text>,
};

export const signin = ButtonTemplate.bind({});
signin.args = {
  styles: transparentButtonStyles,
  transparent: true,
  size: 'sm',
  children: <Text styles={transparentButtonStyles.text}>Sign in</Text>,
};

export const launch = ButtonTemplate.bind({});
launch.args = {
  styles: primaryButtonStyles,
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
  styles: inverseButtonStyles,
  children: <Text styles={inverseButtonStyles.text}>Button</Text>,
  inverse: true,
};

export const menu = ButtonTemplate.bind({});
menu.args = {
  styles: transparentButtonStyles,
  transparent: true,
  children: <Icon label='HamburgerButton' width={22} fill={colors.black} />,
};
