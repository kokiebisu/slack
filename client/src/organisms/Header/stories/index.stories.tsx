import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, Text } from 'atoms';
import { landingHeaderStyles, Header } from 'organisms/Header';

export default {
  title: 'Design System/Organisms/Header',
  component: Box,
} as Meta;

interface Props {
  extend: any;
}

const HeaderTemplate: Story<Props> = ({ ...args }) => <Header {...args} />;

export const LandingHeader = HeaderTemplate.bind({});
LandingHeader.args = {
  extend: landingHeaderStyles,
};
